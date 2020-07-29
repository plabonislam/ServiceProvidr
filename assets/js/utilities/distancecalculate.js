parasails.registerUtility('distanceCalculate', async function distanceCalculate(services,lat,lng) {
   console.log(lat,lng);
    for(const item of services){
        
        var R = 6371; // km (change this constant to get miles)
        var lat1 = lat;
        var lon1 = lng;
        var lat2 = item.latitude;
        var lon2 = item.longitude;


        var dLat = (lat2 - lat1) * Math.PI / 180;
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        let distant;
        if (d > 1) {
            console.log("distance", Math.round(d) + "mile");
            distant=Math.round(d*0.621371)+" mile";
        } else {
            console.log("distance", Math.round(d * 1000) + "m");
            distant=Math.round(d * 1000 )+" m";
        }
        
        item.distance=distant;
       console.log(item.distance,"item.distanceddddddddddddddddddddddddddddd");

    }
  //  console.log(services,"resulttttt");
    return services;

});