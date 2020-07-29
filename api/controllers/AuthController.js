/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require("passport");

module.exports = {
  login: function(req, res) {
    console.log("auth controller login");
    passport.authenticate("local", function(err, user, info) {
      if (err || !user) {
        return res.send({
          message: "User not valid!",
          user
        });
      }

      req.logIn(user, function(err) {
        if (err) res.send(err);

        let token = jwToken.issue({
          userId: user.id
        });

        req.session.token = token;
        req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
        req.session.userId = user.id;
        req.session.justNow = true;

        return res.json({
          message: info.message,
          token: token,
          user: user
        });
      });
    })(req, res);

    // passport.authenticate("jwt", { session: false }),
    //   function(req, res) {
    //     res.send("req.user.profile");
    //   };
  },
  logout: function(req, res) {
    req.logout();
    res.redirect("/");
  }
};
