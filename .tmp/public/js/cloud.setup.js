/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({
  /* eslint-disable */
  methods: {
    search: { verb: "GET", url: "/search", args: [] },
    details: { verb: "GET", url: "/details", args: [] },
    testing: { verb: "GET", url: "/testing", args: ["step"] },
    confirmEmail: { verb: "GET", url: "/email/confirm", args: ["token"] },
    myposts: { verb: "GET", url: "/my-services", args: [] },
    myfavouriteposts: { verb: "GET", url: "/my-favourite", args: [] },
    editaccount: { verb: "GET", url: "/edit-profile", args: [] },
    verify: { verb: "GET", url: "/verify/?:id", args: [] },
    servicepost: { verb: "GET", url: "/new-posts", args: [] },
    submitservicepost: { verb: "POST", url: "/submit-posts", args: [] },
    location: { verb: "POST", url: "/location", args: ["country", "state"] },
    category: { verb: "GET", url: "/category/?:id" },
    searchid: { verb: "GET", url: "/search/?:id", args: [] },
    service: { verb: "GET", url: "/service/?:id", args: [] },
    logout: { verb: "GET", url: "/test", args: [] },
    favourite: { verb: "POST", url: "/favourite/?:postId", args: [] },
    unfavourite: { verb: "POST", url: "/unfavourite/?:postId", args: [] },
    emailfriend: {
      verb: "POST",
      url: "/emailfriend",
      args: ["receiverEmail", "senderEmail", "subject", "description"]
    },
    review: {
      verb: "POST",
      url: "/review",
      args: [
        "title",
        "pid",
        "area",
        "opt",
        "skill",
        "price",
        "overall",
        "ontime",
        "communicate"
      ]
    },
    welcomeUser: { verb: "POST", url: "/multiupload" },
    updatePassword: {
      verb: "PUT",
      url: "/api/v1/user/update-password",
      args: ["password"]
    },
    updateProfile: {
      verb: "PUT",
      url: "/api/v1/user/update-profile",
      args: [
        "fullName",
        "emailAddress",
        "country",
        "state",
        "city",
        "file",
        "phone",
        "gender"
      ]
    },
    updateBillingCard: {
      verb: "PUT",
      url: "/api/v1/user/update-billing-card",
      args: [
        "stripeToken",
        "billingCardLast4",
        "billingCardBrand",
        "billingCardExpMonth",
        "billingCardExpYear"
      ]
    },
    login: {
      verb: "PUT",
      url: "/api/v1/guest/login",
      args: ["emailAddress", "password", "rememberMe"]
    },
    signup: {
      verb: "POST",
      url: "/api/v1/guest/signup",
      args: ["emailAddress", "password", "fullName"]
    },
    sendPasswordRecoveryEmail: {
      verb: "POST",
      url: "/api/v1/guest/send-password-recovery-email",
      args: ["emailAddress"]
    },
    updatePasswordAndLogin: {
      verb: "POST",
      url: "/api/v1/guest/update-password-and-login",
      args: ["password", "token"]
    },
    deliverContactFormMessage: {
      verb: "POST",
      url: "/api/v1/deliver-contact-form-message",
      args: ["emailAddress", "topic", "fullName", "message"]
    }
  }
  /* eslint-enable */
});
