function queryWikipedia(query) {
    console.log("******************************")
    console.log("query recieved: " + query)
    var usRe = /, United States/
    var sansUs = query.replace(usRe, "")
    console.log("sansUs: " + query)

    var re = / /g
    var formattedQuery = sansUs.replace(re, "_")
    console.log("formattedQuery going to query-wikipedia: " + formattedQuery)
    var queryUrl = "https://query-wikipedia.herokuapp.com/?params=" + formattedQuery
    // var queryUrl = "https://87c95f82.ngrok.io/?params=" + formattedQuery
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
        console.log("searchQuery from form: " + searchQuery)
        var state = searchQuery.split(", ")[1];
        console.log(state);
        setPic(state.toLowerCase());
        setPlaylist(state.LowerCase());
        queryWikipedia(searchQuery);
    })
});
