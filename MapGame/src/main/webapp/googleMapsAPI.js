/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 /* 
    Created on : 6.4.2014, 16:32:24
    Author     : Lurtz
 */

var map;
var geocoder;
var marker = null;
var markerDesiredTown = null;
var townName = "Prostìjov";
var desiredTown = ["", ""];
var markedTown = ["", ""];
var line = null;

var markerListener;

function initialize() {     // inicializace mapy
    geocoder = new google.maps.Geocoder();

    var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng( 31.644028, -10.898437),
        streetViewControl: false,
        zoomControl: true,
        panControl: false,
        overviewMapControl: false
    };       
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);   // nastaveni mapy 

    var stylesMap = [
        {
            featureType: "administrative",
            elementType: "labels",
            stylers: [
                {Visibility: "off"}
            ]
        }
    ];
    map.setOptions({styles: stylesMap});  // nastaveni vyhledu mapy 


    markerListener = google.maps.event.addListener(map, 'click', function(event) { // pridani posluchace na pridani Markeru
        addMarker(event.latLng);
    });

    setDesiredTown(townName);
}

google.maps.event.addDomListener(window, 'load', initialize);

function setDesiredTown(name) {
        geocoder.geocode({'address': name}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            desiredTown[1] = results[0].geometry.location;
            geocoder.geocode({'latLng': desiredTown[1]}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var components = results[0].address_components;
                    for (var component = 0; component < (components.length); component++) {
                        if (components[component].types[0] == "locality") {
                            desiredTown[0] = components[component].long_name;
                        }
                    }
                }
                else {
                    alert('Geocoder skoncil s chyou: ' + status);
                }
            });
            
        } else {
            alert('Geocode nedopadl spravne, chyba: ' + status);
        }
    });


}

//vrati nahodne souradnice
function randomCoordinates (){
    var randomLat = (Math.random()* 50);    // random cislo 0 nebo 60
    var randomLng = (Math.random()* 170);   // random cislo 0 nebo 170
    var randomDirectionLat = Math.floor((Math.random()* 2)+1);      // random cislo 1 nebo 2
    var randomDirectionLng = Math.floor((Math.random()* 2)+1);      // random cislo 1 nebo 2
    if(randomDirectionLat === 2){
        randomLat = randomLat * -1;
    }
    if(randomDirectionLng === 2){
        randomLng = randomLng * -1;
    }
    return new google.maps.LatLng(randomLat, randomLng);
}


// pridej marker
function addMarker(location) {
    if (!marker) {
        var markerNew = new google.maps.Marker({
            position: location,
            map: map,
            title: "Muj typ",
            draggable:true,
            animation: google.maps.Animation.DROP
        });
        marker = markerNew;
    }
    else{
        marker.setPosition(location);  
    }
}



//najde spravne reseni
function findResult(){
    if(!marker){
        alert("Není zadaný bod na mapé.");        
    }
    else if(marker && markerDesiredTown){
             
    }
    else {
        var location = marker.getPosition();
        geocoder.geocode({'latLng': location}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var components = results[0].address_components;
                    for (var component = 0; component < (components.length); component++) {
                        if (components[component].types[0] == "locality") {
                            var cityName = components[component].long_name;                            
                        }
                    }     
                }
                setMarkedTown(cityName, location);
                compareTown();
            }
            else {
                alert('Geocoder skoncil s chyou: ' + status);
            }
        });
    }
    
}

function compareTown(){
    if(typeof markedTown[0] === "undefined"){
        alert("Nebylo zvoleno mìsto.");        
    }
    else{
        if(markedTown[0] === desiredTown[0]){
            alert("Trefil ses. Pøesnost 100%");
            marker.setAnimation(google.maps.Animation.BOUNCE);
            marker.setDraggable(false);
            google.maps.event.removeListener(markerListener);
        }
        else{
            alert("Netrefil ses. Pøesnost //vypocet//");

            var markerNew = new google.maps.Marker({
                position: desiredTown[1],
                map: map,
                title: "Hledané mìsto",
                draggable: false,
                animation: google.maps.Animation.DROP
            });
            markerDesiredTown = markerNew;
            marker.setDraggable(false);
            google.maps.event.removeListener(markerListener);
            var locations = [marker.getPosition(), markerDesiredTown.getPosition() ];
            line = setLine(locations)
        }
    }
}

function setLine(locations){
    var line = new google.maps.Polyline({
    path: locations,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  line.setMap(map); 
  return line;
}


function setMarkedTown(name, location){
    markedTown = [name, location];
}


function nextGame(){
    markerListener = google.maps.event.addListener(map, 'click', function(event) { // pridani posluchace na pridani Markeru
        addMarker(event.latLng);
    });
    if(line){
        line.setMap(null);
    }
    if(marker){
        marker.setMap(null);
    }
    if(markerDesiredTown){
        markerDesiredTown.setMap(null);
    }       
    marker = null;
    markerDesiredTown = null;
}




