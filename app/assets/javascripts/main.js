$(function() {
    $("#launch").on("click", function() {
      responsiveVoice.speak(" ");
      reverseGeocode(POS)
    })
});
