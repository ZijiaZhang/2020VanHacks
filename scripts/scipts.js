function initMap() {
    // The location of Uluru
    let locations = [
        ["Khurnak Fort", {lat: 33.7667, lng: 78.9877}],
        ["Sirijap", {lat: 33.74, lng: 78.849}],
        ["Table Top", {lat: 33.604, lng:  78.745}],
        ["Mukhpari Peak", {lat: 33.483333, lng: 78.815}],
        ["Rezang La", {lat: 33.42, lng: 78.85}],
        ["Quidijiankela Pass", {lat: 33.6275,  lng: 78.788056}],
        ["Black Top", {lat: 33.6225,  lng: 78.7755}],
        ["Bump ",{lat: 33.645, lng: 78.726}]
    ];
    let center = ["Bump ",{lat: 33.645, lng: 78.726}];
    // The map, centered at Uluru
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

    for (i = 0; i < locations.length; i++) {
        let marker = new google.maps.Marker({position: locations[i][1], map: map});
        marker[toString(i)] = new google.maps.InfoWindow({
            content: locations[i][0]
        });

        google.maps.event.addListener(marker, 'mouseover', function() {
            this[toString(i)].open(map, this);
        });
        google.maps.event.addListener(marker, 'mouseout', function() {
            this[toString(i)].close(map, this);
        });
    }

}