const usStates = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY"
};
const arr = [
  { Alabama: "AL" },
  { Alaska: "AK" },
  { Arizona: "AZ" },
  { Arkansas: "AR" },
  { California: "CA" },
  { Colorado: "CO" },
  { Connecticut: "CT" },
  { Delaware: "DE" },
  { Florida: "FL" },
  { Georgia: "GA" },
  { Hawaii: "HI" },
  { Idaho: "ID" },
  { Illinois: "IL" },
  { Indiana: "IN" },
  { Iowa: "IA" },
  { Kansas: "KS" },
  { Kentucky: "KY" },
  { Louisiana: "LA" },
  { Maine: "ME" },
  { Maryland: "MD" },
  { Massachusetts: "MA" },
  { Michigan: "MI" },
  { Minnesota: "MN" },
  { Mississippi: "MS" },
  { Missouri: "MO" },
  { Montana: "MT" },
  { Nebraska: "NE" },
  { Nevada: "NV" },
  { "New Hampshire": "NH" },
  { "New Jersey": "NJ" },
  { "New Mexico": "NM" },
  { "New York": "NY" },
  { "North Carolina": "NC" },
  { "North Dakota": "ND" },
  { Ohio: "OH" },
  { Oklahoma: "OK" },
  { Oregon: "OR" },
  { Pennsylvania: "PA" },
  { "Rhode Island": "RI" },
  { "South Carolina": "SC" },
  { "South Dakota": "SD" },
  { Tennessee: "TN" },
  { Texas: "TX" },
  { Utah: "UT" },
  { Vermont: "VT" },
  { Virginia: "VA" },
  { Washington: "WA" },
  { "West Virginia": "WV" },
  { Wisconsin: "WI" },
  { Wyoming: "WY" }
];

module.exports = {
  fn: async function(req, res) {
    // service_post category & parent_category migration
    let services = await Service_post.find({}).populate("category");
    services.forEach(async service => {
      if (service.category) {
        await Service_post.update({ id: service.id }).set({
          parent_category: service.category.parent_category
        });
      }
    });

    User.update({ emailAddress: "ahsan_kabeer@yahoo.com" }).set({
      filepath: ""
    });

    //usa state update
    let states = await State.find({ country: "5dac32abb3b3ead1049091f1" });
    states.forEach(async state => {
      if (state.name === usStates[state.name]) {
        console.log(state.name, usStates[state.name]);
        await State.update({ name: state.name }).set({
          shortName: usStates[state.name]
        });
      }
    });

    await Service_post.update({ deleted: false })
      .set({
        Orphan_service: true
      })
      .fetch();
    await Category.update({})
      .set({
        deleted: false
      })
      .fetch();

    await ActivityLog.update({})
      .set({
        deleted: false
      })
      .fetch();

    // await Category_country__country_category.update({})
    //   .set({
    //     deleted: false
    //   })
    //   .fetch();

    await City.update({})
      .set({
        deleted: false
      })
      .fetch();

    await City_ip.update({})
      .set({
        deleted: false
      })
      .fetch();

    await City_location.update({})
      .set({
        deleted: false
      })
      .fetch();

    await Country.update({})
      .set({
        deleted: false
      })
      .fetch();

    await State.update({})
      .set({
        deleted: false
      })
      .fetch();

    await Inactive.update({})
      .set({
        deleted: false
      })
      .fetch();

    await Location.update({})
      .set({
        deleted: false
      })
      .fetch();

    await Review.update({})
      .set({
        deleted: false
      })
      .fetch();

    await User.update({})
      .set({
        deleted: false
      })
      .fetch();

    await Favourite.update({})
      .set({
        deleted: false
      })
      .fetch();

    console.log("you have updated deleted field");
  }
};
