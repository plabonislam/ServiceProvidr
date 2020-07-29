/**
 * FavouriteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    fn: async function() {
        var postId = this.req.params.postId;
        console.log("postid", postId);
        console.log(this.req.params.postId);
      let checkfavourite = await Favourite.find({postid : postId,userid: this.req.me.id});
      if(checkfavourite.length <1){
        var responseVal = await Favourite.create({
            userid: this.req.me.id,
            postid: postId,
            favStatus: "yes"
        }).fetch();
    }
        //await Favourite.destroy({});

        console.log("favourite create response ", responseVal);
        //var services = [];
        //console.log("this.req.params",this.req.params);



        return responseVal;

    }

};