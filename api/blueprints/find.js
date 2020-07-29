/**
 * Module dependencies
 */

const _ = require("lodash");
const actionUtil = require("../../node_modules/sails/lib/hooks/blueprints/actionUtil");
const formatUsageError = require("../../node_modules/sails/lib/hooks/blueprints/formatUsageError");
// var actionUtil = require('../actionUtil');
// var formatUsageError = require('../formatUsageError');

/**
 * Find Records
 *
 * http://sailsjs.com/docs/reference/blueprint-api/find
 *
 * An API call to find and return model instances from the data adapter
 * using the specified criteria.  If an id was specified, just the instance
 * with that unique id will be returned.
 *
 */

module.exports = function findRecords(req, res) {
  var parseBlueprintOptions =
    req.options.parseBlueprintOptions ||
    req._sails.config.blueprints.parseBlueprintOptions;

  // Set the blueprint action for parseBlueprintOptions.
  req.options.blueprintAction = "find";

  var queryOptions = parseBlueprintOptions(req);
  var Model = req._sails.models[queryOptions.using];

  // for population limit
  let limitChild = 100;
  let page = 1;
  let limit = 30;
  if (queryOptions.criteria.where.hasOwnProperty("limitChild")) {
    limitChild = queryOptions.criteria.where.limitChild;
    delete queryOptions.criteria.where.limitChild;
    console.log("limitchild", limitChild);
  }
  console.log("page ase ki", queryOptions.criteria);
  if (queryOptions.criteria.where.hasOwnProperty("page")) {
    page = queryOptions.criteria.where.page - 1;
    delete queryOptions.criteria.where.page;

    limit = queryOptions.criteria.limit;
    queryOptions.criteria.skip = `${limit * page}`;
    console.log("page", page, queryOptions.criteria.skip);
  }
  if (!queryOptions.criteria.where.hasOwnProperty("deleted")) {
    queryOptions.criteria.where.deleted = false;
  }

  Object.keys(queryOptions.populates).forEach(item => {
    // console.log("##", queryOptions.populates[item]);
    if (queryOptions.populates[item].hasOwnProperty("limit"))
      queryOptions.populates[item].limit = limitChild;
  });

  console.log(
    "checking req from find",
    queryOptions.criteria
    // "popu",
    // queryOptions.populates
  );

  Model.find(queryOptions.criteria, queryOptions.populates)
    .meta(queryOptions.meta)
    .exec(async function found(err, matchingRecords) {
      if (err) {
        // If this is a usage error coming back from Waterline,
        // (e.g. a bad criteria), then respond w/ a 400 status code.
        // Otherwise, it's something unexpected, so use 500.
        switch (err.name) {
          case "UsageError":
            return res.badRequest(formatUsageError(err, req));
          default:
            return res.serverError(err);
        }
      } //-•

      if (req._sails.hooks.pubsub && req.isSocket) {
        Model.subscribe(req, _.pluck(matchingRecords, Model.primaryKey));
        // Only `._watch()` for new instances of the model if
        // `autoWatch` is enabled.
        if (req.options.autoWatch) {
          Model._watch(req);
        }
        // Also subscribe to instances of all associated models
        _.each(matchingRecords, function(record) {
          actionUtil.subscribeDeep(req, record);
        });
      } //>-

      var numRecords = await Model.count({
        where: queryOptions.criteria.where
      });

      res.set("total", numRecords);
      res.set("page", page);
      res.set("limit", limit);
      return res.ok(matchingRecords);
    }); //</ .find().exec() >
};
