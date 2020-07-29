
parasails.registerPage('homepage', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝


    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝

    data: {
        me: {},
        service: [],
        servicecount: 0,
        firstLoad: true,
        syncingMyFavorite: false,
        cloudError: false,
        spin: false,
        spinall: false,
        syncing: false,
        fvalue: false,
        count: 0,
        serviceid: '',
        serviceList: [],
       // hotservices:[],
        skipcount: 0,
        viewallStatus: true,
        lat: 0,
        lng: 0,
        serverdata:true,
        modalsyncing: false,
        modalishidden: true,
        locationsyncing :false,
        modalhasError: false,
        defindeuser:false,
        logincheck:false,
        message:"this is me",
        stateId:'',
        cityId:'',
        countryId:'',
        name:'',
        ncountry:'',
        statename:'',
        countryname:'',
        
        cityList: [],
        stateList: [],
        serviceHOT:[],
        onchangeevent:false,
        onchangeeventvalue:{},
        urlpath:'',
        showcity:'',
        cityname:'',
        cityid:'',
         allcountry:[],
         savedcountry:[],

        index: 0,
        entry: 0,
        key: 0,
        


        // Form data
        modalformData: {
            rememberMe: true,
        },
         locationformData: new FormData(),
        formErrors: {
            /* … */
        },
        // For tracking client-side validation errors in our form.
        // > Has property set to `true` for each invalid property in `formData`.
        modalformRules: {
            emailAddress: {
                required: true,
                isEmail: true
            },
            password: {
                required: true
            },
        },

        // Server error state for the form
        modalcloudError: '',
        cloudError: '',

    },

    beforeMount: function() {
        _.extend(this, SAILS_LOCALS);
        this.locationformData.country=localStorage.countryId;
        if(localStorage.allcountry){
            let all= localStorage.getItem("allcountry");
           this.allcountry=JSON.parse(all);
        }
        this.stateList=this.allcountry.state;
        this.me.favs = false;
    },

    mounted: async function() {
        await this.getLocation();
        console.log(localStorage.countryId,"localStorage.countryIdlocalStorage.countryIdlocalStorage.countryIdlocalStorage.countryId");
       console.log("dppppppppppppp");
        this.serviceHOT = this.data.servicesHot;
        UIkit.modal("#modal-location").hide();

        if (localStorage.startTime) {
          let time = parseInt(localStorage.startTime);
          let currentTime = new Date().getTime().toString();
          currentTime = parseInt(currentTime);
          let diff = currentTime - time;
          console.log(diff, "difffff");
          diff = diff / 3600000;
          console.log(diff, "difffff");
          if (diff >= 1) {
            await this.GetCountry();
          }
        } else {
          await this.GetCountry();
        }
            
        
        if(localStorage.allcountry){
            let all= localStorage.getItem("allcountry");
           this.allcountry=JSON.parse(all);
        }
        
        
        
        if(localStorage.countryname)
            this.countryname = localStorage.countryname;
        if(localStorage.statename)
            this.statename = localStorage.statename;
        if(localStorage.countryId)
            this.countryId = localStorage.countryId;
        if(localStorage.stateId)
            this.stateId = localStorage.stateId; 

        if(localStorage.cityid)
            this.cityid = localStorage.cityid; 
        if(localStorage.cityname)
            this.cityname = localStorage.cityname; 
        if(!localStorage.countryname){
            UIkit.modal("#modal-location").show();
        } 
        await this._setHeaderFixed();
        
        await this.onChange({}, true);
        await this.RankGenerate();
        
        
        await this.hotFavByUser();
        
        await this.FavouriteGenerator();
        this.ipLookUp();
        

    },
   
    methods: {
        _setHeaderFixed: function() {
            jQuery('#header').addClass('uk-position-top');
            setTimeout(function() {
                jQuery('.cate-dropdown').select2();
            }, 1000);
        },

        GetCountry: async function(){
            let allCityList = await fetch(`/api/v1/country/getAllCountry?limit=999`, {
                method: 'GET',
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                return myJson;
            });
            this.allcountry=allCityList;
           
             var startTime = new Date().getTime().toString();
            localStorage.setItem("allcountry", JSON.stringify(allCityList));
            localStorage.setItem("startTime", startTime);
      
        },
        hotFavByUser: async function(){
            console.log("this.serviecdd",this.service);
            var previousservice=this.service;
            $('.user-favourite-item').on('click', async function(e) { 
                e.preventDefault();
                if(this.me && this.me.id){
                    console.log("mounted for me hot ppppppppppppppppppppppppppppppp", this.me.id);
                   
                }
                else{
                   // UIkit.modal("#modal-center").show();
                }
                var postid = $(this).data("id");
                let service = previousservice.find(obj => obj.id == postid);
                try {
                    
                    var kk="";
                    if ($(this).find('i').hasClass('fa-heart')) {
                        let response = await parasails.util.markAsUnFav(postid, this);
                        kk="true";
                        $($(this)).html('<i class="fa fa-heart-o"></i>');
                        service.isFav=false;
                    } else {
                        let response = await parasails.util.markAsFav(postid, this);
                        kk="true";
                        $($(this)).html('<i class="fa fa-heart"></i>');
                        service.isFav=true;
                    }
    
                } catch (e) {
                    if(kk===""){
                        
                        UIkit.modal("#modal-center").show();
                    }
                    else{
                        console.log("responseeeeeeeee"); 
                    }
                   
                }
    
            });
        },
        FavouriteGenerator: async function() {
            if (this.me.favourite == null) return;
            var favouriteData = this.me.favourite;
            $('.user-favourite-item').each(async function() {
                var postid = $(this).data("id");
                // console.log("favworking", postid);

                let favouriteFound = await favouriteData.map(item => item.postid == postid)
                if (favouriteFound.includes(true)) {
                    $($(this)).html('<i class="fa fa-heart"></i>');
                }
            });
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
        updateFavItemByUser: async function(postid) {
            if(this.me && this.me.id){
                console.log("mounted for me updateddddddddd", this.me);
            }
            else{
                UIkit.modal("#modal-center").show();
            }
            
            let check = 0;
           
            var services = await this.service.concat(this.serviceList);
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
          
        
            //this section is updating hotservices fav/unfav if that recentlisting
            //service exist in hitservice
            await $('.user-favourite-item').each(async function() {
                var hotpostid = $(this).data("id");
                if (hotpostid == postid) {
                    hotvalue = hotpostid;
                    if ($(this).find('i').hasClass('fa-heart')) {
        
                        $($(this)).html('<i class="fa fa-heart-o"></i>');
        
                    } else {
        
                        $($(this)).html('<i class="fa fa-heart"></i>');
        
                    }
                }
        
            });
            //end
        
           
        
        },
        
        CheckFavourite: async function(services){
            if(this.me && this.me.favourite && this.me.favourite.length){
                services.forEach(service => {
                    service.isFav = false;
                    this.me.favourite.forEach(function(item){
                        if(item.postid == service.id){
                            service.isFav = true;
                         }
                    });
                });
    
            }

        },


        getLocation: async function() {
            console.log("lat long not found");
            if (navigator.geolocation) {
               
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
               
               
            }
        },

        showPosition: async function(position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            console.log(this.lat, "lat long");
            console.log(position.coords.longitude, "lat long");
           
            
        },

        RankGenerate: async function() {

            $('.service-items-rating').each(function() {
                var ranking = $(this).data("ranking");
                var html = '';
                var i, j, val;
                for (i = 1; i <=ranking; i++) {
                    html = html + '<i class="fa fa-star"></i>';
                }
                
                for (j = ranking+1; j <= 5; j++) {
                    html = html + '<i class="fa fa-star-o"></i>';
                }

                $($(this)).html(html);
            });
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
       


        onChange: async function(event, auto = false) {
            this.spin = true;
            this.serviceList = [];
            this.viewallStatus = true;
            this.serverdata=false;
            
            let ckpoint=1;
          
            if (auto) {
                var url = `/api/v1/Service/getAll`;
                ckpoint=2;
            } else {
                let catid = event.target.value;
                this.onchangeevent= true;
                this.onchangeeventvalue=event;
             
                this.serviceid = catid;
                var url = `/api/v1/Service/getAll?category=${catid}`;
            }
            if(localStorage.countryId){
                if(ckpoint==1)
                     url=`${url}&country=${localStorage.countryId}`;
                else
                 url=`${url}?country=${localStorage.countryId}`;

            }
            if(localStorage.stateid)
                 url=`${url}&state=${localStorage.stateid}` ;
            if(localStorage.cityid)
                 url=`${url}&city=${localStorage.cityid}` ;
          
            this.urlpath=url;
            let services = await fetch(url, {
                method: 'GET'
            }).then(function(response) {
                return response.json();
            });

            await this.CheckFavourite(services);
           if(this.lat!=0){
            services= await parasails.util.distanceCalculate(services,this.lat,this.lng);
           }
            
            this.firstLoad = false;
            this.servicecount = services.length;
            if (services.length < 8)
                this.viewallStatus = false;
             this.service = services;
             console.log("this.service in onchange",this.service);


            this.spin = false;
           
        },
  
        locationhandle: async function(){
            if(this.onchangeevent=== true){
                await this.onChange(this.onchangeeventvalue);
            }
            else{
                await this.onChange({}, true);
            }
            
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
        ipLookUp: async function(){
            var city="";
           let lat="";
           let lon="";
         await  $.ajax('http://ip-api.com/json') .then(
                    function success(response) {
                    console.log('User\'s Location Data is ', response);
                    console.log('User\'s Country', response.city);
                    city = response.city;
                    lat=response.lat;
                    lon=response.lon;
                     },

                     function fail(data, status) {
                     console.log('Request failed.  Returned status of', status);
                    });

        },
        ShowMoreServices: async function() {
        
            this.spinall = true;

            this.skipcount++;
            let skip = this.skipcount * 8;
           
            let url=this.urlpath;
            if(localStorage.countryId){
                url = `${url}&skip=${skip}`;
            }
            else{
                url = `${url}?skip=${skip}`;
            }
             
            let serviceList = await fetch(url, {
                method: 'GET'
            }).then(function(response) {
                return response.json();
            });
            
            await this.CheckFavourite(serviceList);

            console.log(serviceList);
          if(this.lat!=0){
            serviceList = await parasails.util.distanceCalculate(serviceList,this.lat,this.lng);
          }
            this.spinall = false;
            this.service = this.service.concat(serviceList);
            
            if (serviceList.length < 8) 
                this.viewallStatus = false;
            
        },

  
        modalsubmittedForm: async function() {
           
            this.modalsyncing = true;
            console.log("submitted modal+++++++++++++++++++++++++++");
               UIkit.modal("#modal-center").hide();
               window.location = '/';
               return;
        
            

           
        },
        clickMyFavoriteButton: async function() {

            // Prevent double-posting if it's still loading.
            if (this.syncingMyFavorite) {
                return;
            }

            // Show syncing state for opening checkout.
            this.syncingMyFavorite = true;

            // Clear out error states.
            this.cloudError = false;

            // make api call to update favs
            await Cloud.login.with({
                    'emailAddress': 'ahba@themexpert.com',
                    password: 'pioneer'
                })
                .tolerate((err) => {
                    console.log(err);
                    this.cloudError = true;
                });

           
            this.syncingMyFavorite = false;
           

            
            if (!this.cloudError) {
                // show notification
                alert('Done');
            }

            return true;
        },
    }
});