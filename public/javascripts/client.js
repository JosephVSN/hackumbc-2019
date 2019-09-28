// Creates the Google Map (Thanks for the code, Google!)
// source: https://developers.google.com/maps/documentation/javascript/adding-a-google-map
var initMap = function() {
    console.log("Creating initial map..");
    var umbcCoords = {lat:39.2558586, lng:-76.7116755};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: umbcCoords});
}

// Gets the user's current geolocation (lat, long)
// source: https://developers.google.com/maps/documentation/javascript/geolocation
var addSpot = function() {
    console.log("Getting current location..");
    // Get location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth();
            var day = d.getDay();
            var second = d.getSeconds();
            var minute = d.getMinutes();
            var hour = d.getHours();
            
            var dateString = "%i/%i/%i-%i:%i:%i" % (year, month, day, hour, minute, second);

            // Add to the SQL server
                // Will send an Ajax request to the server
            // Send a refresh request
                // Will send an Ajax request to the server
            // Add to the map
                // Do a select from the database
        });
    }
}

var fillList = function() {
    console.log("Doing AJAX call");
    $.ajax({
        url: '/getSpots',
        type: 'GET',
        success: function(res) {
            console.log(res);
        },
        error: function(error) {
            console.log(error);
        }
    })
};

$(document).on("click", "#leavingButton", function() {
    console.log("Adding new empty spot..");
    addSpot();
});

$(document).ready(function() {
    console.log("Running!");
    fillList();
    initMap();
});