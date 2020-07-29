parasails.registerPage("new_service_post", {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    // Main syncing/loading state for this page.
    syncing: false,

    files: [],
    uploadFile: [],
    errFile: [],
    spin: false,
    stateList: [],
    cityList: [],
    cityArea: [],
    existingService: [],
    categoryList: [],
    SubcategoryList: [],
    allcountry: [],
    selectedCity: [],
    // Form data
    formData: new FormData(),

    // For tracking client-side validation errors in our form.
    // > Has property set to `true` for each invalid property in `formData`.
    formErrors: {
      /* … */
    },

    // A set of validation rules for our form.
    // > The form will not be submitted if these are invalid.
    // formRule: {
    //   email: { required: true },
    //   phone: { required: true },
    //   country: { required: true },
    //   title: { required: true },
    //   description:{ required: true },
    //   website: { required: true },
    //   tags : { required: true },
    //   area: { required: true },
    //   location: { required: true },
    //   latitude: { required: true },
    //   longitude: { required: true },
    //   compensation: { required: true },
    //   state:  { required: true },
    //    city: { required: true },
    //    category: { required: true },
    //    file: { required: true },
    // },

    // Server error state for the form
    cloudError: ""
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    //…
    this.getCategory();
    this.getCountry();
    console.log("this", this);
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    getCountry: async function() {
      let allCityList = await fetch(`/api/v1/country/getAllCountry?limit=999`, {
        method: "GET"
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          return myJson;
        });
      this.allcountry = allCityList;
    },
    getCategory: async function() {
      let categories = await fetch(
        `/api/v1/category?limit=999&where={"parent_category":null}`,
        {
          method: "GET"
        }
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          return myJson;
        });
      this.categoryList = categories;
    },
    updateSubcategory: async function(event) {
      let id = event.target.value;
      console.log(id, "this.categoryListthis.categoryListthis.categoryList");
      let category = this.categoryList.find(obj => obj.id == id);
      console.log(category);
      console.log(category.child_categories);
      if (category.child_categories.length == 0) {
        category.child_categories.push({
          name: category.name,
          id: id
        });
      }
      this.SubcategoryList = category.child_categories;
    },
    updateState: async function(event) {
      let countryid = event.target.value
        ? event.target.value
        : this.formData.country;
      let country = this.allcountry.find(obj => obj.id == countryid);
      console.log(country);
      this.selectedCity = country.city;
      this.stateList = country.state;
    },
    updateCity: async function(event) {
      let id = event.target.value;

      // let cityList = await fetch(`/api/v1/city?state=${id}&limit=999`, {
      //   method: "GET"
      // })
      //   .then(function(response) {
      //     return response.json();
      //   })
      //   .then(function(myJson) {
      //     return myJson;
      //   });
      let cityList = this.selectedCity;
      let city = [];
      for (it of cityList) {
        console.log(it.state);
        if (it.state == id) {
          city.push(it);
        }
      }
      this.cityList = city;
    },

    updateArea: async function(event) {
      let id = event.target.value;

      let cityarea = await fetch(`/api/v1/city_location?city=${id}&limit=999`, {
        method: "GET"
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          return myJson;
        });
      console.log("cityarea", cityarea);
      this.cityArea = cityarea;
    },

    previewImages: function() {
      var preview = document.querySelector("#preview");
      preview.innerHTML = "";
      let i = 0;

      if (this.uploadFile) {
        [].forEach.call(this.uploadFile, readAndPreview);
      }

      function readAndPreview(file) {
        // Make sure `file.name` matches our extensions criteria
        if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
          return alert(file.name + " is not an image");
        } // else...

        var reader = new FileReader();

        reader.addEventListener("load", function() {
          var divEl = document.createElement("div");
          //divEl.style.border = "2px solid red";
          divEl.className = "image-test";

          var image = new Image(50, 50);
          image.className = file.name;
          image.src = this.result;
          image.id = i;
          i++;
          preview.appendChild(divEl);
          divEl.appendChild(image);
          // var btnEl = document.createElement("button");

          // var iEl = document.createElement("i");
          // iEl.className = "fa fa-close";
          // btnEl.appendChild(iEl);

          //<button class="uk-button uk-button-default"> <i class="fa fa-close"></i>  </button> </div>
          // divEl.appendChild(btnEl);

          preview.appendChild(divEl);
        });

        reader.readAsDataURL(file);
      }
    },

    fileupload: async function(event) {
      this.files = [];

      this.files = event.target.files;
      console.log("files", this.files);

      await _.forEach(this.files, file => {
        const allowedtype = ["image/jpeg", "image/png", "image/gif"];
        if (allowedtype.includes(file.type)) {
          if (file.size <= 10000000) {
            this.uploadFile.push(file);
          }
        } else {
          this.errFile.push(file);
        }
      });
      await this.previewImages();
    },
    handle: async function() {
      this.spin = true;
      await this.filesave();
      this.spin = false;
    },

    deleteEvent: async function(event) {
      console.log(event, "fffffffffffffffffffffffff");
      var arr = this.uploadFile;
      var image = arr[event];
      if (image) {
        console.log("image", image.name);
        arr.splice(event, 1);
        // console.log(this.uploadFile, "this.uploadFile")
        var slides = document.getElementsByClassName("image-test");
        for (var i = 0; i < slides.length; i++) {
          if (image.name == slides[i].firstElementChild.className) {
            console.log("alerttttttt", slides[i].firstElementChild.className);
            slides[i].remove();
            // break;
          }
        }
      } else {
        arr = this.errFile;
        arr.splice(event, 1);
      }
    },

    filesave: async function() {
      let formData = new FormData();
      formData.append("title", this.formData.title);

      formData.append("bodydata", JSON.stringify(this.formData));

      _.forEach(this.uploadFile, file => {
        formData.append("files", file);
      });
      let existingService = [];
      await axios
        .post("/service", formData, {
          headers: {
            "Content-Type": "multipart/from-data"
          }
        })
        .then(function(response) {
          console.log(response.data);
          existingService = response.data;
          if (existingService.length == 0) {
            UIkit.notification({
              message: "You have Succesfully Created your Service!",
              status: "primary",
              pos: "top-center",
              timeout: 5000
            });
          }
        })
        .catch(function(res) {
          UIkit.notification(
            '<span uk-icon="icon: check" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="check"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline></svg></span> Sorry!! server error ',
            {
              status: "error",
              pos: "top-center"
            }
          );
        });
      if (existingService.length > 0) {
        this.existingService = existingService;
        UIkit.modal("#modal-example").show();
        console.log(this.existingService, "thissssss");
      }
    },
    claimService: async function(serviceid, userid) {
      console.log(serviceid, userid);
      let url = `/api/v1/claim/create?serviceid=${serviceid}&userid=${userid}`;
      let claimService = await fetch(`${url}`, {
        method: "GET"
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          return myJson;
        });
      if (typeof claimService === "object" && claimService !== null) {
        UIkit.notification({
          message:
            "You have claim succesfully for the service.Wait for admin review!!",
          status: "primary",
          pos: "top-center",
          timeout: 5000
        });
      }
      console.log(claimService, "claimServiceclaimService");
    },
    submittedForm: async function() {
      this.syncing = true;
    },

    handleParsingForm: function() {
      this.formErrors = {};

      var argins = this.formData;

      if (!argins.title) {
        this.formErrors.title = true;
      }

      if (!argins.category) {
        this.formErrors.category = true;
      }
      if (!argins.subcategory) {
        this.formErrors.subcategory = true;
      }

      if (!argins.phone) {
        this.formErrors.phone = true;
      }

      if (!argins.email) {
        this.formErrors.email = true;
      }

      if (!argins.address) {
        this.formErrors.address = true;
      }

      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      return argins;
    }
  }
});
