var AWS = require("aws-sdk");
var request = require("request");
const path = require("path");
const fs = require("fs");

module.exports = {
  fn: async function(req, res) {
    put_from_url(
      "https://cdn.vox-cdn.com/thumbor/9oYEkxDge6OmC0TUbwVDSH1baPI=/44x0:413x277/1200x800/filters:focal(44x0:413x277)/cdn.vox-cdn.com/uploads/chorus_image/image/47312614/1979692_835146116514499_42138593325455989_n.0.0.jpg",
      "ctr-imgs",
      `imgs/bulkService/img2.jpg`,
      function(err, res) {
        if (err) console.log(err, err.stack);

        console.log("Uploaded data successfully!", res);
      }
    );

    async function put_from_url(url, bucket, key, callback) {
      var s3 = new AWS.S3();
      s3.config.update({
        accessKeyId: "AKIARWZSYLZMGRTRZJPQ",
        secretAccessKey: "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"
      });
      s3.config.region = "US West (Oregon)";
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
              ContentType: "image/jpeg;image.png",
              // ContentLength: res.headers["content-length"],
              // ACL: "public-read",
              Body: body // buffer
            },

            function(err, data) {
              if (err) return callback(err.stack, null);
              // an error occurred
              callback(null, data); // successful response
            }
          );
        }
      );
    }
  }
};
