function initMap() {
    // making new geocoder
    var geocoder = new google.maps.Geocoder;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            // geocodeLatLng(geocoder, pos);
            console.log(geocoder);
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

$(function() {
    $("#launch").on("click", function() {
        initMap();
    })
});