if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        POS = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        console.log("POS ready!")
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}