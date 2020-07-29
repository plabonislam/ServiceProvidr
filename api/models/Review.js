/**
 * Reveiw.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    idOriginal: {
      type: "number"
    },
    title: {
      type: "string",
      required: true
    },
    active: {
      type: "number",
      defaultsTo: 0
    },

    review_time: {
      type: "string"
    },

    review_state: {
      type: "boolean"
    },

    description: {
      type: "string",
      required: false
    },
    received: {
      type: "number"
    },
    overall: {
      type: "number",
      required: true
    },
    skill: {
      type: "number",
      required: true
    },
    ontime: {
      type: "number",
      required: true
    },
    price: {
      type: "number",
      required: true
    },
    communicate: {
      type: "number",
      required: true
    },
    helpful_count: {
      type: "number"
    },
    helpful_yes: {
      type: "number"
    },
    verify: {
      type: "number",
      defaultsTo: 0
    },

    user_id: {
      model: "user"
    },
    service_id: {
      model: "Service_post"
    }
  }
};
