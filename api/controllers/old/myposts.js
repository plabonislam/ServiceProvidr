/**
 * FavouritepostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  friendlyName: "View my post",

  description: 'Display "details" page.',

  exits: {
    success: {
      viewTemplatePath: "pages/user/my-services"
    }
  },

  fn: async function() {
    let serviceList = await Service_post.find({
      user: this.req.me.id
    })
      .populate("category")
      .populate("country")
      .populate("state")
      .populate("city")
      .limit(99);

    // Respond with view.
    return {
      me: this.req.me,
      serviceList: serviceList
    };
  }
};
