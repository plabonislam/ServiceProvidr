/**
 * FavouritepostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    friendlyName: 'View favourite post',


    description: 'Display "details" page.',


    exits: {

        success: {
            viewTemplatePath: 'pages/user/my-favourite-posts'
        }

    },


    fn: async function() {

        // Respond with view.
        return {};

    }



};