function reverseGeocode(pos) {
  // console.log(pos)
  var lat = pos.lat
  var long = pos.long
  var query = lat + "," + long
  // console.log(query)
  var queryUrl = "https://dt-geocoder.herokuapp.com/reverse_geocode?params=" + query
  $.ajax({
      url: queryUrl
  }).done(function(response) {
    // console.log(response)
    parseAddress(response, queryWikipedia)
  });

}

function parseAddress(address, cb) {
    var city = address.split(", ")[1]
    var state = address.split(", ")[2].split(" ")[0]
    var cityState = city + ", " + state
    // console.log(cityState)
    cb(cityState)
    // console.log(state);
    setPic(state.toLowerCase());
}
