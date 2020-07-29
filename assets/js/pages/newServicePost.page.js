
    parasails.registerPage('new-service-*', {
    // parasails.registerPage('new-service-post', {
        //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
        //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
        //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
        data: {
        // Main syncing/loading state for this page.
        syncing: false,
        // For tracking client-side validation errors in our form.
        // > Has property set to `true` for each invalid property in `formData`.
        formErrors: { /* … */ },
    
        // A set of validation rules for our form.
        // > The form will not be submitted if these are invalid.
        formRules: {
            title: { required: true},
            email: { required: true },
            latitude: {required:true},
            longitude: { required: true },
        },
        // Server error state for the form
        cloudError: '',
        },
        //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
        //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
        //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
        beforeMount: function() {
        // Attach any initial data from the server.
            _.extend(this, SAILS_LOCALS);
        },
        mounted: async function() {
        },
        // fav2:function(ee){
        //   alert('apppp22');
        // },
        //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
        //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
        methods: {
            
        },
        // submittedForm: async function() {
        //     // Redirect to the logged-in dashboard on success.
        //     // > (Note that we re-enable the syncing state here.  This is on purpose--
        //     // > to make sure the spinner stays there until the page navigation finishes.)
        //     console.log("donee");
        //     this.syncing = true;
        //     this.formData.title="";
        //     this.formData.area="";
        //     this.formData.opt="";
        //     this.formData.overall="";
        //     this.formData.skill="";
        //     this.formData.price="";
        //     this.formData.ontime="";
        //     this.formData.communicate="";
        //     alert("your review is submitted, wait for admin review");
        // },
    });