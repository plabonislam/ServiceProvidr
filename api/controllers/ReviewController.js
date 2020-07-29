module.exports = {

    'review': async function(req, res) {

         console.log("hhhhhhhhhhhhhhhhhhhhhhhhh");
         console.log(req.params.reviewid);
        let reviewId=req.params.reviewid;
        let review =await Review.findOne({id : reviewId});
        let count=review.helpful_count;
        count++;
        await Review.update({id:reviewId}).set({
            helpful_count:count
        });
        console.log(review,"vvvvvvvvvvvvvv");
        return res.json({ firstName: count });
    }
}