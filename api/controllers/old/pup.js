module.exports = {


    friendlyName: 'Update profile',


    description: 'Update the profile for the logged-in user.',


    inputs: {

        country: {
            type: 'string'
        },

        email: {
            type: 'string'
        },

        phone: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        website: {
            type: 'string'
        },
        tags: {
            type: 'string'
        },
        location: {
            type: 'string'
        },
        area: {
            type: 'string'
        },
        longitude: {
            type: 'string'
        },
        latitude: {
            type: 'string'
        },
        compensation: {
            type: 'string'
        },
        state: {
            type: 'string'
        },
        city: {
            type: 'string'
        },
        category: {
            type: 'string'
        },
        file: {
            type: 'string'
        }

    },


    exits: {

        emailAlreadyInUse: {
            statusCode: 409,
            description: 'The provided email address is already in use.',
        },

    },


    fn: async function(inputs) {

        // console.log("inputs", inputs);

       

        // var newContact = inputs.phone;
        // var newCity = inputs.country;
        // //  var newGender = inputs.gender;
        // var nn = inputs.title;
        // var des = inputs.description;
        // var web = inputs.website;
        // var tags = inputs.tags;
        // var location = inputs.location;
        // var area = inputs.area;

        // var lat = inputs.latitude;
        // var lon = inputs.longitude;
        // var com = inputs.compensation;
        // var cat = inputs.category;
        // var st = inputs.state;
        // var ct = inputs.city;

        // console.log(newContact, newCity, nn, des, web, tags, location, area, lat, lon, com, cat, st, ct);


        let str = inputs.title;
        var sl = "";

        if (str) {
            const a = 'àáäâãåăæąçćčđďèéěėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
            const b = 'aaaaaaaaacccddeeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------';
            const p = new RegExp(a.split('').join('|'), 'g');
            sl = str.toString().toLowerCase()
                .replace(/\s+/g, '-') // Replace spaces with -
                .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
                .replace(/&/g, '-and-') // Replace & with 'and'
                .replace(/[^\w\-]+/g, '') // Remove all non-word characters
                .replace(/\-\-+/g, '-') // Replace multiple - with single -
                .replace(/^-+/, '') // Trim - from start of text
                .replace(/-+$/, ''); // Trim - from end of text 



            let check = [];
            let test = "";
            var random = 0;
            check = await Service_post.find({
                slug: sl
            });
            while (check.length > 0) {
                test = sl + random;

                check = await Service_post.find({
                    slug: test
                });

                if (check.length == 0) {
                    sl = sl + random;
                    break;
                }
                random++;
            }

        }



        var newRecord = await Service_post.create({
            title: inputs.title,
            slug: sl ? sl : null,
            website: inputs.website,
            tags: inputs.tags,
            phone: inputs.phone,
            location: inputs.location ? inputs.location : undefined,
            latitude: inputs.latitude,
            longitude: inputs.longitude,
            compensation: inputs.compensation,
            country: inputs.country ? inputs.country : undefined,
            state: inputs.state ? inputs.state : undefined,
            city: inputs.city ? inputs.city : undefined,
            category: inputs.category,
            area_offered: inputs.area,
            email: inputs.email,
            user: this.req.me ? this.req.me.id : null,
        }).fetch();


        console.log(newRecord);



    },




};