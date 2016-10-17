function initMap() {
    // making new geocoder
    GEOCODER = new google.maps.Geocoder;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            LAT_LONG = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log("geoencoder and postion ready!")
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

