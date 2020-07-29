module.exports = {
  getAllCountry: async function(req, res) {
    var countryList = await Country.find({
      active: true,
      deleted: false
    })
      .populate("state", {
        where: {
          active: true,
          deleted: false
        },
        limit: 400,
        sort: "name ASC"
      })
      .populate("city", {
        where: {
          active: true,
          deleted: false
        },
        limit: 400,
        sort: "name ASC"
      })
      .limit(400);
    // .sort("name ASC");
    isPublish: true, console.log(countryList);
    return res.json(countryList);
  },
  createCountry: async function(req, res) {
    let countryName = "";
    if (req.query.hasOwnProperty("country") && req.query.country != "") {
      countryName = req.param("country");
    }

    let existCountry = await Country.find({ name: countryName });
    if (existCountry.length > 0) {
      return res.json("already exist");
    }
    let newCountry = await Country.create({
      name: countryName,
      active: true
    }).fetch();
    console.log(newCountry);
    res.json(newCountry);
  },
  createState: async function(req, res) {
    let countryid = "";
    let stateName = "";
    if (req.query.hasOwnProperty("countryid") && req.query.countryid != "") {
      countryid = req.param("countryid");
    }
    if (req.query.hasOwnProperty("state") && req.query.stateid != "") {
      stateName = req.param("state");
    }
    let existState = await State.find({ name: stateName });
    if (existState.length > 0) {
      return res.json("already exist");
    }
    let newState = await State.create({
      name: stateName,
      active: true,
      country: countryid
    }).fetch();
    console.log(newState);
    res.json(newState);
  },
  createCity: async function(req, res) {
    let countryid = "";
    let stateid = "";
    let cityName = "";
    if (req.query.hasOwnProperty("countryid") && req.query.countryid != "") {
      countryid = req.param("countryid");
    }
    if (req.query.hasOwnProperty("stateid") && req.query.stateid != "") {
      stateid = req.param("stateid");
    }

    if (req.query.hasOwnProperty("city") && req.query.city != "") {
      cityName = req.param("city");
    }
    let existCity = await City.find({ name: cityName });
    if (existCity.length > 0) {
      return res.json("already exist");
    }
    let newcity = await City.create({
      name: cityName,
      active: true,
      country: countryid,
      state: stateid
    }).fetch();
    console.log(newcity);
    res.json(newcity);
  }
};
