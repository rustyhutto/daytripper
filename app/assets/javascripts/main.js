$(function() {
    $("#launch").on("click", function() {
        reverseGeocodeLatLng(GEOCODER, LAT_LONG)
    })
});