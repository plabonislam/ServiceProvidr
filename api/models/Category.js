/**
 * Category.js
 *
 * A user who can log in to this application.
 * http://localhost:1337/api/v1/category/create?name=Sub Category&parent_category=5d10ab465442aec9d9f9bb3f
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    idOriginal: {
      type: "number"
    },
    idOriginalSub: {
      type: "number"
    },

    name: {
      type: "string",
      required: true,
      example: "General"
    },

    tags: {
      type: "string",

      example: "Painting, house painters"
    },
    slug: {
      type: "string",
      required: true
    },
    isPublish: {
      type: "boolean",
      defaultsTo: true
    },
    priority: {
      type: "number"
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a
    // Add a reference to service
    services: {
      collection: "service_post",
      via: "category"
    },

    // Add a reference to child cats
    child_categories: {
      collection: "category",
      via: "parent_category"
    },

    // Add a reference to category id
    parent_category: {
      model: "category"
    },

    country: {
      collection: "country",
      via: "category"
    }

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // n/a
  }
};
