parasails.registerPage("search", {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    // Main syncing/loading state for this page.
    syncing: false,

    // Form data
    formData: {},

    // For tracking client-side validation errors in our form.
    // > Has property set to `true` for each invalid property in `formData`.
    formErrors: {
      /* … */
    },

    // Server error state for the form
    cloudError: "",
    stateList: [],
    cityList: [],
    categoryId: "",
    countryId: "",
    stateId: "",
    cityId: "",
    serviceList: [],
    mountedservice: [],
    listshow: false,
    viewallStatus: true,
    urlpath: "",
    skipcount: 0,
    rankingurl: "",
    checkpoint: 0,
    checkurl: false,
    result: 6,
    lat: 0,
    lng: 0,
    multistyle: false,
    liststyle: true,
    thumbstyle: false,
    listactiveColor: "black",
    thumbactiveColor: "black",
    listingColor: "black",
    activeColor: "#ff9933",
    colorid: "#999",
    mapdata: "",

    childobject: {
      "uk-child-width-1-2@m": true,
      "uk-child-width-1-1": false
    },
    childobject1: {
      "uk-width-2-3@m": true,
      "uk-width-1-1": false
    },
    childobject2: {
      "uk-child-width-1-2@m": true,
      "uk-child-width-1-3@m": false
    },
    mapvalue: false,

    modalsyncing: false,
    modalishidden: true,
    modalhasError: false,
    mapgoogle: "",
    divvalue: 2,
    // Form data
    modalformData: {
      rememberMe: true
    },
    modalformRules: {
      emailAddress: {
        required: true,
        isEmail: true
      },
      password: {
        required: true
      }
    },
    // Server error state for the form
    modalcloudError: "",
    locationsyncing: false,
    locationformData: {
      rememberMe: true
    },
    countryname: "select your country",
    statename: "select your state",
    cityid: "",
    cityname: "select your city",
    onchangeevent: false,
    onchangeeventvalue: {},
    allcountry: [],
    savedcountry: [],
    categoryItemLists: [],
    parentid: "",
    itemid: "",
    categoryLoading: true
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach raw data exposed by the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    this.getLocation();
    this.parentid = this.parentid;
    this.itemid = this.itemid;
    console.log(
      this.parentid,
      this.itemid,
      "this.itemidthis.itemidthis.itemidthis.itemidthis.itemid"
    );
    this.updateCategoryCount();
    await this.updateIndividualCategory({}, true);

    let all = localStorage.getItem("allcountry");
    this.allcountry = JSON.parse(all);
    console.log(this.allcountry);

    // this.updateCategory({}, true);
    UIkit.modal("#modal-location").hide();
    if (localStorage.countryname) this.countryname = localStorage.countryname;
    if (localStorage.statename) this.statename = localStorage.statename;
    if (localStorage.countryId) this.countryId = localStorage.countryId;
    if (localStorage.stateId) this.stateId = localStorage.stateId;

    if (localStorage.cityid) this.cityid = localStorage.cityid;
    if (localStorage.cityname) this.cityname = localStorage.cityname;
    if (this.CountryList) {
      let selectedCountry = this.CountryList.filter(
        item => item == this.countryid
      );
      this.stateList = selectedCountry.state;
      this.cityList = selectedCountry.city;
    }

    if (!localStorage.countryname) {
      UIkit.modal("#modal-location").show();
    }

    await this.RankGenerate();
    this.mapgoogle = await parasails.util.gmapsInit();
    var me = this.me;
    if (localStorage.countryname)
      console.log(
        localStorage.countryname,
        "ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
      );

    this.mapshow();
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    mapshow: async function() {
      let map;
      const google = this.mapgoogle;
      let serviceList = await this.mountedservice;
      console.log(
        serviceList,
        "fffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );
      if (serviceList.length == 0) return serviceList;
      console.log(serviceList[0].latitude, serviceList[0].longitude);
      console.log(google.maps, "dddddddddddd");
      console.log(document.getElementById("map"));
      map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(
          serviceList[0].latitude,
          serviceList[0].longitude
        ),
        zoom: 10,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          mapTypeIds: ["roadmap", "terrain"]
        }
      });

      let features = [];
      for (it of serviceList) {
        features.push({
          position: new google.maps.LatLng(it.latitude, it.longitude)
        });
      }

      var infowindow = new google.maps.InfoWindow();

      console.log(features);
      let markers = [];
      let content = [];
      let lat = this.lat;
      let ln = this.lng;
      let mapk = "AIzaSyAcDztAZx1JL_D-fmmpNUMUZ4FsmmOiCBQ";

      for (const [j, it] of serviceList.entries()) {
        content[j] = `
                    <div class="uk-margin-medium-bottom">
                        <div class="uk-article">
                            <div class="uk-card  uk-background-default">
                                <div class="uk-visible-toggle uk-position-relative">
                                    <div class="uk-card-media-top">
                                        <a href="/service/${it.slug}">
                                            <img  data-src="images/placeholder.png" alt="" style="height:250px; width:350px" uk-img>
                                        </a>
                                     </div>
                                        <!-- uk-card-media-top -->
                                  </div>
            
                                 <span class="uk-label uk-position-absolute">
                                        <a href="/search/${
                                          it && it.category && it.category.slug
                                            ? it.category.slug
                                            : ""
                                        }">
                                            ${
                                              it.category
                                                ? it.category.name
                                                : ""
                                            }
                                        </a>
                                  </span>
                            <div class="uk-card-body uk-padding-small uk-margin-small-top">
                                <h3 class="uk-card-title uk-margin-remove-top">
                                    <a href="/service/${it.slug}">
                                    ${it.title}
                                    </a>
                                </h3>
                                <p class="uk-text-emphasis uk-margin-small">
                                    ${
                                      it && it.city && it.city.name
                                        ? it.city.name
                                        : ""
                                    },
                                    ${
                                      it && it.state && it.state.name
                                        ? it.state.name
                                        : ""
                                    } 
                                </p>
                                <p class="uk-margin-remove-top">Compansation :
                                      ${
                                        it && it.compensation
                                          ? it.compensation
                                          : ""
                                      }
                                </p>
                            </div>
                         </div>
                      </div>
                  `;
      }

      for (it of features) {
        marker = new google.maps.Marker({
          position: it.position,
          map: map,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ["roadmap", "terrain"]
          }
        });
        markers.push(marker);
      }

      for (const [j, it] of markers.entries()) {
        it.addListener("click", function() {
          infowindow.setContent(content[j]);
          console.log(j);
          infowindow.open(map, it);
        });
      }
    },
    updateCategory: async function(event, auto = false) {
      //display 6 items when search page is loaded for all category
      if (auto) {
        let url = `/api/v1/Service?`;

        let mountedservice = await fetch(`${url}&limit=6`, {
          method: "GET"
        }).then(function(response) {
          return response.json();
        });
        console.log(mountedservice, "mountedservice");
        this.result = mountedservice.length;
        var resmountedservice = await parasails.util.distanceCalculate(
          mountedservice,
          this.lat,
          this.lng
        );

        this.mountedservice = resmountedservice;
        this.urlpath = `${url}&sort=ranking desc`;
        this.rankingurl = `${url}&sort=hits desc`;
      } else {
        let id = event.target.value;
        this.categoryId = id;
      }
    },
    RankGenerate: async function() {
      console.log("plabonnnnnn");

      $(".service-items-rating").each(function() {
        var ranking = $(this).data("ranking");
        console.log("ranking---", ranking);
        var html = "";
        var i, j, val;
        for (i = 1; i <= ranking; i++) {
          html = html + '<i class="fa fa-star"></i>';
        }
        val = 5 - ranking;

        if (val != 1) {
          html = html + '<i class="fa fa-star-half-o"></i>';
        }
        for (j = i; j <= 5; j++) {
          html = html + '<i class="fa fa-star-o"></i>';
        }

        $($(this)).html(html);
      });
    },

    getLocation: async function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        console.log("lat long not found");
      }
    },

    showPosition: async function(position) {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    },
    updateFavItemByUser: async function(postid) {
      console.log(this.me, "meeeeeeee");

      if (this.me == undefined) {
        UIkit.modal("#modal-center").show();
        return;
      }

      let check = 0;

      var url = `/api/v1/Service?id=${postid}`;
      // var service = await fetch(url, {method: 'GET'}).then(function(response) {return response.json();});

      var services = await this.mountedservice.concat(this.serviceList);
      let service = services.find(obj => obj.id == postid);

      console.log("serviceList", services);
      console.log("service", service);

      if (service.isFav) {
        let response = await parasails.util.markAsUnFav(postid, this);
        service.isFav = false;
        console.log("unfavourite");
      } else {
        let response = await parasails.util.markAsFav(postid, this);
        console.log("favourite");
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
    updateCategoryCount: async function() {
      this.categoryLoading = true;
      var url = `/api/v1/Service/ServiceCount`;
      if (localStorage.countryId)
        url = `${url}?country=${localStorage.countryId}`;
      if (localStorage.stateid) url = `${url}&state=${localStorage.stateid}`;
      if (localStorage.cityid) url = `${url}&city=${localStorage.cityid}`;

      let category = await fetch(`${url}`, {
        method: "POST"
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          return myJson;
        });
      if (category && category.length) {
        this.categoryItemLists = category;
      }
      this.categoryLoading = false;
    },
    updateIndividualCategory: async function(event, auto = false) {
      //on page load display 6 items  for any individiual category or subcategory item when any category or
      //subcategory is clicked from homepage
      if (auto) {
        this.serviceList = [];
        var val = $(".service-item").data("id");

        var tag = $(".service-item-tag").data("id");
        let services = [];
        this.mountedservice = [];

        console.log("categoryId", val);
        console.log(val, "valueeeeeeeeeeeeeeeeeeee");
        if (tag) {
          var url = `/api/v1/Service/getByName?id=${val}&tag=${tag}`;
        } else {
          var url = `/api/v1/Service/getAll?id=${val}`;
        }

        if (localStorage.countryId)
          url = `${url}&country=${localStorage.countryId}`;

        if (localStorage.stateid) url = `${url}&state=${localStorage.stateid}`;

        if (localStorage.cityid) url = `${url}&city=${localStorage.cityid}`;

        services = await fetch(`${url}`, {
          method: "GET"
        })
          .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            return myJson;
          });

        this.checkurl = true;

        if (services.length < 8) this.viewallStatus = false;
        this.result = services.length;
        await this.CheckFavourite(services);
        if (this.lat != 0) {
          services = await parasails.util.distanceCalculate(
            services,
            this.lat,
            this.lng
          );
        }

        this.mountedservice = services;
        this.listactiveColor = "#ff9933";
        this.urlpath = `${url}`;
        this.rankingurl = `${url}`;
        this.listingColor = "#ff9933";
      } else {
        let id = event.target.value;
        this.categoryId = id;
      }
    },

    updateState: async function(event) {
      let id = event.target.value;
      this.countryId = id;
      this.stateId = "";
      this.cityId = "";
      this.stateList = "";
      let stateList = await fetch(`/api/v1/state?country=${id}&limit=999`, {
        method: "GET"
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          return myJson;
        });
      this.cityList = [];

      this.stateList = stateList;
    },
    updateCity: async function(event) {
      let id = event.target.value;
      this.stateId = id;
      this.cityList = "";
      this.cityId = "";
      let cityList = await fetch(`/api/v1/city?state=${id}&limit=999`, {
        method: "GET"
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          return myJson;
        });
      this.cityList = cityList;
    },

    getCityId: async function(event) {
      let id = event.target.value;
      this.cityId = id;
    },
    thumbview: async function() {
      this.liststyle = false;
      this.thumbstyle = true;
      this.thumbactiveColor = "#ff9933";
      this.listactiveColor = "black";
    },
    listview: async function() {
      this.thumbstyle = false;
      this.liststyle = true;
      this.listactiveColor = "#ff9933";
      this.thumbactiveColor = "black";
    },
    maphide: async function() {
      if (this.multistyle === true) {
        this.activeColor = "#ff9933";
        this.multistyle = false;
        $(".google-map").show();

        (this.childobject = {
          "uk-child-width-1-2": true,
          "uk-child-width-1-1": false
        }),
          (this.childobject1 = {
            "uk-width-2-3@m": true,
            "uk-width-1-1": false
          }),
          (this.childobject2 = {
            "uk-child-width-1-2@m": true,
            "uk-child-width-1-3@m": false
          });
        await this.mapshow();
      } else {
        this.multistyle = true;
        this.activeColor = "black";
        $(".google-map").hide();
        (this.childobject = {
          "uk-child-width-1-2": false,
          "uk-child-width-1-1": true
        }),
          (this.childobject1 = {
            "uk-width-2-3@m": false,
            "uk-width-1-1": true
          }),
          (this.childobject2 = {
            "uk-child-width-1-2@m": false,
            "uk-child-width-1-3@m": true
          });
      }
      // this.mapvalue = true;
    },

    displaySubCategoryList: async function(itemid) {
      //shows service  result for each subcategory item in search page
      this.mountedservice = [];
      this.serviceList = [];
      this.skipcount = 0;
      this.listingColor = "#999";
      var url = `/api/v1/Service/getAll?id=${itemid}`;
      if (localStorage.countryId)
        url = `${url}&country=${localStorage.countryId}`;

      if (localStorage.stateid) url = `${url}&state=${localStorage.stateid}`;
      if (localStorage.cityid) url = `${url}&city=${localStorage.cityid}`;
      this.urlpath = `${url}`;
      this.rankingurl = `${url}`;
      let items = await fetch(`${url}`, {
        method: "POST"
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          return myJson;
        });
      //this.listingColor='#ff9933';

      await $(".set-color").each(async function() {
        var currentid = $(this).data("id");
        if (currentid == itemid) {
          $(this)
            .find("a")
            .css("color", "#ff9933");
        } else {
          $(this)
            .find("a")
            .css("color", "#999");
        }
      });

      this.result = items.length;
      await this.CheckFavourite(items);
      console.log(items, "for links", url);
      if (this.lat != 0) {
        items = await parasails.util.distanceCalculate(
          items,
          this.lat,
          this.lng
        );
      }
      this.mountedservice = items;
      await this.RankGenerate();
      await this.mapshow();
      if (items.length < 8) this.viewallStatus = false;
      else this.viewallStatus = true;
    },

    modalsubmittedForm: async function() {
      // Redirect to the logged-in dashboard on success.
      // > (Note that we re-enable the syncing state here.  This is on purpose--
      // > to make sure the spinner stays there until the page navigation finishes.)
      this.modalsyncing = true;
      //  let postslug= this.item.slug;
      window.location = `/search`;
    },

    handle: async function() {
      // Redirect to the logged-in dashboard on success.
      // > (Note that we re-enable the syncing state here.  This is on purpose--
      // > to make sure the spinner stays there until the page navigation finishes.)
      this.syncing = true;
      var categoryid = this.categoryId;
      var countryid = this.countryId;
      var stateid = this.stateId;
      var cityid = this.cityId;
      this.skipcount = 0;
      this.serviceList = [];
      this.mountedservice = [];
      this.urlpath = "";

      var ckpoint = 0;
      var url = `/api/v1/Service/getAll?`;
      if (categoryid) {
        url = `${url}category=${categoryid}`;
        ckpoint = 1;
      }
      if (countryid) {
        if (ckpoint == 0) url = `${url}country=${countryid}`;
        else url = `${url}&country=${countryid}`;
        ckpoint = 1;
      }

      if (stateid) {
        url = `${url}&state=${stateid}`;
      }
      if (cityid) {
        url = `${url}&city=${cityid}`;
      }
      console.log("url", url);

      this.urlpath = `${url}`;
      this.rankingurl = `${url}`;
      let serviceList = await fetch(`${url}`, {
        method: "POST"
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          return myJson;
        });
      //  console.log("serviceList", serviceList);
      if (serviceList.length < 8) this.viewallStatus = false;
      await this.CheckFavourite(serviceList);
      var searchitem = await parasails.util.distanceCalculate(
        serviceList,
        this.lat,
        this.lng
      );

      this.mountedservice = searchitem;

      this.listshow = true;
    },
    SortDisplay: async function(event) {
      //sort hits based
      if (event.target.value === "more-hits") {
        let serviceList = this.mountedservice.concat(this.serviceList);
        let items = await serviceList.sort(function(a, b) {
          return b.hits - a.hits;
        });
        console.log("sortitems", items);
        await this.CheckFavourite(items);

        var ratingsitem = await parasails.util.distanceCalculate(
          items,
          this.lat,
          this.lng
        );

        this.mountedservice = ratingsitem;
        console.log("hot", serviceList);
      }

      if (event.target.value === "review") {
        let serviceList = this.mountedservice.concat(this.serviceList);
        let items = await serviceList.sort(function(a, b) {
          return b.review.length - a.review.length;
        });
        console.log("sortitems", items);
        await this.CheckFavourite(items);
        var ratingsitem = await parasails.util.distanceCalculate(
          items,
          this.lat,
          this.lng
        );

        console.log("pppp", serviceList);
        this.mountedservice = ratingsitem;
      }

      if (event.target.value === "more-ratings") {
        let serviceList = this.mountedservice.concat(this.serviceList);
        let items = await serviceList.sort(function(a, b) {
          return b.ranking - a.ranking;
        });
        console.log("sortitems", items);
        await this.CheckFavourite(items);
        var ratingsitem = await parasails.util.distanceCalculate(
          items,
          this.lat,
          this.lng
        );

        console.log("pppp", serviceList);
        this.mountedservice = ratingsitem;
      }
    },
    ShowMoreServices: async function() {
      //trigger when viewmore button is clicked
      this.skipcount++;
      var previous_url = this.urlpath;
      let skip = this.skipcount * 8;
      var new_url;
      if (localStorage.countryId) {
        new_url = `${previous_url}&skip=${skip}`;
      } else {
        new_url = `${previous_url}?skip=${skip}`;
      }

      let serviceLists = await fetch(new_url, {
        method: "POST"
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          return myJson;
        });
      this.result = this.result + serviceLists.length;
      await this.CheckFavourite(serviceLists);
      if (this.lat != 0) {
        serviceLists = await parasails.util.distanceCalculate(
          serviceLists,
          this.lat,
          this.lng
        );
      }

      console.log(serviceLists);
      if (serviceLists.length < 8) this.viewallStatus = false;
      this.mountedservice = await this.mountedservice.concat(serviceLists);

      this.mapshow();
      console.log(this.mountedservice, "ssssssshhhhhhhhhhhhhh");
    },

    locationupdateState: async function(event) {
      let id = event.target.value;

      let text = $("#country option:selected").text();
      this.countryname = text;
      this.countryId = id;
      // if(!this.stateList.includes(this.stateId)){
      //     this.stateId=''
      //  this.statename= 'select your City';
      // }
      this.cityId = "";
      this.stateId = "";
      this.cityid = "";
      this.stateList = "";

      let individualstate = [];
      for (const it of this.allcountry) {
        if (it.id === id) {
          console.log(it);
          individualstate = it;
          break;
        }
      }
      this.cityList = [];
      this.savedcountry = individualstate;
      let stateLists = individualstate.state;
      stateLists = await stateLists.sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      this.stateList = stateLists;
    },
    locationupdateCity: async function(event) {
      let id = event.target.value;
      this.stateId = id;
      this.cityList = "";
      this.cityid = "";
      //this.cityId="";
      console.log($("#state_locatione option:selected").text());
      console.log(id);
      this.statename = $("#state_location option:selected").text();
      let features = [];
      for (const it of this.savedcountry.city) {
        if (it.state === id) {
          features.push(it);
        }
      }
      this.cityList = await features.sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    },
    locationCity: async function(event) {
      let id = event.target.value;
      this.cityid = id;

      console.log($("#city_location option:selected").text());
      console.log(id, "cityyyyyyyyyyyyyyyyyyyyyyyyyyy");
      this.cityname = $("#city_location option:selected").text();
    },
    handleParsingForm: function() {
      var argins = this.formData;

      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      return argins;
    },

    locationhandleParsingForm: function() {
      this.locationformData.country = document.getElementById("country").value;
      this.locationformData.state = document.getElementById(
        "state_location"
      ).value;

      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      localStorage.setItem("countryname", this.countryname);
      localStorage.setItem("countryId", this.countryId);

      localStorage.setItem("statename", this.statename);
      localStorage.setItem("stateid", this.stateId);

      localStorage.setItem("cityname", this.cityname);
      localStorage.setItem("cityid", this.cityid);
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

    locationsubmittedForm: async function() {
      this.locationsyncing = true;
      await this.updateCategoryCount();
      return;
    },
    locationhandle: async function() {
      if (this.onchangeevent === true) {
        await this.updateIndividualCategory(this.onchangeeventvalue);
      } else {
        await this.updateIndividualCategory({}, true);
      }
      this.mapshow();
      UIkit.modal("#modal-location").hide();
      var x = document.getElementsByClassName("exampleheader")[0];
      console.log(x, "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      let yy = document.getElementById("exampleheaderlist");
      if (localStorage.countryname) {
        yy.innerHTML = `<i class="fa fa-map-marker"></i>${localStorage.countryname}`;
      }

      if (localStorage.statename) {
        yy.innerHTML = `<i class="fa fa-map-marker"></i>${localStorage.statename}`;
      }
      if (localStorage.cityname) {
        yy.innerHTML = `<i class="fa fa-map-marker"></i>${localStorage.cityname},${localStorage.statename}`;
      }
    }
  }
});
