/**
 * Favourite.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {



    attributes: {

        userid: {
            model: 'User'
        },
        postid: {

            model: 'Service_post'
        },
        favStatus: {
            type: "string"
        }

    }

};