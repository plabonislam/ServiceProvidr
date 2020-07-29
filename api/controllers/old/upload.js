// /**
//  * FavouriteController
//  *
//  * @description :: Server-side actions for handling incoming requests.
//  * @help        :: See https://sailsjs.com/docs/concepts/actions
//  */

// module.exports = {




//     'new': async function() {

//         var userid = this.req.me.id;
    
        
//         var upload = await this.req.file('file').upload({
//             dirname: require('path').resolve(sails.config.appPath, 'assets/images/user'),
//         }, async function(err, uploadedFiles) {
//             if (err)
//                 return {
//                     err: "err looser"
//                 };
//             let filePathOriginal = uploadedFiles[0].fd;
//             let filePathRelative = filePathOriginal.replace(sails.config.appPath+'/assets', '');

//             console.log('filePathOriginal', filePathOriginal);
//             console.log('filePathRelative', filePathRelative);

//             var arr = uploadedFiles[0].fd.split("\\");
//             var path = arr[arr.length - 1].toString();
//             var filename = uploadedFiles[0].filename;

//             var updateRecord = await User.update({
//                 id: userid
//             }).set({
//                 filename: filename,
//                 filepath:'/images/user/'+path,
//             }).fetch();
            
//             console.log("updated", updateRecord);
            
//             return "upload";

//         });
    


//     }

// };


module.exports = async function welcomeUser  (req, res) {

       
     console.log("you are here");
        sails.log.debug('We have entered the uploading process ');

        req.file('file').upload({
            dirname: '../../assets/images/'
        }, function(err, files) {
            sails.log.debug('file is :: ', +files);
            maxBytes: 10000000;
            if (err) return res.serverError(err);
            console.log(files);
            res.json({
                status: 200,
                file: files
            });
        });
    };
