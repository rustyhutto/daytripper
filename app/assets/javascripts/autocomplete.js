function initialize() {

    var options = {
        types: ['(cities)'],
        componentRestrictions: {
            country: "us"
        }
    };
    var input = document.getElementById('search-field');
    console.log(input)
    var autocomplete = new google.maps.places.Autocomplete(input, options);
}

google.maps.event.addDomListener(window, 'load', initialize);
