function initialize() {

    var input = document.getElementById('search-field');
    console.log(input)
    var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', initialize);