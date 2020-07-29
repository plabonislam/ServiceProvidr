/**
 * FavouritepostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  friendlyName: "View favourite post",
  description: 'Display "details" page.',
  exits: {
    success: {
      statusCode: 200,
      description: "Request add service post",
      viewTemplatePath: "user/new_service_post"
    }
  },
  fn: async function() {
    // Get & populate models
    var mod_categories = await await Category.find({
      parent_category: null,
      isPublish: true,
      deleted: false
    })
      .populate("child_categories", {
        where: {
          isPublish: true,
          deleted: false
        }
      })
      .sort("priority ASC");
    var mod_countries = await Country.find({
      active: true,
      deleted: false
    }).sort("name ASC");

    var mod_states = await State.find({});
    var mod_city = await City.find({});
    var mod_location = await City_location.find({});
    var mod_user = await User.find({});

    var data = {
      category: mod_categories,
      countries: mod_countries,
      states: mod_states,
      city: mod_city,
      location: mod_location,
      user: mod_user
    };

    return {
      data: data,
      me: this.req.me
    };
  }
};
