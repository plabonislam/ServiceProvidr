/**
 * Blueprint API Configuration
 * (sails.config.blueprints)
 *
 * For background on the blueprint API in Sails, check out:
 * https://sailsjs.com/docs/reference/blueprint-api
 *
 * For details and more available options, see:
 * https://sailsjs.com/config/blueprints
 */

module.exports.blueprints = {
  /***************************************************************************
   *                                                                          *
   * Automatically expose implicit routes for every action in your app?       *
   *                                                                          *
   ***************************************************************************/

  actions: true,

  /***************************************************************************
   *                                                                          *
   * Automatically expose RESTful routes for your models?                     *
   *                                                                          *
   ***************************************************************************/

  rest: true,

  /***************************************************************************
   *                                                                          *
   * Automatically expose CRUD "shortcut" routes to GET requests?             *
   * (These are enabled by default in development only.)                      *
   *                                                                          *
   ***************************************************************************/

  // parseBlueprintOptions(req) {
  //   var queryOptions = req._sails.hooks.blueprints.parseBlueprintOptions(req);

  // if (!req.param("populate", false) && !queryOptions.alias) {
  //   queryOptions.populates = {};
  // }
  // if(req.param("populate", false))
  //   console.log("i wannna see u", req.param("where"));
  //   return queryOptions;
  // },

  shortcuts: true,

  prefix: "/api/v1"
};
