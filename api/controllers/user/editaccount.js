/**
 * FavouritepostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    friendlyName: 'View edit acc',


    description: 'Display "details" page.',


    exits: {

        success: {
            viewTemplatePath: 'user/edit-account'
        }

    },


    fn: async function() {

        if(this.req &&  this.req.body && this.req.body.submitData=="1")
        {  
          //  console.log("this.req.file",this.req.file('file')._files[0]);  
          //  console.log("this.req.fileeeeee",this.req.file('file')._files[0]);    
            
            this.req.file('file').upload({
                dirname: require('path').resolve(sails.config.appPath, 'assets/images'),
            }, 

            async function (err, uploadedFiles) {
              if (err) 
                return { err  :"err looser" };
                else{
                    console.log("Done",uploadedFiles[0].fd);
                    console.log("Done",uploadedFiles[0]);
                    var arr= uploadedFiles[0].fd.split("/");
                    var path=arr[arr.length-1].toString();
                    var filename= uploadedFiles[0].filename;
                    console.log("arrrr",arr.length,arr[arr.length-1]);
                    await User.update({}) .set({
                        filepath : path ,
                        filename :  filename,
                    });
                }
            });
            

            console.log("Done");

           this.res.redirect("/edit-profile");

        }else{
            var CountryList = await Country.find({});
            var StateList = await State.find({country: this.req.me.country});
            var CityList = await City.find({state: this.req.me.state});
            //console.log(StateList);
            
            return {
                cityList: CityList,
                countryList: CountryList,
                stateList : StateList,
                me: this.req.me
            };
        }
        
    }



};