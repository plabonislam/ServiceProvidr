/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {
  /****************************************************************************
   *                                                                           *
   * Sails/Express middleware to run for every HTTP request.                   *
   * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
   *                                                                           *
   * https://sailsjs.com/documentation/concepts/middleware                     *
   *                                                                           *
   ****************************************************************************/

  middleware: {
    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP requests.           *
     * (This Sails app's routes are handled by the "router" middleware below.)  *
     *                                                                          *
     ***************************************************************************/
    // order: [
    //   "cookieParser",
    //   "session",
    //   "bodyParser",
    //   "compress",
    //   "poweredBy",
    //   "router",
    //   "www",
    //   "favicon",
    //   "foobar"
    // ],

    // Activitylog middleware
    activitylog: (function() {
      console.log("Initializing activitylog (HTTP middleware)...");
      return function(req, res, next) {
        // console.log("Received HTTP request: " + req.method + " " + req.path);
        require("../api/services/logService").render(req, res);
        return next();
      };
    })(),

    passportInit: require("passport").initialize(),
    passportSession: require("passport").session(),

    order: [
      "cookieParser",
      "session",
      "passportInit",
      "passportSession",
      "bodyParser",
      "compress",
      "activitylog",
      "poweredBy",
      "router",
      "www",
      "favicon"
    ]
    /***************************************************************************
     *                                                                          *
     * The body parser that will handle incoming multipart HTTP requests.       *
     *                                                                          *
     * https://sailsjs.com/config/http#?customizing-the-body-parser             *
     *                                                                          *
     ***************************************************************************/
    // bodyParser: (function _configureBodyParser() {
    //   var skipper = require("skipper");
    //   var middlewareFn = skipper({ strict: true });
    //   return middlewareFn;
    // })()
  }
};