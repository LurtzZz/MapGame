/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 /* 
    Created on : 6.4.2014, 16:32:24
    Author     : Lurtz
 */

var map;            //nastaveni mapy
var geocoder;       // hodnota vydalenosti meyi mesty
var marker = null;  // hracuv marker
var markerDesiredTown = null; // marker hledaneho mesta
var desiredTown = ["", ""]; //  hledane mesto
var markedTown = ["", ""];  // hracovo mesto
var line = null;    // spojnice mezi mesty
var totalDistance;  // score ve hre
var round;      

var markerListener;


//inicializace: nastaveni hledaneho mesta, pocet kol, vynulovani vsech promennych , nastaveni mapy
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
    
    round = 4;
    totalDistance = 0;
    deletePlayerType();
    getWantedPlace();
    document.getElementById("valueMiskate").innerHTML = "Celkova chyba: " +Math.round(totalDistance) + " m";
}

google.maps.event.addDomListener(window, 'load', initialize);



// funkce nastaví hledane mesto a zjisti jeho souradnice
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


// prida marker na mapu, pokud jiz marker na mape je, zmeni jeho pozici
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



// funkce vyhodnocující zda jsou oba markery nastavene, pokud ano pokusi se najít správný v?sledek
function findResult(){
    if(!marker){
        alert("Neni zadany bod na mape.");        
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
                alert('Geocoder skoncil s chyou: ' + "Zadne vybrane misto.");
            }
        });
    }
    
}



// porovna hledane mesto s mestem ktere oznacil uzivatel
function compareTown(){
    if(typeof markedTown[0] === "undefined"){
        alert("Nebylo zvoleno mesto.");        
    }
    else{
        if(markedTown[0] === desiredTown[0]){
            alert("Trefil ses!");
            
            playAudio();
   
            marker.setAnimation(google.maps.Animation.BOUNCE);
            marker.setDraggable(false);
            google.maps.event.removeListener(markerListener);
            changeButtonToNextGame();          
        }
        else{
            addPlace(markedTown[0]);
            var distance= google.maps.geometry.spherical.computeDistanceBetween(markedTown[1], desiredTown[1]);
            alert("Netrefil ses. Chyba: " + Math.round(distance) + " m");
            totalDistance = totalDistance + distance;
            document.getElementById("valueMiskate").innerHTML =  "Celkova chyba: " +Math.round(totalDistance) + " m";
            var markerNew = new google.maps.Marker({
                position: desiredTown[1],
                map: map,
                title: "Hledane mesto",
                draggable: false,
                animation: google.maps.Animation.DROP
            });
            markerDesiredTown = markerNew;
            marker.setDraggable(false);
            google.maps.event.removeListener(markerListener);
            var locations = [marker.getPosition(), markerDesiredTown.getPosition() ];
            line = setLine(locations);
            map.setCenter(markerDesiredTown.getPosition());

            setPlayerType(markedTown[0]);
            changeButtonToNextGame();
        }
    }
}


//funkce zahraje audio 
function playAudio() {
    var lucky = new Audio();
    lucky.canPlayType("audio/ogg"); /* "", "maybe", "probably" */
    lucky.src = "audio/DarkRangerYesAttack3.ogg";
    lucky.addEventListener("timeupdate", function() {
        if (lucky.duration < lucky.currentTime) {
            lucky.pause();
        } else {
            console.log(lucky.currentTime);
        }
    }, false);
    lucky.play();   
}


// funkce zobrazi tlacitko Dalsi kolo
function changeButtonToNextGame(){
    document.getElementById( "checkPlace" ).setAttribute( "onClick", "javascript: nextGame();" );
    document.getElementById( "checkPlace" ).setAttribute( "value", "Dalsi kolo" );  
}


//funkce zobrazi tlacitko Zkontroluj tip
function changeButtonToFindResult(){
    document.getElementById( "checkPlace" ).setAttribute( "onClick", "javascript: findResult();" );
    document.getElementById( "checkPlace" ).setAttribute( "value", "Zkontroluj tip" );    
}

//funkce nastací cervenou linku mezi mesty
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

// nastavi informace o vybranem meste do pole
function setMarkedTown(name, location){
    markedTown = [name, location];
}

//inicializace dalsího kola
function nextGame(){
    deletePlayerType();
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
    
    
    
    if(round <= 0){      
        popupWindow();
    }
    else{
        round = round - 1;
        getWantedPlace();
        changeButtonToFindResult();
    }
}

// inicializace nove hry 
function newGame(){
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
    changeButtonToFindResult();
    initialize();
}

//vypise mesto ktere si hrac tipnul
function setPlayerType(place){
    document.getElementById("predictPlace").innerHTML = "Tvuj tip:";
    document.getElementById("predictPlaceName").innerHTML = place;
}

// vymaze informaci o meste ktere si hrac tipnul
function deletePlayerType(){
    document.getElementById("predictPlace").innerHTML = "";
    document.getElementById("predictPlaceName").innerHTML = "";
}

//funkce vytvorí alert pro zadani hracova jmena. Pokud jmeno nevyplni nic se neodesle
function popupWindow() {
    var text = "Konec hry! Celkova chyba: " + Math.round(totalDistance) + "\n" +  "Nechce odelat skore ? Zadej svou prezdivku:";
    var person = prompt( text,"");
    if (person !== "") {       
        addPlayerToBest(person, totalDistance);
        newGame();
    }
    else{
        newGame();
    }
}

// prida hrace do tabulky nejlepsich hracu
function addPlayerToBest(player, score){  
    addPlayer(player, score);
}