module.exports = {
  friendlyName: "View homepage or redirect",

  description:
    "Display or redirect to the appropriate homepage, depending on login status.",

  exits: {
    success: {
      statusCode: 200,
      description:
        "Requesting user is a guest, so show the public landing page.",
      viewTemplatePath: "pages/homepage"
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
      isPublish: true
    });
    var servicesHot = await Service_post.find({})
      .limit(3)
      .populate("category")
      .populate("state")
      .populate("city");
    var servicesRecent = await Service_post.find({})
      .limit(6)
      .populate("category")
      .populate("state")
      .populate("city");
    var howitworks = await Howitworks.find({});

    var data = {
      category: categories,
      servicesHot: servicesHot,
      servicesRecent: servicesRecent,
      howitworks: howitworks
    };

    return {
      data: data,
      me: this.req.me
    };
  }
};
