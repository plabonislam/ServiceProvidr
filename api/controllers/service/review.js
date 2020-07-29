/**
 * ReveiwController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  friendlyName: "Details page",

  description:
    "Display or redirect to the appropriate service details, depending on login status.",

  inputs: {
    title: {
      required: true,
      type: "string",

      description: "The email address for the new account, e.g. m@example.com.",
      extendedDescription: "must be a string"
    },

    pid: {
      required: true,
      type: "string",

      description: "578",
      extendedDescription: "must be a string"
    },
    area: {
      required: false,
      type: "string",
      maxLength: 200,
      example: "topoban abasik",
      description: "The unencrypted password to use for the new account."
    },

    opt: {
      required: true,
      type: "string",
      example: "Yes/ No",
      description: "The user's full name."
    },

    skill: {
      required: true,
      type: "number",

      example: 3,
      description: "The unencrypted password to use for the new account."
    },

    price: {
      required: true,
      type: "number",
      example: 4,
      description: "The user's full name."
    },
    overall: {
      required: true,
      type: "number",

      example: 5,
      description: "The unencrypted password to use for the new account."
    },

    ontime: {
      required: true,
      type: "number",
      example: 3,
      description: "The user's full name."
    },
    communicate: {
      required: true,
      type: "number",
      example: 4,
      description: "The user's full name."
    }
  },
  redirect: {
    description: "The requesting user agent looks to be a web browser.",
    extendedDescription:
      "After logging out from a web browser, the user is redirected away.",
    responseType: "redirect"
  },

  fn: async function(inputs) {
    console.log("plabbbbbbbbbbbbbbbbbbbbbbbbbb");
    var usertitle = inputs.title;
    var userarea = inputs.area;
    var useroption = inputs.opt;
    var Postid = inputs.pid;
    var userskill = inputs.skill;
    var userprice = inputs.price;
    var userontime = inputs.ontime;
    var usercommunicate = inputs.communicate;
    var useroverall = inputs.overall;
    if (useroption == "Yes") useroption = 1;
    else useroption = 0;
    console.log(
      usertitle,
      userarea,
      useroption,
      useroverall,
      userskill,
      userprice,
      userontime,
      usercommunicate,
      Postid
    );

    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;

    var newRecord = await Review.create({
      title: usertitle,
      description: userarea,
      overall: useroverall,
      skill: userskill,
      price: userprice,
      ontime: userontime,
      communicate: usercommunicate,
      review_time: dateTime,
      received: useroption,
      service_id: Postid,
      user_id: this.req.me.id
    }).fetch();

    return {};
  }
};
