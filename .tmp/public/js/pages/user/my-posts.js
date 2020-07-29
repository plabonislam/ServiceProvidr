parasails.registerPage("my-posts", {
  // parasails.registerPage('new-service-post', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    myServiceList: [],
    syncing: false,

    formErrors: {
      /* … */
    },

    // A set of validation rules for our form.
    // > The form will not be submitted if these are invalid.
    formRules: {
      title: { required: true },
      email: { required: true },
      latitude: { required: true },
      longitude: { required: true }
    },
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
    console.log(this.serviceList);
    this.myServiceList = this.serviceList;
  },
  // fav2:function(ee){
  //   alert('apppp22');
  // },
  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    deletePost: async function(val) {
      console.log(val, "deleteeeeeeeeeeee");
      let url = `/service/${val}`;
      let service = this.myServiceList.find(obj => obj.id == val);
      let message = await fetch(url, {
        method: "POST"
      }).then(function(response) {
        return response.json();
      });

      let position;

      for (let [i, it] of this.myServiceList.entries()) {
        if (it == service) {
          console.log("position", i);
          position = i;
          break;
        }
      }
      this.myServiceList.splice(position, 1);
      this.myServiceList = this.myServiceList;
      UIkit.notification({
        message: `your post is Deleted`,
        status: "primary",
        pos: "top-center",
        timeout: 5000
      });

      console.log(message);
    }

    // editPost: async function(val){

    //     // let url=`/editservice/${val}`;
    //     // await fetch(url, {
    //     //     method: 'GET'
    //     // }).then(function(response) {
    //     //     return response.json();
    //     // });

    //      await $.ajax({
    //         url: `/editservice/${val}`,
    //          method: 'GET',
    //         ContentType: 'application/json',
    //         // data: JSON.stringify({data: servicePostId}),
    //         cache: false,
    //     });
    // }
  }
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
