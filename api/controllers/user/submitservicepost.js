/**
 * FavouritepostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    exits: {
        success: {
            description: 'The post has submitted successfully.',
            statusCode: 200,
            viewTemplatePath: 'user/new-service-post',
        },
        invalid: {
            responseType: 'badRequest',
            description: 'Please check, some of the data are invalid.',
            extendedDescription: 'If this request was sent from a graphical user interface, the request '+
            'parameters should have been validated/coerced _before_ they were sent.'
        },
    },
    fn: async function() {
        console.log("******************************** Mohammad Shanewaz Al Maruf *********************************")
        // make body data
        let bodyData = this.req.body;
        bodyData.slug = utils.getSlug(bodyData.title);
        

        console.log('...test',bodyData)

        // Submit 
        // try{
            var serviceRecord = await Service_post.create(bodyData).fetch();
            // console.log('serviceRecord', serviceRecord);
            this.res.redirect('/');
        // }
        // catch(err){
            console.log(err)
        // };
        return {
            me: this.req.me
        }
    }
};