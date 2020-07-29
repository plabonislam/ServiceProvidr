module.exports = {


    friendlyName: 'Details page',


    description: 'Display or redirect to the appropriate service details, depending on login status.',


    exits: {

        success: {
            statusCode: 200,
            description: 'Showing the proper address of service provider.',
            viewTemplatePath: 'category/details'
        }

    },


    fn: async function() {
        let postid = this.req.params.id;
        //service for id
        let service = await Service_post.findOne({
            id: postid
        }).populate('category').populate('country').populate('state').populate('city').populate('user');




        //review list for that service id
        let review = await Review.find({
            service_id: postid
        }).populate('user_id');
        let Tcommunicate = 0;
        let   Toverall = 0;
            let  Tskill = 0;
            let  Tprice = 0;
            let Tontime = 0;
            let  Taverage = 0;
        let count = 0;
        review.forEach(el => {
            count++;
            Tcommunicate += el.communicate;
            Toverall += el.overall;
            Tskill += el.skill;
            Tprice += el.price;
            Tontime += el.ontime;
        });
        // console.log(Tcommunicate,Tontime,Toverall,Tprice,count);

        // let services = {};
        // if (count != 0) {
        //     if (typeof(service.category) != null && service.category.hasOwnProperty('id')) {
        //         services = await Service_post.find({
        //             category: service.category.id
        //         }).populate('category').populate('country').populate('state').populate('city').limit(3);
        //         // services.limit(3);
        //     } else {
        //         services = {};
        //     }

        if (count != 0) {
            Tcommunicate = Math.ceil(Tcommunicate / count);
            Toverall = Math.ceil(Toverall / count);
            Tskill = Math.ceil(Tskill / count);
            Tprice = Math.ceil(Tprice / count);
            Tontime = Math.ceil(Tontime / count);
            Taverage = (Tcommunicate + Toverall + Tontime + Tprice + Tskill) / 5;
            //  console.log("after average",Tcommunicate,Tontime,Toverall,Tprice,count,Taverage);
        }

        let Total = {
            Tcommunicate: Tcommunicate,
            Toverall: Toverall,
            Tskill: Tskill,
            Tprice: Tprice,
            Tontime: Tontime,
            Taverage: Taverage,
            count: count

        };



        

          let services;
           if(service.category&& service.category.hasOwnProperty('id')){
                services= await Service_post.find({category:service.category.id }).populate('category').populate('country').populate('state').populate('city').limit(3);
            }
          else{
                 services=[];
             }
        

        let favourite = {};

        if (this.req.me && this.req.me.id) {
            favourite = await Favourite.findOne({
                postid: postid,
                userid: this.req.me.id
            });
        }

        console.log('pppppppppp7', favourite);

        console.log('pppppppppp7', favourite);
        console.log('services', services);


        return {
            item: service,
            sreview: review,
            postid: postid,
            serviceList: services,
            serviceListLength: services.length,
            Total: Total,
            favourite: favourite
        }

    }




};