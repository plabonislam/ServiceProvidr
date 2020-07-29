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
            viewTemplatePath: 'user/my-favourite-posts'
        }

    },


    fn: async function() {

     var Favlist = await Favourite.find({userid: this.req.me.id}).populate('postid');
     console.log(Favlist);
     
        return {
            Favlist : Favlist
        };

    }



};