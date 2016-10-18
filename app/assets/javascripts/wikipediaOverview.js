function queryWikipedia(query) {
    // console.log("querying wikipedia for: " + query)
    var re = / /g
    var formattedQuery = query.replace(re, "_")
    var queryUrl = "https://query-wikipedia.herokuapp.com/?params=" + formattedQuery
    $.ajax({
        url: queryUrl
    }).done(function(response) {
        // console.log("sending to TTS")
        $(".container").html(response)
        readText(response)
    });
}
