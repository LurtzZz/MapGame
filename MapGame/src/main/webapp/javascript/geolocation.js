/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var map;

function initialize() {
    var init = {
        zoom: 18
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), init);


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var info = new google.maps.InfoWindow({
                map: map,
                position: pos,
                content: 'Tvoje pozice.'
            });

            map.setCenter(pos);
        }, function() {
            errGeolocation(true);
        });
    } else {
        errGeolocation(false);
    }
}

function errGeolocation(error) {
    if (error) {
        var content = 'Error: Geolokaci se nepodaøilo zjistit.';
    } else {
        var content = 'Error: Tvùj browser nepodporuje Geolokaci.';
    }
    alert(content);
}

google.maps.event.addDomListener(window, 'load', initialize);
