parasails.registerPage("details", {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    me: {},
    csr_review: false,
    // Main syncing/loading state for this page.
    syncing: false,
    fvalue: false,
    unfvalue: false,
    modal: false,
    mailvalue: true,
    serviceLists: [],
    lat: "",
    lng: "",
    Helpful: 0,
    SeoShowServiceList: true,
    locationsyncing :false,
    stateList:[],
    cityList:[],
    stateId:'',
    cityid:'',
    countryId:'',
    allcountry:[],
    savedcountry:[],
    cityname:'',
    countryname:'',
    statename:'',
    locationformData: {
      rememberMe: true,
  },
    // Form data
    formData: {
      title: "",
      area: "",
      opt: "",
      overall: "",
      skill: "",
      price: "",
      ontime: "",
      communicate: "",
      rememberMe: true
    },
    formDataa: {
      rememberMe: true
    },
    // For tracking client-side validation errors in our form.
    // > Has property set to `true` for each invalid property in `formData`.
    formErrors: {
      /* … */
    },

    modalsyncing: false,
    modalishidden: true,
    modalhasError: false,
    mailSuccessMessage: false,
    showhelpful: false,
    //mail from
    mailsyncing: false,
    mailishidden: true,
    mailhasError: false,
    msgActive: false,
    mailformData: {
      rememberMe: true
    },
    // Form data
    modalformData: {
      rememberMe: true
    },
    // A set of validation rules for our form.
    // > The form will not be submitted if these are invalid.
    formRules: {
      title: {
        required: true
      },
      area: {
        required: false
      },
      pid: {
        required: true
      },
      opt: {
        required: true
      },
      overall: {
        required: true
      },
      skill: {
        required: true
      },
      ontime: {
        required: true
      },
      price: {
        required: true
      },
      communicate: {
        required: true
      }
    },

    // Server error state for the form
    cloudError: "",
    modalformRules: {
      emailAddress: { required: true, isEmail: true },
      password: { required: true }
    },
    //mail from rules
    mailformRules: {
      receiverEmail: { required: true },
      subject: { required: true },
      description: { required: true },
      senderEmail: { required: true }
    },
    // Server error state for the form
    modalcloudError: "",
    mailcloudError: ""
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
    if(localStorage.allcountry){
      let all= localStorage.getItem("allcountry");
     this.allcountry=JSON.parse(all);
  }
    await this.getLocation();
    if (this.addpromotion && this.addpromotion.promotion) {
      document.getElementById(
        "demoPromotion"
      ).innerHTML = `${this.addpromotion.promotion}`;
    }

    this.formData.pid = this.item.id;
    console.log(this);
    await this.RankGenerate();
    await this.Checkout(this.item.id);
    await this.LikeCount();

    if (this.item.mark_as_inactive == true) {
      let url = `/service/inactive/${this.item.id}`;
      let check = await fetch(url, {
        method: "POST"
      }).then(function(response) {
        return response.json();
      });
      if (check.firstName === "User has already set Inactive")
        this.msgActive = true;
    }

    console.log("this.me", this.me);
    const me = this.me;

    $(".user-favourite-item").on("click", async function(e) {
      e.preventDefault();

      if (me.id == undefined) {
        // UIkit.notification('You must login first!', {
        //     status: 'notice'
        // });
        UIkit.modal("#modal-center").show();
        return;
      }

      var postid = $(this).data("id");

      try {
        if (
          $(this)
            .find("i")
            .hasClass("fa-heart")
        ) {
          let response = await parasails.util.markAsUnFav(postid, this);
          $($(this)).html('<i class="fa fa-heart-o"></i>');
        } else {
          let response = await parasails.util.markAsFav(postid, this);
          $($(this)).html('<i class="fa fa-heart"></i>');
        }
      } catch (e) {
        UIkit.notification("Something went wrong!", {
          status: "danger"
        });
      }
    });

    this.FavouriteGenerator();
    await this.CheckFavourite(this.serviceList);
  },

  // fav2:function(ee){
  //   alert('apppp22');
  // },
  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    viewMoreReview: e => {},
    getLocation: async function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        await this.hotBelowServices();
      }
    },

    showPosition: async function(position) {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      console.log(this.lat, "lat long");
      console.log(position.coords.longitude, "lat long");

      await this.hotBelowServices();
    },
    hotBelowServices: async function() {
      this.SeoShowServiceList = false;
      let results = await parasails.util.distanceCalculate(
        this.serviceList,
        this.lat,
        this.lng
      );
      this.serviceLists = results;
    },
    FavouriteGenerator: async function() {
      if (this.me.favourite == null) return;

      var favouriteData = this.me.favourite;
      // console.log("favouriteData", favouriteData);
      $(".user-favourite-item").each(async function() {
        var postid = $(this).data("id");
        // console.log("favworking", postid);

        let favouriteFound = await favouriteData.map(
          item => item.postid == postid
        );
        if (favouriteFound.includes(true)) {
          $($(this)).html('<i class="fa fa-heart"></i>');
        }
      });
    },
    mailsubmittedForm() {
      this.mailsyncing = true;
      this.mailSuccessMessage = true;
      setTimeout(() => {
        UIkit.modal("#modal-example").hide();
      }, 5000);
    },
    modalsubmittedForm: async function() {
      // Redirect to the logged-in dashboard on success.
      // > (Note that we re-enable the syncing state here.  This is on purpose--
      // > to make sure the spinner stays there until the page navigation finishes.)
      this.modalsyncing = true;
      UIkit.modal("#modal-center").hide();
      let postslug = this.item.slug;
      window.location = `/service/${postslug}`;
    },

    RankGenerate: async function() {
      $(".service-items-rating").each(function() {
        var ranking = $(this).data("ranking");
        console.log("ranking");
        var html = "";
        var i, j, val;
        for (i = 1; i <= ranking; i++) {
          html = html + '<i class="fa fa-star"></i>';
        }
        val = 5 - ranking;

        if (val != 1) {
          html = html + '<i class="fa fa-star-half-o"></i>';
        }
        console.log("value of i", i);
        for (j = i; j <= 5; j++) {
          html = html + '<i class="fa fa-star-o"></i>';
        }

        $($(this)).html(html);
      });
    },
    mail: async function() {
      this.mailvalue = false;

      let url = window.location.href;
      console.log(url);
      document.getElementById("description").value = `Hello,
            Please check this service, I believe it will be useful for you.

            Service : <a href="${url}"></a>
            Thanks
            `;
      UIkit.modal("#modal-example").show();
    },
    inactive: async function(postId) {
      console.log(this);
      console.log(postId, "inactiveeeee");
      const me = this.me;
      if (me.id == undefined) {
        // UIkit.notification('You must login first!', {
        //     status: 'notice'
        // });
        UIkit.modal("#modal-center").show();
        return;
      }

      let url = `/service/inactive/${postId}`;
      // await fetch(url, {
      //     method: 'POST'
      // }) .then(function(response) {
      //     return response.json();
      // });
      var t = 1;
      let kk = await $.ajax({
        url: `${url}`,
        method: "POST",
        ContentType: "application/json",
        // data: JSON.stringify({data: servicePostId}),
        cache: false,
        success: function(afterResponse) {
          console.log("afterResponse", afterResponse);
          t = 2;
          UIkit.notification({
            message: `${afterResponse.firstName}`,
            status: "primary",
            pos: "top-center",
            timeout: 5000
          });

          return true;
        },
        error: function(e) {
          return e;
        }
      });
      console.log(kk, t, "KKKKKKKKKKKKKKKKKKKKKKKKKKKK");
      console.log("PPPPPPP");
      if (t == 2) {
        this.msgActive = true;
      }
    },
    LikeCount: async function() {
      this.showhelpful = true;
      let helpfulCount = 0;
      let teststae = 1;
      await $(".setLike").on("click", async function(e) {
        e.preventDefault();
        var currentid = $(this).data("id");
        teststae = currentid;
        console.log(currentid);
        let url = `/serviceReview/${currentid}`;
        let helpfulCount = await fetch(url, {
          method: "POST"
        }).then(function(response) {
          return response.json();
        });
        console.log(helpfulCount.firstName);
        $($(this))
          .find("span")
          .html(`helpful(${helpfulCount.firstName})`);
      });
    },

    Checkout: async function(val) {
      if (this.me && this.me.favourite && this.me.favourite.length) {
        console.log("this.item", this.item);
        var checkfavvalue = false;
        await this.me.favourite.forEach(function(favitem) {
          if (favitem.postid == val) {
            console.log("thissssssssssssssssss", this.fvalue);
            checkfavvalue = true;
          }
        });
        if (checkfavvalue === true) {
          this.fvalue = true;
        }
      }
    },
    //     UIkit.modal("#modal-center").show();
    //     return;
    //   }
    //   // item.isFav=false;
    //   if (this.fvalue === true) {
    //     let response = await parasails.util.markAsUnFav(postid, this);
    //     this.item.isFav = false;
    //     this.fvalue = false;
    //     console.log("unfavourite");
    //   } else {
    //     let response = await parasails.util.markAsFav(postid, this);
    //     console.log("favourite");
    //     this.item.isFav = true;
    //     this.fvalue = true;
    //   }
    // },

    updateFavItemByUser: async function(postid) {
      if (this.me && this.me.id) {
        console.log("mounted for me updateddddddddd", this.me);
      } else {
        UIkit.modal("#modal-center").show();
      }

      let check = 0;

      var services = this.serviceList;
      let service = services.find(obj => obj.id == postid);

      var hotvalue;
      var postid = postid;
      if (service && (service.isFav || service.isFav === true)) {
        let response = await parasails.util.markAsUnFav(postid, this);
        service.isFav = false;
        if (response) {
          console.log(response, "response");
        }
      } else {
        let response = await parasails.util.markAsFav(postid, this);
        console.log("favourite");
        if (response) {
          console.log(response, "response");
        }
        service.isFav = true;
      }
    },

    CheckFavourite: async function(services) {
      if (this.me && this.me.favourite && this.me.favourite.length) {
        services.forEach(service => {
          service.isFav = false;
          this.me.favourite.forEach(function(item) {
            if (item.postid == service.id) {
              service.isFav = true;
            }
          });
        });
      }
    },
    locationsubmittedForm: async function(){
      this.locationsyncing = true;
      return;
  },
 
  locationupdateState: async function(event) {
      let id = event.target.value;
     
      let text= $( "#country option:selected" ).text();
      this.countryname=text;
      this.countryId = id;

      this.stateId = '';
      this.cityid = '';
      this.stateList = "";
        
       let individualstate=[];
      for(const it of this.allcountry){
          if(it.id===id){
              console.log(it);
              individualstate= it;
              break;
          }
      }

      this.savedcountry=individualstate;
        let stateLists=individualstate.state;
        stateLists=await stateLists.sort(function(a, b){
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
      })
      this.stateList =  stateLists;

  },
  locationupdateCity: async function(event) {
      let id = event.target.value;
      this.stateId = id;
      this.cityList = "";
      this.cityid = '';
      this.statename=$("#state_location option:selected").text();
      let features=[];
      for(const it of this.savedcountry.city){
          if(it.state===id){
              features.push(it)
          }
      }

      this.cityList = await features.sort(function(a, b){
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
      });
  },

  locationCity: async function(event) {
      let id = event.target.value;
      this.cityid = id;
      this.cityname=$("#city_location option:selected").text();
   
  },
      
    locationhandleParsingForm: function() {
      this.locationformData.country=document.getElementById('country').value;
      this.locationformData.state=document.getElementById('state_location').value;

      if (Object.keys(this.formErrors).length > 0) {
          return;
      }
   
      localStorage.setItem('countryname', this.countryname);
      localStorage.setItem('countryId',this.countryId);

      localStorage.setItem('statename', this.statename);
      localStorage.setItem('stateid',this.stateId);

      localStorage.setItem('cityname', this.cityname);
      localStorage.setItem('cityid',this.cityid);
      var argins = this.locationformData;
     if (this.stateId != "") {
      localStorage.setItem("statename", this.statename);
      localStorage.setItem("stateid", this.stateId);
     } else {
       localStorage.removeItem("statename");
       localStorage.removeItem("stateid");
     }
      
        if (this.cityid != "") {
          localStorage.setItem("cityname", this.cityname);
          localStorage.setItem("cityid", this.cityid);
        } else {
          localStorage.removeItem("cityname");
          localStorage.removeItem("cityid");
        }
     
      return argins;
  },
 

    locationhandle: async function(){
    
      
      UIkit.modal("#modal-location").hide();
      var x = document.getElementsByClassName("exampleheader")[0];
      console.log(x,"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      let yy = document.getElementById('exampleheaderlist');

      if (localStorage.countryname) {
        yy.innerHTML = `<i class="fa fa-map-marker"></i>${localStorage.countryname}`;
      }
          
       if (localStorage.statename) {
         yy.innerHTML = `<i class="fa fa-map-marker"></i>${localStorage.statename}`;
       }
     if(localStorage.cityname){
    
      yy.innerHTML=`<i class="fa fa-map-marker"></i>${localStorage.cityname},${localStorage.statename}`;
     }
     
     
      

  },

    submittedform: async function(servicePostId, e) {
      console.log("you are now ", servicePostId, e);

      // await this.fav(servicePostId, false);
      try {
        parasails.util.markAsFav(servicePostId, this);

        this.syncing = true;

        setTimeout(() => {
          window.location = `/service/${e}`;
          //  UIkit.modal("#modal-center").hide();
        }, 2000);
      } catch (e) {
        UIkit.notification(e, {
          status: "danger"
        });
      }
    },
    submittedForm: async function() {
      // Redirect to the logged-in dashboard on success.
      // > (Note that we re-enable the syncing state here.  This is on purpose--
      // > to make sure the spinner stays there until the page navigation finishes.)
      this.syncing = true;
      console.log("donee");
      this.syncing = true;
      this.formData.title = "";
      this.formData.area = "";
      this.formData.opt = "";
      this.formData.overall = "";
      this.formData.skill = "";
      this.formData.price = "";
      this.formData.ontime = "";
      this.formData.communicate = "";
      UIkit.notification(
        '<span uk-icon="icon: check" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="check"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline></svg></span>     Your review is submitted!',
        {
          status: "success",
          pos: "bottom-right"
        }
      );
    }
  }
});
