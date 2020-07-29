module.exports = {
  create: async (actionName, model, data, user) => {
    const actionType = "created";
    console.log(
      "pllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
      actionType
    );
    const insertedData = await model
      .create({ ...data, createdBy: user.id })
      .fetch();

    if (!!insertedData) {
      const log = await ActivityLog.create({
        userId: user.id,
        userName: user.fullName,
        actionType,
        actionName,
        actionInfo: { ...data }
      }).fetch();

      console.log("log", log);

      if (log) return insertedData;
    } else {
      return false;
    }
  },
  update: async () => {},
  remove: async () => {},
  find: async () => {
    console.log(
      "pllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
      actionType
    );
  },
  init: async (req, res) => {
    Object.keys(sails.models).map(model => {
      model.afterCreate((newlyCreatedRecord, proceed) => {
        console.log("newlyCreatedRecord", newlyCreatedRecord);
      });
    });

    console.log("Logservice Http middleware initialized");
  },
  render: async (req, res) => {
    // console.log("models...", Object.keys(sails.models));
  }
};
