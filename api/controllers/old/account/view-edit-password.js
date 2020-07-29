module.exports = {


  friendlyName: 'View edit password',


  description: 'Display "Edit password" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/edit-password'
    }

  },


  fn: async function () {

    // var user = User.find({id: me.id}).populate('country').populate('state').populate('city');
    // this.me.country = user.country;
    // this.me.state = user.state;
    // this.me.city = user.city;
    return {};

  }


};
