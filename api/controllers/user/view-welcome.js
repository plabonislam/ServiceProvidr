module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'user/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function () {

     let allitem =await  Favourite.find({});
     let meitem =await  Favourite.find({userid: this.req.me.id });
   let user =await  User.find({id : this.req.me.id});


     console.log("view welcome for all favourite",allitem);
     console.log("view welcome for log in user",meitem);
     console.log("view welcome for user",user);
    

    return {};

  }


};
