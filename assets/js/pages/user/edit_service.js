parasails.registerPage("edit-service", {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    // Main syncing/loading state for this page.
    syncing: false,

    files: [],
    uploadFile: [],
    errFile: [],

    stateList: [],
    cityList: [],
    cityArea: [],
    images: [],
    removeImages: [],
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
    await this.getCountry();
    this.formData.title = this.Service.title;
    this.formData.category = this.Service.category;
    this.formData.parent_category = this.Service.parent_category;
    this.formData.description = this.Service.description;

    this.formData.website = this.Service.website;
    this.formData.tags = this.Service.tags;
    this.formData.email = this.Service.email;

    this.formData.address = this.Service.address;
    this.formData.phone = this.Service.phone;
    this.formData.country = this.Service.country;

    this.formData.state = this.Service.state;
    this.formData.city = this.Service.city;
    this.formData.location = this.Service.location;

    this.formData.latitude = this.Service.latitude;
    this.formData.longitude = this.Service.longitude;
    this.formData.compensation = this.Service.compensation;

    if (this.Service.country != "") {
      console.log(this.allcountry);
      console.log(this.Service.country);
      let country = this.allcountry.find(obj => obj.id == this.Service.country);
      console.log(country);
      this.stateList = country.state;
      this.selectedCity = country.city;
      this.cityList = country.city;
    }
    await this.showimage();
    this.removeImages = [];
    this.getCategory();
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
      console.log(
        this.categoryList,
        "this.categoryListthis.categoryListthis.categoryList"
      );
      let category = this.categoryList.find(obj => obj.id == id);
      console.log(category.child_categories);
      this.SubcategoryList = category.child_categories;
    },
    showimage: async function() {
      let image = [];
      for (let [it, imgSrc] of this.Service.images.entries()) {
        image.push(imgSrc);
      }
      this.images = image;
    },
    updateState: async function(event) {
      let countryid = event.target.value
        ? event.target.value
        : this.formData.country;
      this.stateList = [];
      // let stateList = await fetch(`/api/v1/state?country=${id}&limit=999`, {
      //   method: "GET"
      // })
      //   .then(function(response) {
      //     return response.json();
      //   })
      //   .then(function(myJson) {
      //     return myJson;
      //   });
      if (countryid != "") {
        let country = this.allcountry.find(obj => obj.id == countryid);
        console.log(country);
        this.selectedCity = country.city;
        this.stateList = country.state;
        this.cityList = [];
      }
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

    RemovePreviousEvent: async function(event) {
      console.log(event, "eventttttttttt");
      let kk = this.images.splice(event, 1);
      for (let it of kk) {
        let path = it.slice(44);
        console.log(path, it);
        this.removeImages.push(path);
      }

      console.log(this.removeImages);
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
    handle: function() {
      this.filesave();
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
      let te = this.Service.id.toString();

      if (this.images.length > 0) {
        formData.append("previousImage", JSON.stringify(this.images));
      }
      formData.append("serviceid", te);
      formData.append("bodydata", JSON.stringify(this.formData));
      console.log(this.removeImages, "this.removeImagesthis.removeImages");
      if (this.removeImages.length > 0) {
        formData.append(
          "removeServiceImage",
          JSON.stringify(this.removeImages)
        );
      }
      if (this.uploadFile.length > 0) {
        _.forEach(this.uploadFile, file => {
          formData.append("files", file);
        });
      }

      console.log(
        te,
        "this.Service.idthis.Service.idthis.Service.idthis.Service.idthis.Service.id"
      );

      return axios
        .post("/updateservice", formData, {
          headers: {
            "Content-Type": "multipart/from-data"
          }
        })
        .then(function(response) {
          console.log(response);
          UIkit.notification(
            '<span uk-icon="icon: check" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="check"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline></svg></span> Your Service is updated successfully',
            {
              status: "success",
              pos: "top-center"
            }
          );
        })
        .catch(function(res) {
          UIkit.notification(
            '<span uk-icon="icon: check" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="check"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline></svg></span> Sorry!! server error ',
            {
              status: "error",
              pos: "bottom-right"
            }
          );
        });
    },
    submittedForm: async function() {
      //   var k = document.getElementById('country').value;
      //  console.log(k, "datattttttt");
      //  this.formData.country = k;
      // Redirect to the logged-in dashboard on success.
      // > (Note that we re-enable the syncing state here.  This is on purpose--
      // > to make sure the spinner stays there until the page navigation finishes.)

      this.syncing = true;
    },

    handleParsingForm: function() {
      this.formErrors = {};

      var argins = this.formData;

      if (!argins.title) {
        this.formErrors.title = true;
      }

      // // Validate email:
      // if (!argins.email) {
      //     this.formErrors.email = true;
      // }

      if (!argins.category) {
        this.formErrors.category = true;
      }
      // if (!argins.country) {
      //   this.formErrors.country = true;
      // }
      // if (!argins.state) {
      //   this.formErrors.state = true;
      // }

      // if (!argins.city) {
      //   this.formErrors.city = true;
      // }
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      return argins;
    }
  }
});
