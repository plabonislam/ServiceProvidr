parasails.registerUtility('markAsFav', async function markAsFav(servicePostId, that) {
    console.log(servicePostId, that);

    // alert("servicePostId");
    // if(that.fvalue== false){
    return await $.ajax({
        url: `/service/favourite/${servicePostId}`,
        method: 'POST',
        ContentType: 'application/json',
        // data: JSON.stringify({data: servicePostId}),
        cache: false,
        success: function(afterResponse) {
            console.log('afterResponse', afterResponse);
            console.log('finally', that);
             if(afterResponse && afterResponse.hasOwnProperty("favStatus") && afterResponse.favStatus=="yes"){
            // if (!that.fvalue) {
            //     that.fvalue = true;
            //     that.unfvalue = false;
            //   //  UIkit.notification("<span uk-icon='icon: check'></span> Your Favourite");
            UIkit.notification("<span uk-icon='icon: check'></span> Your Favourite");

             }
            return true;
        },

        error: function(e) {
            return e;
            // UIkit.notification(e, {status:'danger'});
            //  console.log("Error",e);
            // UIkit.modal("#modal-center").show();
            //   alert('Opps! You need to login first.');

        },
    });

});
