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
        let uncheckfavourite = await Favourite.destroyOne({postid : postId,userid: this.req.me.id})

   
        //await Favourite.destroy({});

      //   console.log("favourite create response ", uncheckfavourite);
        //var services = [];
       //   console.log("uncheckfavourite.id",uncheckfavourite.id);
            return uncheckfavourite;
            
     
            

       

    }

};