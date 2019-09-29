//global variables
var myLatLng = {lat:39.2558586, lng:-76.7116755};
var markerArray = [];

// Creates the Google Map (Thanks for the code, Google!)
// source: https://developers.google.com/maps/documentation/javascript/adding-a-google-map
var initMap = function() {
    console.log("Creating initial map..");
    var umbcCoords = {lat:39.2558586, lng:-76.7116755};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: umbcCoords});
    // Create markers
    console.log("Doing AJAX call");
    $.ajax({
        url: '/getSpots',
        type: 'GET',
        success: function(res) {
            res.forEach(element => {
                console.log("Adding marker..");
                var marker = new google.maps.Marker({
                    position: {lat:element.LocationLA, lng:element.LocationLO},
                    map: map,
                    title: element.id.toString()
                });
                markerArray.push(marker);
            });
        },
        error: function(error) {
            console.log(error);
        }
    })
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
            
            var dateString = day + "/" + month + "/" + year + " - " + hour + ":" + minute + ":" + second;
            //var dateString = "%i/%i/%i-%i:%i:%i" % (year, month, day, hour, minute, second);
            console.log(pos);
            // Add to the SQL server
            $.ajax({
                url: '/addSpot',
                type: 'POST',
                async: true,
                cache: false,
                data: {
                    time: dateString,
                    lat: pos.lat,
                    long: pos.lng
                },
                success: function(res) {
                    console.log(res);
                },
                error: function(error) {
                    console.log(error);
                }
            });
            fillList();
            initMap();
        });
    } else {
        console.log("Location not found");
    }
}

var deleteSpotUser = function() {
    console.log("Deleting marker..");
}

var fillList = function() {
    // Empty the current list
    $('#spotList').empty();

    // Get the new data
    console.log("Doing AJAX call");
    var listCount = 0;
    $.ajax({
        url: '/getSpots',
        type: 'GET',
        success: function(res) {
            res.forEach(element => {
                if (listCount < 9) {
                    var listItemDiv = "<div class='spot-list-group'>"
                    listItemDiv += "<li class ='list-group-item'>(" + element.id + ") Lat: " + element.LocationLA + ", Long: " + element.LocationLO + " (" + element.Time + ")>";
                    listItemDiv += '<button type="button" class="btn btn-danger" id="deleteButton">X</button></li></div>'
                    $('#spotList').append(listItemDiv);
                    listCount++;
                }
            });
        },
        error: function(error) {
            console.log(error);
        }
    })    
};

var refreshMap = function() {
    console.log("Doing AJAX call");
    markerArray = []; // Clean markers
    $.ajax({
        url: '/getSpots',
        type: 'GET',
        success: function(res) {
            res.forEach(element => {
                console.log("Adding marker..");
                var marker = new google.maps.Marker({
                    position: {lat:element.LocationLA, lng:element.LocationLO},
                    map: map,
                    title: element.id.toString()
                });
                markerArray.push(marker);
            });
        },
        error: function(error) {
            console.log(error);
        }
    })
};

$(document).on("click", "#deleteButton", function() {
    // Get the parent data
    var rowData = $(this).parent().text();
    rowData = rowData.substring(1, rowData.indexOf(")"));
    // Delete from the list
    $(this).parent().remove();
    // Do SQL call to remove from database too
    $.ajax({
        url: '/removeSpot',
        type: 'POST',
        async: true,
        cache: false,
        data: {id: rowData},
        success: function(res) {
            console.log(res);
        },
        error: function(error) {
            console.log(error);
        }
    })
    // Delete marker
    console.log("Deleting marker");
    var index = 0;
    markerArray.forEach(element => {
        if (element.title == rowData) {
            console.log("Found");
            markerArray[index].setMap(null);
            markerArray.splice(index, 1);
        }
        index++;
    });
});

$(document).on("click", "#leavingButton", function() {
    console.log("Adding new empty spot..");
    addSpot();
});

$(document).ready(function() {
    console.log("Running!");
    fillList();
    initMap();
});