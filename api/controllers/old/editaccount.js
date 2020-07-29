/**
 * FavouritepostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    friendlyName: 'View edit acc',


    description: 'Display "details" page.',


    exits: {

        success: {
            viewTemplatePath: 'pages/user/edit-account'
        }

    },


    fn: async function() {

        var CityList = await City.find({});
        var CountryList = await Country.find({});
        // console.log(CityList);
        return {
            cityList: CityList,
            countryList: CountryList
        };

    }



};