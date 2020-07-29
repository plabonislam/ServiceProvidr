parasails.registerPage('edit-account', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: {
        // Main syncing/loading state for this page.
        syncing: false,
        categoryItems: null,
        file: '',
        path: '',
        pathList:[],
        // Form data
        formData: new FormData(),

        // For tracking client-side validation errors in our form.
        // > Has property set to `true` for each invalid property in `formData`.
        formErrors: {
            /* … */
        },

        // Server error state for the form
        cloudError: '',
        stateList: [],
        cityList: [],
        errFile:[],
    },

    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function() {
        // Attach raw data exposed by the server.
        _.extend(this, SAILS_LOCALS);

        // Set the form data.
        this.formData.fullName = this.me.fullName;
        this.formData.emailAddress = this.me.emailChangeCandidate ? this.me.emailChangeCandidate : this.me.emailAddress;
        this.formData.phone = this.me.phone;
        this.formData.gender = this.me.gender;
        this.formData.countryId = this.me.country;
        this.formData.stateId = this.me.state;
        this.formData.cityId = this.me.city;
        this.formData.filepath = this.me.filepath;
    },
    mounted: async function() {


    },

    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {

        updateState: async function(event) {
            let id = event.target.value ? event.target.value : this.formData.countryId;

            let stateList = await fetch(`/api/v1/state?country=${id}&limit=999`, {
                    method: 'GET',
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

            let cityList = await fetch(`/api/v1/city?state=${id}&limit=999`, {
                    method: 'GET',
                })
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    return myJson;
                });
            this.cityList = cityList;
        },


        submittedForm: async function() {

            //    console.log("formData", this.formData);
            /*
                Add the form data we need to submit
            */
            //this.syncing = true;
            


            // window.location ='/edit-profile'
            //return false;
        },

        submittedForm_x: async function() {

            this.syncing = true;
            return false;
        },
        fileupload: async function(event) {
            const file = event.target.files[0];
            this.errFile=[];
            const allowedtype = ["image/jpeg", "image/png", "image/gif"];
            if (allowedtype.includes(file.type)) {
                this.file = file;
                console.log(this.file);

                var reader = new FileReader();
                reader.onload = function(){
                var output = document.getElementById('output');
                output.src = reader.result;
                output.style.height="100px";
                output.style.width="150px";
                
                };
                reader.readAsDataURL(event.target.files[0]);
            }else{
                this.errFile.push(file);
                console.log("file can not be submitted",this.errFile);
            }

        },
        deleteEvent: async function(event) {
            console.log(event, "fffffffffffffffffffffffff");
            this.errFile=[];
            
        },

        filesave: async function() {
            let fd = new FormData();
            var currentpath = "";
            fd.append('bodydata', JSON.stringify(this.formData));
            fd.append("file", this.file);

            await axios.post('/upload',
                    fd, {
                        headers: {
                            'Content-Type': 'multipart/from-data'
                        }
                    }
                ).then(function(response) {
                    let path=response.data.path;
                    if(path!=='ok'){
                        $("#blahh").attr("src",path);
                    }
                    
                    console.log(response.data.path);
                    UIkit.notification('<span uk-icon="icon: check" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="check"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline></svg></span> Post Submit successfully', {
                        status: 'success',
                        
                        pos: 'top-center',
                    });
                 
                })
                .catch(function(response) {
                    console.log(response);
                });
                

        },

        handle: async function() {
           await this.filesave();
        },
        handleParsingForm: function() {

            // Clear out any pre-existing error messages.
            this.formErrors = {};
            var k = document.getElementById('countryId').value;
            console.log(k, "datattttttt");
            this.formData.city = document.getElementById('cityId').value;

            this.formData.state = document.getElementById('stateId').value;

            this.formData.country = k;

            var argins = this.formData;
            console.log(argins);
            // Validate name:
            if (!argins.fullName) {
                this.formErrors.fullName = true;
            }

            // Validate email:
            if (!argins.emailAddress) {
                this.formErrors.emailAddress = true;
            }

            // If there were any issues, they've already now been communicated to the user,
            // so simply return undefined.  (This signifies that the submission should be
            // cancelled.)
            if (Object.keys(this.formErrors).length > 0) {
                return;
            }
            return argins;
        },

    }
});