function initMap() {
    // The location of Uluru
    let locations = [
        ["Wreck Beach: Sept 7th 1pm to 9pm", {lat: 49.262179, lng:  -123.261530}],
        ["The Kings Head Public House: Sept 4th to Sept 7th", {lat: 49.271314, lng: -123.154828}],
        ["Athens Cultural Club: August 26 to September 8", {lat: 49.262930, lng:  -123.107300}],
        ["The West Pub: August 20 to September 8", {lat: 49.280835, lng: -123.104052}],
        ["Flying Beaver Bar and Grill: August 28 to September 3", {lat: 49.177289, lng: -123.168206}],
        ["The Compound/ Heaven: August 29", {lat: 49.278834,  lng:-123.123385}],
        ["Studio Lounge and Nightclub: August 28", {lat: 49.280183,  lng: -123.121946}],
        ["Cabana Lounge: August 28",{lat: 49.277666, lng: -123.125673}],
        ["Lions MMA: August 18 to August 28 (inclusive)", {lat: 49.276497, lng: -123.126955}]
    ];
    let center = ["PC ",{lat: 49.283138, lng: -123.118221}];
    let map = new google.maps.Map(
        document.getElementById('map'), {
            mapId: "bb4fbe2722fc6e0e",
            center: center[1],
            zoom: 12,
        });
    // The marker, positioned at Uluru
    //let marker = new google.maps.Marker({position: center, map: map});
    //for (i = 0; i < locations.length; i++) {
    //    new google.maps.Marker({position: locations[i][1], map: map});
    //}

    //let biohazard = "http://maps.google.com/mapfiles/kml/pal3/icon46.png";
    for (i = 0; i < locations.length; i++) {
        let marker = new google.maps.Marker({
            position: locations[i][1],
            map: map,
            //icon: biohazard
        });
        marker[toString(i)] = new google.maps.InfoWindow({
            content: locations[i][0]
        });

        google.maps.event.addListener(marker, 'mouseover', function() {
            this[toString(i)].open(map, this);
        });
        google.maps.event.addListener(marker, 'mouseout', function() {
            this[toString(i)].close(map, this);
        });

        const circle = new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map,
            center: locations[i][1],
            radius: 300,
        })
    }

}