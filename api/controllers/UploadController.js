module.exports = {
  welcomeUser: async function(req, res) {
    console.log(req);
    let item = JSON.parse(req.body.bodydata);
    console.log("item", item);
    var updateRecord = await User.update({
      id: req.me.id
    })
      .set({
        fullName: item.fullName,
        phone: item.phone,
        gender: item.gender,
        country: item.country ? item.country : undefined,
        state: item.state ? item.state : undefined,
        city: item.city ? item.city : undefined
      })
      .fetch();

    console.log(req.file);

    req.file("file").upload(
      {
        adapter: require("skipper-s3"),
        key: "AKIARWZSYLZMGRTRZJPQ",
        secret: "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",
        bucket: "ctr-imgs/imgs/UserImage"
      },
      async function(err, filesUploaded) {
        if (err) return res.serverError(err);
        console.log(
          "fileeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
        );
        if (filesUploaded.length == 0)
          return res.json({ status: 200, path: "ok" });
        console.log(filesUploaded[0].fd);
        let filePathOriginal =
          "https://ctr-imgs.s3-us-west-2.amazonaws.com/imgs/UserImage/" +
          filesUploaded[0].fd;
        console.log(filePathOriginal);
        var updateRecord = await User.update({ id: req.me.id })
          .set({ filepath: filePathOriginal })
          .fetch();
        res.json({ status: 200, path: filePathOriginal });
      }
    );
  },


};
