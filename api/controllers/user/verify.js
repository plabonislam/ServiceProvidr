/**
 * FavouritepostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  friendlyName: "Activate Account",

  description: 'Display "details" page.',

  exits: {
    success: {
      viewTemplatePath: "guest/login"
    }
  },

  fn: async function() {
    let decode = this.req.param("id");
    console.log("decode", decode);
    var obj = Buffer.from(decode, "base64").toString();
    var jobject = JSON.parse(obj);
    console.log("object", jobject);
    console.log("object-number", jobject.email);

    let record = await User.findOne({
      emailAddress: jobject.email,
      emailVerificationCode: jobject.emailVerificationCode
    });

    if (!record)
      return { userInfo: "Varification url expired or invalid url!" };

    console.log("record");
    var message = "here you are to activate ";
    // Store the user's new id in their session.
    if (record.emailActivateStatus === false) {
      message = "Your Account is Acitivated";
      let updatedUser = await User.update({ emailAddress: jobject.email }).set({
        emailActivateStatus: true,
        emailStatus: "confirmed"
      });
      // this.req.session.userId = record.id;
      // var token = jwToken.issue({
      //   userId: record.id
      // });
      // this.req.session.token = token;
      // console.log("single clicked",record.emailActivateStatus);
      // console.log("record", record);
      // console.log("updatedUser", updatedUser);
    }
    if (record.emailActivateStatus === true) {
      message = "Your Account is already  Acitivated";
      console.log("already verified");
    }
    return {
      userInfo: message
    };
  }
};
