// Creates the Google Map (Thanks for the code, Google!)
// source: https://developers.google.com/maps/documentation/javascript/adding-a-google-map
var initMap = function() {
    console.log("Creating initial map..");
    var umbcCoords = {lat:39.2558586, lng:-76.7116755};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: umbcCoords});
}

$(document).ready(function() {
    console.log("Running!");
    initMap();
});