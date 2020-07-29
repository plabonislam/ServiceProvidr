/**
 * Service_post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    idOriginal: {
      type: "number"
    },
    title: {
      type: "string",
      required: true,
      example: "Service title"
    },
    slug: {
      type: "string",
      required: true,
      example: "service-title"
    },
    description: {
      type: "string",
      example: "Service description"
    },
    address: {
      type: "string",
      example: "Service description"
    },
    images: {
      type: "json",
      example: "Service description"
    },

    deletedImages: {
      type: "json",
      example: "Service description"
    },
    phone: {
      type: "string",
      required: false
    },
    email: {
      type: "string",
      required: false
    },
    ranking: {
      type: "string",
      required: false
    },
    website: {
      type: "string",
      required: false
    },
    latitude: {
      type: "string",
      required: false
    },
    longitude: {
      type: "string",
      required: false
    },
    tags: {
      type: "string",
      required: false
    },
    compensation: {
      type: "string",
      required: false
    },
    sponsor: {
      type: "boolean",
      required: false
    },
    active_upto: {
      type: "string",
      required: false
    },
    post_date: {
      type: "string",
      required: false
    },
    parent_category: {
      model: "category"
    },
    // subCategory: {
    //   model: "category"
    // },
    mark_as_inactive: {
      type: "boolean",
      required: false
    },
    can_flag: {
      type: "boolean",
      required: false
    },
    active: {
      type: "boolean",
      required: false
    },
    Orphan_service: {
      type: "boolean",
      defaultsTo: false
    },
    no_email: {
      type: "boolean",
      required: false
    },
    hits: {
      type: "number"
    },
    inactiveCount: {
      type: "number"
    },
    oldId: {
      type: "number",
      example: "for bulk upload type:timestamp"
    },

    // Add a reference to category id
    user: {
      model: "user"
    },
    category: {
      model: "category"
    },
    country: {
      model: "country"
    },
    state: {
      model: "state"
    },
    city: {
      model: "city"
    },
    location: {
      model: "city_location"
    },
    area_offered: {
      type: "string"
    },
    ///reference for review

    review: {
      collection: "Review",
      via: "service_id"
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  }
};
