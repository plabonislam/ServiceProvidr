const logService = require("../services/logService");
const fileService = require("../services/fileService");
var utilSlug = require("../services/utils");
var AWS = require("aws-sdk");
var request = require("request");
const path = require("path");
const fs = require("fs");
const ndjson = require("ndjson");
const jsonfile = require("jsonfile");

module.exports = {
  getAll: async function(req, res) {
    var itemid = "";

    let countryid = "";
    let stateid = "";
    let cityid = "";
    var querystring = {};
    querystring.where = {};
    if (req.query.hasOwnProperty("id") && req.query.id != "") {
      itemid = req.param("id");

      console.log("itemiditemid", itemid);
    }
    console.log("itemiditemid", itemid);

    if (req.query.hasOwnProperty("category") && req.query.category != "") {
      itemid = req.param("category");
    }

    if (req.query.hasOwnProperty("country") && req.query.country != "") {
      countryid = req.param("country");
    }
    console.log(countryid, "country");
    console.log("itemiditemid", itemid);
    if (req.query.hasOwnProperty("state") && req.query.state != "") {
      stateid = req.param("state");
    }
    if (req.query.hasOwnProperty("city") && req.query.city != "") {
      cityid = req.param("city");
    }
    var limit = 8; //req.query.limit;
    var skip = 0;
    if (req.query.hasOwnProperty("skip")) {
      skip = req.query.skip;
    }

    console.log(limit, "limit");

    var itemList = [];
    if (itemid != "") {
      var currentcategoryItemList = await Category.find({
        id: itemid,
        deleted: false,
        parent_category: null
      }).populate("child_categories");

      for (let itemdata of currentcategoryItemList) {
        for (let childdata of itemdata.child_categories) {
          itemList.push(childdata.id);
          // console.log(childdata.id, "childdata");
        }
      }

      if (currentcategoryItemList.length == 0) {
        //for subcategory
        querystring.where = {
          category: itemid
        };
        console.log("subcategory");
      } else {
        //main category
        console.log("category");
        querystring.where = {
          category: itemList
        };
      }
    }

    if (countryid != "") {
      querystring.where.country = countryid;
    }
    if (stateid != "") {
      querystring.where.state = stateid;
    }
    if (cityid != "") {
      querystring.where.city = cityid;
    }
    // querystring.title = {title: 'Get Your Car, Boat, Motorcycle'};
    querystring.skip = skip;
    querystring.limit = limit;
    querystring.sort = "ranking DESC";
    querystring.where.deleted = false;

    querystring.select = [
      "id",
      "title",
      "slug",
      "images",
      "ranking",
      "compensation",
      "hits",
      "latitude",
      "longitude"
    ];

    console.log(querystring);
    var items = await Service_post.find(querystring)
      .populate("state")
      .populate("city")
      .populate("category");
    console.log(items.length, "iiiiiiiiiiiiiiiiiiiiiii");

    return res.json(items);
  },

  ServiceCount: async function(req, res) {
    // var itemid = "";
    var currentcategoryItemList = [];

    let countryid = "";
    let stateid = "";
    let cityid = "";
    // if (req.query.hasOwnProperty("id") && req.query.id != "") {
    //   itemid = req.param("id");

    //   console.log("itemiditemid try little bit ", itemid);
    // }

    //   if (itemid != "") {
    //    currentcategoryItemList = await Category.find({
    //     id: itemid,
    //     parent_category: null
    //   }).populate("child_categories");
    // }
    // else{
    if (req.query.hasOwnProperty("country") && req.query.country != "") {
      countryid = req.param("country");
    }
    console.log(countryid, "country");

    if (req.query.hasOwnProperty("state") && req.query.state != "") {
      stateid = req.param("state");
    }
    if (req.query.hasOwnProperty("city") && req.query.city != "") {
      cityid = req.param("city");
    }
    currentcategoryItemList = await Category.find({
      parent_category: null,
      isPublish: true,
      deleted: false
    }).populate("child_categories");

    // }
    // if (currentcategoryItemList.length != 0) {
    let total = [];

    let criteria = {
      active: true,
      deleted: false
    };
    countryid && (criteria.country = countryid);
    stateid && (criteria.state = stateid);
    cityid && (criteria.city = cityid);

    for (let itemdata of currentcategoryItemList) {
      var sum = 0;
      for (let childdata of itemdata.child_categories) {
        var count = await Service_post.count({
          category: childdata.id,
          ...criteria
        });
        childdata.count = count;
        sum += count;
        console.log("childdata.name--", itemdata.name, childdata.name, count);
      }
      itemdata.count = sum;
      if (sum > 0) total.push(itemdata);
      console.log(sum, itemdata.count, "itemdata.countitemdata.count");
    }

    // }

    return res.json(total);
  },

  getByName: async function(req, res) {
    // var db = Service_post.getDatastore().manager;
    // //{"albums.title": {"$regex": /blue/}}
    // db.collection(Service_post.tableName).find({}).skip(1).limit(5).toArray(function(err,data){
    //     console.log("err",err);
    //     console.log("datadatadata",data);
    // });

    var itemid = "";
    var tag = "";
    var items = [];
    if (req.query.hasOwnProperty("id") && req.query.id != "") {
      itemid = req.param("id");

      console.log("itemiditemid", itemid);
    }
    if (req.query.hasOwnProperty("tag") && req.query.tag != "") {
      let currenttag = req.param("tag");
      tag = currenttag
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/['"<>@+?.,\/#!$%\^&\*;:{}=\_`~()]/g, "")
        // .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, "");
      console.log("tagtag", tag);
    }
    console.log("itemiditemid", itemid);
    if (tag === "" && itemid === "") {
      return res.json(items);
    }
    var limit = 8; //req.query.limit;
    var skip = 0;
    if (req.query.hasOwnProperty("skip")) {
      skip = req.query.skip;
    }

    console.log(limit, "limit");

    var querystring = {};
    var title = {};
    if (itemid != "") {
      var itemList = [];
      var currentcategoryItemList = await Category.find({
        id: itemid,
        deleted: false,
        parent_category: null
      }).populate("child_categories");

      for (let itemdata of currentcategoryItemList) {
        for (let childdata of itemdata.child_categories) {
          itemList.push(childdata.id);
          console.log(childdata.id, "childdata");
        }
      }

      if (currentcategoryItemList.length == 0) {
        //for subcategory
        querystring.where = {
          category: itemid
        };
        console.log("subcategory");
      } else {
        //main category
        console.log("category");
        querystring.where = {
          category: itemList
        };
      }
    } else {
      querystring.where = {};
    }

    if (tag != "") {
      querystring.where.slug = {
        contains: tag
      };
    }
    querystring.where.deleted = false;
    querystring.skip = skip;
    querystring.limit = limit;
    querystring.sort = "ranking DESC";
    querystring.select = [
      "id",
      "title",
      "slug",
      "images",
      "ranking",
      "compensation",
      "hits",
      "latitude",
      "longitude"
    ];
    console.log(querystring);
    items = await Service_post.find(querystring)
      .populate("state")
      .populate("city")
      .populate("category");
    // console.log(allitems.length, "iiiiiiiiiiiiiiiiiiiiiii");

    return res.json(items);
  },
  createService: async function(req, res) {
    let item = JSON.parse(req.body.bodydata);
    console.log(item);
    let str = item.title;
    let selectedCategory = item.subcategory;
    let selectedPhone = item.phone;
    let existService = await Service_post.find({
      category: selectedCategory,
      phone: selectedPhone,
      state: item.state
    });
    if (existService.length > 0) {
      console.log("existServiceexistService");
      return res.json(existService);
    }
    var sl = "";
    if (str) {
      const a =
        "àáäâãåăæąçćčđďèéěėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
      const b =
        "aaaaaaaaacccddeeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------";
      const p = new RegExp(a.split("").join("|"), "g");
      sl = str
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, "-and-") // Replace & with 'and'
        .replace(/[^\w\-]+/g, "") // Remove all non-word characters
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text

      let check = [];
      let test = "";
      var random = 0;
      check = await Service_post.find({
        slug: sl
      });
      while (check.length > 0) {
        test = sl + random;

        check = await Service_post.find({
          slug: test
        });

        if (check.length == 0) {
          sl = sl + random;
          break;
        }
        random++;
      }
    }

    await fileService.upload(req, async function(images) {
      var data = {
        title: item.title,
        slug: sl ? sl : item.title,
        website: item.website ? item.website : "",
        tags: item.tags ? item.tags : "",
        images: images || [],
        phone: item.phone,
        location: item.location ? item.location : "",
        latitude: item.latitude,
        longitude: item.longitude,
        compensation: item.compensation,
        country: item.country ? item.country : null,
        state: item.state ? item.state : null,
        city: item.city ? item.city : null,
        category: item.subcategory ? item.subcategory : null,
        area_offered: item.area ? item.area : "",
        email: item.email,
        ranking: 0,
        address: item.address,
        user: req.me ? req.me.id : ""
      };

      const user = req.me;

      var newRecord = await logService.create(
        "service",
        Service_post,
        data,
        user
      );
      let foot = [];
      if (!!newRecord) {
        console.log("notttttttttttexistServiceexistService");
        res.json(foot);
      }
      // });
    });
  },

  updateservice: async function(req, res) {
    let currentItemid;
    let item;
    if (req.body.hasOwnProperty("serviceid")) {
      currentItemid = req.body.serviceid;
    }
    if (req.body.hasOwnProperty("bodydata")) {
      item = JSON.parse(req.body.bodydata);
    }
    // let item = JSON.parse(req.body.bodydata);
    let previousImage = [];
    let removeServiceImage = [];
    if (req.body.hasOwnProperty("previousImage")) {
      previousImage = JSON.parse(req.body.previousImage);
    }

    if (req.body.hasOwnProperty("removeServiceImage")) {
      removeServiceImage = JSON.parse(req.body.removeServiceImage);
    }

    // var sl = "";
    // if (str) {
    //   const a = 'àáäâãåăæąçćčđďèéěėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
    //   const b = 'aaaaaaaaacccddeeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------';
    //   const p = new RegExp(a.split('').join('|'), 'g');
    //   sl = str.toString().toLowerCase()
    //     .replace(/\s+/g, '-') // Replace spaces with -
    //     .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    //     .replace(/&/g, '-and-') // Replace & with 'and'
    //     .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    //     .replace(/\-\-+/g, '-') // Replace multiple - with single -
    //     .replace(/^-+/, '') // Trim - from start of text
    //     .replace(/-+$/, ''); // Trim - from end of text

    //   let check = [];
    //   let test = "";
    //   var random = 0;
    //   check = await Service_post.find({
    //     slug: sl
    //   });
    //   while (check.length > 0) {
    //     test = sl + random;

    //     check = await Service_post.find({
    //       slug: test
    //     });

    //     if (check.length == 0) {
    //       sl = sl + random;
    //       break;
    //     }
    //     random++;
    //   }

    // }

    //permanently delete code
    // if (removeServiceImage.length > 0) {
    //   await fileService.delete(removeServiceImage, async function(images) {});
    // }

    //new image upload
    await fileService.upload(req, async function(images) {
      //update
      // console.log("newwwww imageeeeeeeeeeee", images);
      let totalImage = previousImage.concat(images);
      console.log(
        totalImage,
        "totalImagetotalImagetotalImagetotalImagetotalImagetotalImage"
      );

      let checkDelete = await Service_post.findOne({ id: currentItemid });
      let Deletedimages = checkDelete.deletedImages;
      if (Deletedimages.length > 0) {
        removeServiceImage = removeServiceImage.concat(Deletedimages);
      }

      let service = await Service_post.updateOne({ id: currentItemid }).set({
        title: item.title,
        //slug: sl ? sl : item.title,
        images: totalImage,
        deletedImages: removeServiceImage,
        website: item.website ? item.website : "",
        tags: item.tags ? item.tags : "",
        phone: item.phone,
        location: item.location ? item.location : "",
        latitude: item.latitude,
        longitude: item.longitude,
        compensation: item.compensation,
        country: item.country ? item.country : "",
        state: item.state ? item.state : "",
        city: item.city ? item.city : "",
        category: item.category,
        area_offered: item.area ? item.area : "",
        email: item.email,
        address: item.address,
        user: req.me ? req.me.id : ""
      });
      if (!!service) {
        res.json({
          status: 200
        });
      }
      //   console.log(service);
      // console.log(item);
      console.log(service, "serviceserviceserviceservice");
    });
  },
  deleteService: async function(req, res) {
    console.log(req.params.id);
    let serviceid = req.params.id;

    let service = await Service_post.findOne({ id: serviceid });
    if (!service.hasOwnProperty("deleted")) {
      service.deleted = false;
    }
    let deleteservice = await Service_post.update({ id: serviceid })
      .set({
        deleted: true
      })
      .fetch();

    // let result = await Service_post.update({ id: postId }).set({
    //   inactiveCount: value
    // });
    if (deleteservice) {
      return res.json(deleteservice);
    }
  },
  inactiveService: async function(req, res) {
    var postId = req.params.postId;
    console.log("postidfor inactive ", postId);

    var valuesToSet = {
      userid: req.me.id,
      postid: postId
    };
    let checkExist = await Inactive.find(valuesToSet);

    if (checkExist.length > 0) {
      console.log("you have set Inactive request for the service ");

      return res.json({ firstName: "User has already set Inactive" });
    }
    var value = 0;
    let CurrentItem = await Service_post.findOne({ id: postId });

    if (CurrentItem && !CurrentItem.hasOwnProperty("inactiveCount")) {
      CurrentItem.inactiveCount = 0;
    }
    console.log(
      CurrentItem.inactiveCount,
      " CurrentItem.inactiveCount CurrentItem.inactiveCount CurrentItem.inactiveCount CurrentItem.inactiveCount"
    );
    value = CurrentItem.inactiveCount;
    value++;

    console.log("mark as in activeeeeeeeeee");
    await Service_post.update({ id: postId }).set({
      mark_as_inactive: true
    });

    let result = await Service_post.update({ id: postId }).set({
      inactiveCount: value
    });

    var responseVal = await Inactive.create({
      userid: req.me.id,
      postid: postId,
      inactiveCount: 1
    }).fetch();
    console.log(responseVal, "responseValresponseValresponseValresponseVal");
    return res.json({ firstName: "User has set Inactive" });
  },
  singleimageUpload: async function(req, res) {
    req.file("file").upload(
      {
        adapter: require("skipper-s3"),
        key: "AKIARWZSYLZMGRTRZJPQ",
        secret: "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",
        bucket: "ctr-imgs/imgs/ServiceImage"
      },
      async function(err, filesUploaded) {
        if (err) return res.serverError(err);

        let filePathOriginal = "ServiceImage/" + filesUploaded[0].fd;
        console.log(filePathOriginal);
        res.json({ image: filePathOriginal });
      }
    );
  },
  uploadBulk: async function(req, res) {
    console.log(req.file);

    req.file("file").upload(
      {
        dirname: require("path").resolve(sails.config.appPath, "assets/json"),
        maxBytes: 100000000
      },
      function(err, uploadedFiles) {
        if (err) return res.serverError(err);
        if (uploadedFiles.length == 0) {
          return res.json({
            parameters: [],
            name: ""
          });
        }
        let originlPath = uploadedFiles[0].fd;
        let List = originlPath.split("/");
        let len = List.length;
        len--;
        let filename = List[len];
        console.log(filename);

        const downloadedFile = path.join(
          __dirname,
          "../../assets/json/" + filename
        );
        var dataJ = [];
        let parameters = null;
        let i = 1;
        let jsonObj;
        // jsonfile
        //   .readFile(downloadedFile)
        //   .then(obj => {
        //     res.json({ jsonObj: obj });
        //   })
        //   .catch(error => {
        //     console.log("json err");
        secondtry();
        // });

        function secondtry() {
          try {
            function main(file) {
              jsonObj = [];
              fs.createReadStream(file)
                .pipe(ndjson.parse())
                .on("data", function(obj) {
                  rendr(obj);
                })
                .on("end", function() {
                  parameters = Object.keys(jsonObj[0]);
                  return res.json({
                    message: "json parse success",
                    parameters,
                    json: jsonObj
                  });
                });

              let rendr = params => {
                jsonObj.push(params);
              };
            }

            main(downloadedFile);
          } catch (err) {
            console.log("not ndjson!");
            res.send("err");
          }
        }
      }
    );
    // req.file("file").upload(
    //   {
    //     adapter: require("skipper-s3"),
    //     key: "AKIARWZSYLZMGRTRZJPQ",
    //     secret: "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",
    //     bucket: "ctr-imgs"
    //   },
    //   async function(err, filesUploaded) {
    //     if (err) return res.serverError(err);
    //     console.log(
    //       "fileeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    //       filesUploaded
    //     );

    //     res.json({ status: 200, path: filesUploaded });
    //   }
    // );
  },
  bulkone: async function(req, res) {
    let data = req.body;
    // console.log("me", req.me);

    if (!data.title && !data.slug) {
      return res.json({
        oldId: data.oldId,
        error: "Title missing!",
        done: false
      });
    }

    if (!data.category) {
      return res.json({
        oldId: data.oldId,
        error: "Sub-category missing!",
        done: false
      });
    }
    if (!data.parent_category) {
      return res.json({
        oldId: data.oldId,
        error: "Category missing!",
        done: false
      });
    }
    if (data.temp_category) {
      const check_category = await Category.findOne({
        id: data.category,
        deleted: false
      });

      if (check_category.id != data.category) {
        return res.json({
          oldId: data.oldId,
          error: "Sub-category not matching with selected one!",
          done: false
        });
      }
    }
    console.log("temp_category passed");
    if (data.temp_parent_category) {
      const check_parent_category = await Category.findOne({
        name: data.temp_parent_category,
        deleted: false
      });
      if (check_parent_category.id != data.parent_category) {
        return res.json({
          oldId: data.oldId,
          error: "Parent category not matching with selected one!",
          done: false
        });
      }
    }
    console.log("parent_temp_category passed");

    let country;
    if (data.country) {
      country = await Country.find({
        name: data.country,
        deleted: false
      });
      console.log("data.country", data.country);
      if (country.length) {
        console.log("find country", country[0].name);
        data.country = country[0].id;
      } else {
        data.country = "5dac32abb3b3ead1049091f1";
      }
    }
    if (!data.country) {
      data.country = "5dac32abb3b3ead1049091f1";
      // usa id of my local mongo  "5dac32abb3b3ead1049091f1"
    }

    // console.log("check country", country);

    if (data.state) {
      const state = await State.find({
        or: [{ name: data.state }, { shortName: data.state }],
        deleted: false
      });

      if (state.length) {
        data.state = state[0].id;
      } else {
        state = await State.create({ name: data.state }).fetch();
        data.state = state.id;
      }
      // console.log("check state", state.name);
    }
    if (data.city) {
      // const city = await City.findOrCreate(
      //   {
      //     name: data.city
      //   },
      //   { name: data.city }
      // );
      console.log("city dekhte aise");
      const city = await City.find({
        where: {
          name: { contains: data.city },
          deleted: false
        }
      });

      if (city.length) {
        console.log("check city", city[0].name);
        data.city = city[0].id;
      } else {
        city = await City.create({ name: data.city }).fetch();
        data.city = city.id;
        console.log("city create korese", city.name);
      }
    }

    const slugFix = await Service_post.count({ slug: data.slug });

    if (slugFix > 0) {
      data.slug = data.slug + "-" + slugFix;
    }

    const checkUnique = await Service_post.find({
      phone: data.phone,
      state: data.state,
      category: data.category,
      deleted: false
    });

    console.log("checkUnique ", checkUnique.length);

    if (checkUnique.length) {
      return res.json({
        ...data,
        error:
          "Service already exist! Contact and address matched with another! url: https://catchthereview.com/service/" +
          checkUnique[0].id,
        done: false
      });
    }

    let imagePath = [];
    if (data.images && data.images.length > 0) {
      //images part

      for (const uri of data.images) {
        var up = uri.split("/");
        let h = up.length;
        h--;
        imagePath.push(`imgs/bulkService/${up[h]}`);

        put_from_url(uri, "ctr-imgs", `imgs/bulkService/${up[h]}`, function(
          err,
          res
        ) {
          if (err) console.log(err, err.stack);

          console.log("Uploaded data successfully!");
        });
      }
    }
    delete data.temp_parent_category;
    delete data.temp_category;
    delete data.images;
    var newServiceRecord = await Service_post.create({
      ...data,
      images: imagePath,
      Orphan_service: true,
      active: true,
      user: data.user || null
    }).fetch();

    if (newServiceRecord) {
      res.json({
        oldId: newServiceRecord.oldId,
        error: false,
        done: true
      });
    } else {
      res.json({
        oldId: newServiceRecord.oldId,
        error: "Server error, not saved!",
        done: false
      });
    }
    //
  }

  // claimService: async function(req, res) {}
};

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
