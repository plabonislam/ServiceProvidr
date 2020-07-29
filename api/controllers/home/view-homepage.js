"use strict";
module.exports = {
  friendlyName: "View homepage or redirect",

  description:
    "Display or redirect to the appropriate homepage, depending on login status.",

  exits: {
    success: {
      statusCode: 200,
      description:
        "Requesting user is a guest, so show the public landing page.",
      viewTemplatePath: "home/homepage"
    },

    redirect: {
      responseType: "redirect",
      description:
        "Requesting user is logged in, so redirect to the internal welcome page."
    }
  },

  fn: async function() {
    var categories = await Category.find({
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
    var servicesHot = await Service_post.find({
      deleted: false,
      active: true
    })
      .sort("hits desc")
      .limit(5)
      .populate("category")
      .populate("state")
      .populate("city");
    var servicesRecent = await Service_post.find({
      deleted: false,
      active: true
    })
      .limit(6)
      .populate("category")
      .populate("state")
      .populate("city");

    var CountryList = await Country.find({ active: true, deleted: false }).sort(
      "name ASC"
    );

    if (this.req.session.justNow == true) {
      this.req.session.justNow = false;
      throw { redirect: "/" };
    }

    // this.servicesRecent = servicesRecent;
    // console.log("servicesRecent", servicesRecent);
    var data = {
      category: categories,
      servicesHot: servicesHot,
      servicesRecent: servicesRecent
    };

    return {
      data: data,
      me: this.req.me,
      CountryList: CountryList
    };
  }
};
