/**
 * FavouriteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
// const path = require('path');

module.exports = {




    fn:function() {

        var userid = this.req.me.id;



        var reqp=this.req;
        var resp=this.res;
      

        var upload =  new Promise (function(resolve,reject){
            reqp.file('files').upload({ 
                dirname: require('path').resolve(sails.config.appPath, 'assets/images/user'),
            },
            async function(err, uploadedFiles) {
                if (err)
                    return {
                        err: "err looser"
                    };
                // console.log(uploadedFiles);
                console.log("messsage innerrrrrrrrrrrrrrrrr");
                arr1 = "messsage innerrrrrrrrrrrrrrrrr";
                
                resolve(uploadedFiles);
            });
        });

    
        Promise.all([upload]).then(values => { 
            console.log(values); // [3, 1337, "foo"] 
             
          });
       
       

    }

};


  // var arr1 = "messsage";
        // var filePath = path.resolve(sails.config.appPath, 'assets/images/user');
        // // var resp =this.res;
        //      this.req.file('files').upload({ 
        //             dirname: filePath,
        //         },
        //         async function(err, uploadedFiles) {
        //             if (err)
        //                 return {
        //                     err: "err looser"
        //                 };
        //             // console.log(uploadedFiles);
        //             // console.log("messsage innerrrrrrrrrrrrrrrrr");
        //             // arr1 = "messsage innerrrrrrrrrrrrrrrrr";
        //             // return resp.status(200).send('Hello world!');
        //            const files = uploadedFiles.map(file=>file.fd)
        //            resp.send(files)
        //         });
    //    this.res.send('Hello world!')
        // result.then(response => {
        //     console.log("ppppppppppppppp", response),
        //         this.res.send('Hello world!')
        // })