module.exports = {
  friendlyName: "Details page",

  description:
    "Display or redirect to the appropriate service details, depending on login status.",

  exits: {
    success: {
      statusCode: 200,
      description: "Showing the proper address of service provider.",
      viewTemplatePath: "service/details"
    }
  },

  fn: async function() {
    let slugid = this.req.params.id;
    console.log(slugid, "sluggggggg");
    //service for id
    let service = await Service_post.find({
      or: [{ id: slugid }, { slug: slugid }]
    })
      .populate("parent_category")
      .populate("category")
      .populate("country")
      .populate("state")
      .populate("city")
      .populate("user");
    // console.log(service);
    service = service[0];

    if (service && !service.hasOwnProperty("hits")) {
      service.hits = 0;
    }
    let hit = service.hits;
    hit++;

    await Service_post.update({ id: service.id }).set({ hits: hit });

    //review list for that service id
    let review = await Review.find({ service_id: service.id })
      .populate("user_id")
      .limit(10);
    const reviewTotal = await Review.count({ service_id: service.id });

    let Tcommunicate = 0;
    let Toverall = 0;
    let Tskill = 0;
    let Tprice = 0;
    let Tontime = 0;
    let Taverage = 0;
    let count = 0;

    review.forEach(el => {
      count++;
      Tcommunicate += el.communicate;
      Toverall += el.overall;
      Tskill += el.skill;
      Tprice += el.price;
      Tontime += el.ontime;
    });

    if (count != 0) {
      Tcommunicate = Math.ceil(Tcommunicate / count);
      Toverall = Math.ceil(Toverall / count);
      Tskill = Math.ceil(Tskill / count);
      Tprice = Math.ceil(Tprice / count);
      Tontime = Math.ceil(Tontime / count);
      Taverage = (Tcommunicate + Toverall + Tontime + Tprice + Tskill) / 5;
      //  console.log("after average",Tcommunicate,Tontime,Toverall,Tprice,count,Taverage);
    }

    let Total = {
      Tcommunicate: Tcommunicate,
      Toverall: Toverall,
      Tskill: Tskill,
      Tprice: Tprice,
      Tontime: Tontime,
      Taverage: Taverage,
      count: count
    };

    // related services
    let services;

    if (service.category && service.category.hasOwnProperty("id")) {
      services = await Service_post.find({ category: service.category.id })
        .populate("parent_category")
        .populate("category")
        .populate("country")
        .populate("state")
        .populate("city")
        .populate("user")
        .limit(3);
    } else {
      services = [];
    }

    let favourite = {};
    if (this.req.me && this.req.me.id) {
      favourite = await Favourite.findOne({
        postid: service.id,
        userid: this.req.me.id
      });
    }

    var servicesHot = await Service_post.find({})
      .sort("hits desc")
      .limit(5)
      .populate("parent_category")
      .populate("category")
      .populate("state")
      .populate("city")
      .populate("user");

    let addpromotion = await Setting.find();
    console.log(
      addpromotion,
      "addpromotionaddpromotionaddpromotionaddpromotionaddpromotion"
    );

    addpromotion = addpromotion[0];

    await Service_post.update({
      slug: slugid
    }).set({ ranking: Taverage });

    var CountryList = await Country.find({
      active: true,
      deleted: false
    })
      .populate("state", {
        where: {
          active: true,
          deleted: false
        },
        sort: "name ASC"
      })
      .populate("city", {
        where: {
          active: true,
          deleted: false
        },
        sort: "name ASC"
      })
      .sort("name ASC");

    return {
      item: service,
      sreview: review,
      reviewTotal,
      postid: service.id,
      serviceList: services,
      serviceListLength: services.length,
      Total: Total,
      favourite: favourite,
      servicesHot: servicesHot,
      addpromotion: addpromotion,
      CountryList,
      me: this.req.me
    };
  }
};
