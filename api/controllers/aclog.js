module.exports = {
  friendlyName: "aclog",
  description: "get all aclog for test",

  exits: {
    success: {
      description: "The requesting user agent has been successfully logged in.",
      extendedDescription: `Under the covers, this stores the id of the logged-in user in the session
            as the \`userId\` key.  The next time this user agent sends a request, assuming
            it includes a cookie (like a web browser), Sails will automatically make this
            user id available as req.session.userId in the corresponding action.  (Also note
            that, thanks to the included "custom" hook, when a relevant request is received
            from a logged-in user, that user's entire record from the database will be fetched
            and exposed as \`req.me\`.)`,
      responseType: "ok"
    },
    badCombo: {
      description: `Unauthorized.`,
      responseType: "unauthorized"
      // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
      // To customize the generic "unauthorized" response across this entire app, change that file
      // (see api/responses/unauthorized).
      //
      // To customize the response for _only this_ action, replace `responseType` with
      // something else.  For example, you might set `statusCode: 498` and change the
      // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
    }
  },
  fn: async function(inputs) {
    // Look up by the email address.
    // (note that we lowercase it to ensure the lookup is always case-insensitive,
    // regardless of which database we're using)
    var log = await ActivityLog.find({});

    return log;
  }
};
