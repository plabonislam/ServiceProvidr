/**
 * FavouritepostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  friendlyName: "View edit Service",

  description: 'Display "Service" page.',

  exits: {
    success: {
      viewTemplatePath: "user/edit-service"
    }
  },

  fn: async function() {
    console.log("you are here for editt");
    let serviceslug = this.req.params.id;

    let Service = await Service_post.findOne({ slug: serviceslug });

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
      Service: Service,
      data: data,
      me: this.req.me
    };
  }
};
