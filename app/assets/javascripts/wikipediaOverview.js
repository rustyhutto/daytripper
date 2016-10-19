function queryWikipedia(query) {
    console.log("querying wikipedia for: " + query)
    var usRe = /, United States/
    var sansUs = query.replace(usRe, "")

    var re = / /g
    var formattedQuery = sansUs.replace(re, "_")
    var queryUrl = "https://query-wikipedia.herokuapp.com/?params=" + formattedQuery
    $.ajax({
        url: queryUrl
    }).done(function(response) {
        // console.log("sending to TTS")
        $(".container").html(response)
        readText(response)
    });
}

$(function() {
    $("#search-button").on("click", function(e) {
        e.preventDefault();
        // debugger
        var searchQuery = $("#search-field").val();
        queryWikipedia(searchQuery);
    })
});
