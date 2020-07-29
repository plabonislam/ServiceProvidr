var allservice = require("../../datas/bulk_service");
var utilSlug = require("../../services/utils");
var AWS = require("aws-sdk");
var request = require("request");
module.exports = {
  friendlyName: "View testing",

  description: 'Display "testing" page.',

  //   exits: {

  //     success: {
  //       viewTemplatePath: 'migration/te'
  //     }

  //   },

  fn: async function(req, res) {
    let Services = allservice.data;
    Services.map(item => createService(item));
  }
};
async function createService(item, req) {
  let catSlug = await utilSlug.getSlug(item.Category);
  var categoryRecord = await Category.findOne({
    slug: catSlug
  });
  let subcatSlug = await utilSlug.getSlug(item.SubCategory);
  var subcategoryrecord = await Category.findOne({
    slug: subcatSlug
  });
  // var stateRecord = await State.findOne({
  //   name: item.State
  // });

  // var cityRecord = await City.findOne({
  //   name: item.City
  // });

  // console.log('added:' + newRecord.name);
  let slug = await generateServiceSlug(item.Title);
  let time;
  time = await new Date().getTime();
  if (slug === "") {
    sails.log();
    slug = "service-" + time;
    console.log("Slug not found " + time);
  }

  let check = [];

  check = await Service_post.find({
    slug: slug
  });

  if (check.length > 0) {
    slug = slug + time;
  }
  let imagePath = [];
  for (it of item.ImageUrls) {
    var up = it.split("/");
    let h = up.length;
    h--;
    imagePath.push(`imgs/${up[h]}`);
    put_from_url(it, "ctr-imgs", `imgs/bulkService/${up[h]}`, function(
      err,
      res
    ) {
      if (err) console.log(err, err.stack);

      console.log("Uploaded data successfully!", res);
    });
  }
  var newServiceRecord = await Service_post.create({
    title: item.Title ? item.Title : null,
    slug: slug ? slug : "",
    // description: item.Description ? item.Description : "",
    images: imagePath,

    phone: item.Phone ? item.Phone : "",
    email: item.Email ? item.Email : "",
    ranking: 0,
    website: typeof WebSite === "string" ? WebSite : "",
    latitude: item.LattitudeValue,
    longitude: item.LongitudeValue,
    user: "5db5256fdcbfcd207004e68d",
    post_date: item.PostDate,
    Orphan_service: true,
    category: typeof categoryRecord == "object" ? categoryRecord.id : null,
    subCategory:
      typeof subcategoryrecord == "object" ? subcategoryrecord.id : null,
    country: "5db524e3dcbfcd207004dbdb",
    state: item.State ? item.State : "",
    city: item.City ? item.City : ""
  }).fetch();

  console.log(newServiceRecord);
}

function put_from_url(url, bucket, key, callback) {
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
          ContentType: res.headers["content-type"],
          ContentLength: res.headers["content-length"],
          Body: body // buffer
        },
        callback
      );
    }
  );
}

async function generateServiceSlug(title) {
  const a =
    "àáäâãåăæąçćčđďèéěėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b =
    "aaaaaaaaacccddeeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return title
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
