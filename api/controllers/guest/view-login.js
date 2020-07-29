module.exports = {
  friendlyName: "View login",

  description: 'Display "Login" page.',

  exits: {
    success: {
      viewTemplatePath: "guest/login"
    },

    redirect: {
      description: "The requesting user is already logged in.",
      responseType: "redirect"
    }
  },

  fn: async function() {
    console.log("this.req me", this.req.me);

    if (this.req.me) {
      throw { redirect: "/" };
    }

    let updatedUser = "";
    return {
      userInfo: updatedUser
    };
  }
};
