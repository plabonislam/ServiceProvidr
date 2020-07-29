/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  // "*": "is-logged-in",
  "*": ["isAuthorized"], // Everything resctricted here

  // Bypass the `is-logged-in` policy for:
  "home/view-homepage": true,
  "service/service": true,
  "category/category": true,
  "category/searchid": true,
  "category/search": true,
  "category/searchService": true,
  "service/details": true,
  "migration/testing": true,
  "migration/bulkupload": true,
  "migration/*": true,

  // aclog: true,
  "guest/*": true,
  "guest/login": true,
  "user/logout": true,
  "user/verify": true,
  "static-page/view-faq": true,
  "static-page/view-contact": true,
  "static-page/view-about": true,
  "static-page/view-terms": true,
  "static-page/view-privacy": true,
  "static-page/view-works": true,
  "contact/deliver-contact-form-message": true,
  ServiceController: {
    find: true,
    getAll: true,
    getByName: true,
    ServiceCount: true,
    uploadBulk: true
  },
  testController: {
    upload: true
  },
  StateController: {
    find: true
  },
  CityController: {
    find: true
  },
  CategoryController: {
    findOne: true,
    find: true
  },
  ActivityLogController: {
    find: true
  },
  User: {
    find: true,
    create: true
  },
  AuthController: {
    login: true
  },
  ReviewController: {
    review: true
  },
  CountryController: {
    getAllCountry: true,
    createCountry: true,
    createState: true,
    createCity: true
  }
  // CategoryController: {
  //   findOne: true,
  //   find: ["isAuthorized"]
  // }

  // Add POST/PUT without prefix
  // "entrance/signup": "test"
};
