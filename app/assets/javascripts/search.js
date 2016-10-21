$(function() {
    $("#search-form").hide();
    $("#search-icon").on("click", function() {
        $("#search-form").toggle();
    });

    $(".wrapper").mouseup(function() {
      $("#search-icon").attr("src", "assets/search-icon.png")
    })
    .mousedown(function() {
      $("#search-icon").attr("src", "assets/search-gray.png")
    })
    .on({ 'touchstart' : function(){ $("#search-icon").attr("src", "assets/search-gray.png") } })
    .on({ 'touchend' : function(){ $("#search-icon").attr("src", "assets/search-icon.png") } });

});
