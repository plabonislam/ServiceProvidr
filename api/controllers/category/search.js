module.exports = {
  friendlyName: "View search",
  description: 'Display "search" page.',
  exits: {
    success: {
      viewTemplatePath: "category/search"
    }
  },
  fn: async function() {
    let itemid = "";
    let slug = "";
    let parentid = "";
    let tag = "";
    if (this.req.query.hasOwnProperty("categoryName")) {
      slug = this.req.query.categoryName;
    }
    if (this.req.query.hasOwnProperty("searchTag")) {
      tag = this.req.query.searchTag;
    }
    console.log("slug", slug);

    var categoryItemList = await Category.find({
      parent_category: null,
      isPublish: true
    })
      .populate("child_categories", {
        where: {
          isPublish: true
        }
      })
      .sort("priority ASC");

    for (let itemdata of categoryItemList) {
      var sum = 0;
      for (let childdata of itemdata.child_categories) {
        var count = await Service_post.count({ category: childdata.id });
        childdata.count = count;
        sum += count;
        // console.log("childdata.name--",itemdata.name,childdata.name,count);
      }
      itemdata.count = sum;
    }
    if (slug != "") {
      var currentcategoryItemList = await Category.find({
        slug: slug,
        parent_category: null,
        isPublish: true
      })
        .populate("child_categories", {
          where: {
            isPublish: true
          }
        })
        .sort("priority ASC");

      currentcategoryItemList.forEach(async function(itemdata) {
        itemid = itemdata.id;
        parentid = itemdata.id;
      });

      let subcategoryItemList = [];
      if (currentcategoryItemList.length == 0) {
        subcategoryItemList = await Category.find({
          slug: slug,
          isPublish: true
        })
          .populate("parent_category", {
            where: {
              isPublish: true
            }
          })
          .sort("priority ASC");

        for (let itemdata of subcategoryItemList) {
          currentcategoryItemList = await Category.find({
            slug: itemdata.parent_category.slug,
            parent_category: null,
            isPublish: true
          })
            .populate("child_categories", {
              where: {
                isPublish: true
              }
            })
            .sort("priority ASC");
          itemid = itemdata.id;
          parentid = itemdata.parent_category.id;
        }
      }
    }

    var categoryList = await Category.find({
      parent_category: null,
      isPublish: true
    })
      .populate("child_categories", {
        where: {
          isPublish: true
        }
      })
      .sort("name ASC")
      .sort("priority ASC");
    var CountryList = await Country.find({
      active: true,
      deleted: false
    })
      .populate("state", {
        where: {
          active: true,
          deleted: false
        },
        sort: "name ASC"
      })
      .populate("city", {
        where: {
          active: true,
          deleted: false
        },
        sort: "name ASC"
      })
      .sort("name ASC");
    // var CityList = await City.find({});
    // var StateList = await State.find({});

//for seo service List

var servicesRecent = await Service_post.find({
  deleted: false,
  active: true
})
  .limit(6)
  .populate("category")
  .populate("state")
  .populate("city");


    return {
      CountryList: CountryList,
      // CityList: CityList,
      // StateList: StateList,
      categoryList: categoryList,
      categoryItemList: categoryItemList,
      itemid: itemid,
      parentid: parentid,
      tag: tag,
      servicesRecent:servicesRecent,
    };
  }
};
