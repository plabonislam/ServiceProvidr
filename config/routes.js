/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //homepage
  "GET /?": { action: "home/view-homepage" },
  //search page
  "GET /search": { action: "category/search" },
  "GET /search/?:id": { action: "category/searchid" },
  "POST /search": { action: "category/search" },

  //static page
  "GET /testing": { action: "migration/testing" },
  "GET /faq": { action: "static-page/view-faq" },
  "GET /about": { action: "static-page/view-about" },
  "GET /legal/terms": { action: "static-page/view-terms" },
  "GET /legal/privacy": { action: "static-page/view-privacy" },
  "GET /contact": { action: "static-page/view-contact" },
  "GET /how-it-works": { action: "static-page/view-works" },
  "/terms": "/legal/terms",

  //user management
  "GET /signup": { action: "guest/view-signup" },
  "GET /email/confirm": { action: "guest/confirm-email" },
  "GET /email/confirmed": { action: "guest/view-confirmed-email" },
  "GET /verify/?:id": { action: "user/verify" },

  "GET /login": { action: "guest/view-login" },
  "GET /logout": "/api/v1/user/logout",
  "GET /password/forgot": { action: "guest/view-forgot-password" },
  "GET /password/new": { action: "guest/view-new-password" },

  "GET /account": { action: "user/view-account-overview" },
  "GET /account/password": { action: "user/view-edit-password" },
  "GET /account/profile": { action: "user/view-edit-profile" },

  "GET /welcome": { action: "user/view-welcome" },

  "GET /my-services": { action: "user/myposts" },
  "GET /my-favourite": { action: "user/myfavouriteposts" },
  "GET /edit-profile": { action: "user/editaccount" },

  "POST /edit-profile": { action: "user/editaccount" },

  //user post

  //'POST  /api/v1/user/logout':      { action: 'user/logout' },
  "PUT   /api/v1/user/update-password": { action: "user/update-password" },
  "PUT   /api/v1/user/update-profile": { action: "user/update-profile" },
  "PUT   /api/v1/user/update-billing-card": {
    action: "user/update-billing-card"
  },
  "PUT   /api/v1/guest/login": {
    controller: "AuthController",
    action: "login"
  },
  // "PUT   /api/v1/guest/login": { action: "guest/signup" },
  "POST  /api/v1/guest/signup": { action: "guest/signup" },
  "POST  /api/v1/guest/send-password-recovery-email": {
    action: "guest/send-password-recovery-email"
  },
  "POST  /api/v1/guest/update-password-and-login": {
    action: "guest/update-password-and-login"
  },
  "POST  /api/v1/deliver-contact-form-message": {
    action: "contact/deliver-contact-form-message"
  },

  //kaj korte hobe User

  //migratin script
  "GET /test": { action: "migration/test" },

  //kaj
  "POST /upload": { controller: "UploadController", action: "welcomeUser" },

  //email service provide>deatils page
  "POST  /emailfriend": { action: "guest/emailfriend" },
  "GET /test": { action: "user/logout" },

  //service
  "GET /new-posts": { action: "user/servicepost" },
  "GET /service/?:id": { action: "service/service" },
  "POST /service": { controller: "serviceController", action: "createService" },
  "GET /editService/?:id": { action: "user/editservice" },
  "POST /updateservice": {
    controller: "serviceController",
    action: "updateService"
  },
  "POST /service/?:id": {
    controller: "serviceController",
    action: "deleteService"
  },
  "POST /imageupload": {
    controller: "serviceController",
    action: "singleimageUpload"
  },
  "POST /service/inactive/?:postId": {
    controller: "serviceController",
    action: "inactiveService"
  },
  "POST /submit-posts": { action: "user/submitservicepost" },

  "POST /review": { action: "service/review" },
  "POST /serviceReview/?:reviewid": {
    controller: "ReviewController",
    action: "review"
  },
  "POST /service/favourite/?:postId": { action: "user/favourite" },
  "POST /service/unfavourite/?:postId": { action: "user/unfavourite" },
  "POST /bulk": {
    controller: "serviceController",
    action: "uploadBulk"
  },
  "POST /addPromotion": {
    controller: "serviceController",
    action: "addPromotion"
  },

  "POST /bulkone": {
    controller: "serviceController",
    action: "bulkone"
  },

  //activity log
  "GET /aclog": { action: "aclog" }
};
