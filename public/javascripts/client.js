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
var getLocation = function() {
    console.log("Getting current location..");
    var pos = null;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        });
    }
    return pos;
}

// Adds a new marker on the map with the user's location
var addSpot = function() {
    consolelog("Adding current location..");
    
    // 1. Get location
    var pos = getLocation();
    if (pos === null) {
        console.log("ERROR: Couldn't get user's location");
        return -1;
    }
    
    // 2. Add to the map

    // 3. Add to the SQL server

    // 4. Refresh the list

}

$(document).ready(function() {
    console.log("Running!");
    initMap();
});