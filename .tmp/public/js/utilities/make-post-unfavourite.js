
parasails.registerUtility('markAsUnFav', async function markAsUnFav(servicePostId,that) {
  console.log(servicePostId,that);
  return await $.ajax({
      url: `/service/unfavourite/${servicePostId}`,
      method: 'POST',
      ContentType: 'application/json',
      // data: JSON.stringify({data: servicePostId}),
      cache: false,
       success : function(afterResponse){
           console.log('afterResponse',afterResponse);
           console.log('finally',that);
          //  if( !that.unfvalue){
          //  //   UIkit.notification("<span uk-icon='icon: check'></span> Removed from your favourite items. ");
          //     that.unfvalue = true;
          //     that.fvalue = false;
          //  }
           UIkit.notification("<span uk-icon='icon: check'></span> Removed from your favourite items. ");

          // this.fvalue=false;
          return true;
        },
      
        error: function(e){
          return e;
          // UIkit.notification(e, {status:'danger'});
          //  console.log("Error",e);
          // UIkit.modal("#modal-center").show();
          //   alert('Opps! You need to login first.');

        },
  } );
  
});

