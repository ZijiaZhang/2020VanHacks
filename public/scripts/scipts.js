async function initMap() {
    // The location of Uluru
    let locations = await fetch('/v1/areas');
    let data = await locations.json();
    data = data.areas;
    let center = ["PC ",{lat: 49.283138, lng: -123.118221}];
    let map = new google.maps.Map(
        document.getElementById('map'), {
            mapId: "bb4fbe2722fc6e0e",
            center: center[1],
            zoom: 12,
            disableDefaultUI:true
        });
    // The marker, positioned at Uluru
    //let marker = new google.maps.Marker({position: center, map: map});
    //for (i = 0; i < locations.length; i++) {
    //    new google.maps.Marker({position: locations[i][1], map: map});
    //}

    //let biohazard = "http://maps.google.com/mapfiles/kml/pal3/icon46.png";
    for (i = 0; i < data.length; i++) {
        try {
            let marker = new google.maps.Marker({
                position: {lat: data[i].latitude, lng: data[i].longitude},
                map: map,
                //icon: biohazard
            });
            marker[toString(i)] = new google.maps.InfoWindow({
                content: data[i].time
            });

            google.maps.event.addListener(marker, 'mouseover', function () {
                this[toString(i)].open(map, this);
            });
            google.maps.event.addListener(marker, 'mouseout', function () {
                this[toString(i)].close(map, this);
            });

            const circle = new google.maps.Circle({
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
                map,
                center: {lat: data[i].latitude, lng: data[i].longitude},
                radius: data[i].radius,
            })
        } catch {e} {
            console.error(e);
        }
    }

}