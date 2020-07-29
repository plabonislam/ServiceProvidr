module.exports = {


    list: async function(req, res) {
        userid = req.param("id");
        //  var categories = await Category.find({id: userid}).populate('category');
        var cat = await Category.find({
            id: userid
        }).populate('parent_category');

        res.render('category/show', {
            list: cat
        });
    },

    serve: async function(req, res) {
        userid = req.param("id");
        var services = await Service_post.find({
            id: userid
        }).populate('category').populate('state').populate('city').populate('user');
        console.log(services);

        res.render('category/details', {
            slist: services
        });


    }

};