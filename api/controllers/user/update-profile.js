module.exports = {
  friendlyName: "Update profile",

  description: "Update the profile for the logged-in user.",

  inputs: {
    fullName: {
      type: "string"
    },

    emailAddress: {
      type: "string"
    },
    country: {
      type: "string"
    },
    state: {
      type: "string"
    },
    city: {
      type: "string"
    },
    file: {
      type: "string"
    },
    phone: {
      type: "string"
    },
    gender: {
      type: "string"
    },
    role: {
      type: "string"
    }
  },

  exits: {
    emailAlreadyInUse: {
      statusCode: 409,
      description: "The provided email address is already in use."
    }
  },

  fn: async function(inputs) {
    console.log(inputs, "inputs");
    var valuesToSet = {
      fullName: inputs.fullName,
      phone: inputs.phone,
      gender: inputs.gender,
      filepath: "/images/user/" + inputs.file,
      country: inputs.country ? inputs.country : undefined,
      state: inputs.state ? inputs.state : undefined,
      city: inputs.city ? inputs.city : undefined
    };
    // Save to the db
    await User.updateOne({
      id: this.req.me.id
    }).set(valuesToSet);
  }
};
