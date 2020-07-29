var AWS = require("aws-sdk");
module.exports = {
  put_from_url: async (url, bucket, key, callback) => {
    var s3 = new AWS.S3();
    request(
      {
        url: url,
        encoding: null
      },
      function(err, res, body) {
        if (err) return callback(err, res);

        s3.putObject(
          {
            Bucket: bucket,
            Key: key,
            ContentType: res.headers["content-type"],
            ContentLength: res.headers["content-length"],
            Body: body // buffer
          },
          callback
        );
      }
    );
  },
  delete: async (imgArray, callback) => {
    var s3 = new AWS.S3();
    s3.config.update({
      accessKeyId: "AKIARWZSYLZMGRTRZJPQ",
      secretAccessKey: "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"
    });

    let imagespath = [];
    for (let it of imgArray) {
      imagespath.push({
        Key: it
      });
    }

    console.log(imagespath, "imagespathimagespath ");
    s3.config.region = "US West (Oregon)";
    var params = {
      Bucket: "ctr-imgs",
      Delete: {
        Objects: imagespath,
        Quiet: false
      }
    };

    // Objects: [
    //   {
    //     Key: "imgs/ServiceImage/01c99e0c-f21e-4860-bf01-e7c79274b0ae.jpg"
    //   },
    //   {
    //     Key: "imgs/ServiceImage/0390cdf2-1989-43cd-8c93-77510dcd597e.jpg"
    //   }
    // ]
    s3.deleteObjects(params, function(err, data) {
      if (err) console.log(err, "Images are not removed");

      console.log(data, "You have Succesfully deleted your Image");
    });
  },
  upload: async (req, callback) => {
    let imagepath;
    await req.file("files").upload(
      {
        adapter: require("skipper-s3"),
        key: "AKIARWZSYLZMGRTRZJPQ",
        secret: "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",
        bucket: "ctr-imgs/imgs/ServiceImage"
      },
      function(err, filesUploaded) {
        if (err) return err;
        console.log(
          "fileeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          filesUploaded
        );
        imagepath = filesUploaded.map(image => {
          return (
            "https://ctr-imgs.s3-us-west-2.amazonaws.com/imgs/ServiceImage/" +
            image.fd
          );
        });
        console.log("imagepath", imagepath);

        // return [...imagepath]
        callback(imagepath);
      }
    );

    // return imagepath;
  }
};
