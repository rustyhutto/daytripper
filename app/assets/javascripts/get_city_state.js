function reverseGeocodeLatLng(geocoder, pos) {
    var latlng = { lat: parseFloat(pos.lat), lng: parseFloat(pos.lng) };
    geocoder.geocode({ 'location': latlng }, function(results, status) {
        if (status === 'OK') {
            handleAddresses(results, queryWikipedia);
        }
    });
}

function handleAddresses(addresses, cb) {
    var formattedAddress = addresses[0].formatted_address;
    var city = formattedAddress.split(", ")[1]
    var state = formattedAddress.split(", ")[2].split(" ")[0]
    var cityState = city + ", " + state
    cb(cityState)
}