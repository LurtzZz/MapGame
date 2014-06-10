/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// vraci nahodnì vybrane mesto
function getWantedPlace(){
//     console.log("posilam ....");
//    var xhr = new XMLHttpRequest();
//
//    xhr.open("GET", "rest/place/random/", true);
//        xhr.setRequestHeader(
//            "Accept", "application/json, text/javascript, */*; q=0.01"
//            );
//    xhr.readyStateChange = function(e) {
//        if (xhr.readyState === 4) {
//            if (xhr.status === 200) {
//                renderGetPlace(xhr.data);
//                console.log(xhr.responseText);
//            } else {
//                console.error(xhr.statusText);
//            }
//        }
//    };
//    xhr.send(null);

    $.ajax({
        type: 'GET',
        url: "rest/place/random/",
        dataType: "json",
        success: function(data) {           
            renderGetPlace(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);

        }
    });
}


//rendruje JSON 
function renderGetPlace(data) {
    $('#wantedName').text(data.name);
    setDesiredTown(data.name);
}

// vraci vzdalenost mezi hledanym a tipnutym mestem
function getDistance(wanted, predict){
    $.ajax({
        type: 'PUT',
        contentType: 'application/json',
        url: "rest/distance/",
        dataType: "json",
        data: formToJSONDistance(wanted, predict),
        success: function(data) {  
            alert(data.value);
            renderGetDistance(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);

        }
    });
}


// prevedeni dat do JSON
function formToJSONDistance(wanted, predict){   
    return JSON.stringify({
         "wantedTown": wanted,
         "predictTown" : predict
    });  
}

//render data
function renderGetDistance(data){
    alert(data.text);
    
}


// Prida mesto do databaze
function addPlace(place){
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: "rest/place/",
        dataType: "json",
        data: formToJSONPlace(place),
        success: function() {  
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);

        }
    });
}

// mesto to JSON
function formToJSONPlace(place){
        
    return JSON.stringify({
         "name": place.toString()
    });
    
}

// prida hrace do databaze
function addPlayer(name, score) {
    
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: "rest/player/",
        dataType: "json",
        data: formToJSONPlayer(name, score),
        success: function() {

        },
        error: function(jqXHR, textStatus, errorThrown) {
             alert(jqXHR.responseText);

        }
    });
    
}

function formToJSONPlayer(name, score){
        
    return JSON.stringify({
        "name": name,
        "score": score
    });
    
}

//vrati list nejlepsich hracu
function getBestPlayersTable(){
     $.ajax({
        type: 'GET',
        url: "rest/player/",
        dataType: "json",
        success: function(data) {
            renderListBestPlayer(data);   
        },
        error: function(jqXHR, textStatus, errorThrown) {              
            alert(jqXHR.responseText);    
        }     
    });
    
}

// prevadi data z JSON do tabulky
function renderListBestPlayer(data){
    	var list = data == null ? [] : (data instanceof Array ? data : [data]);

	$('#bestTable tr').remove();
        $('#bestTable th').remove();
        $('#bestTable td').remove();
        $('#bestTable').append("<tr><th>Pozice</th><th>Jmeno</th><th>Score</th></tr>");
	$.each(list, function(index, player) {
		$('#bestTable').append('<tr><td>' + (parseInt(index) + 1) + '.</td><td>' + player.name + '</td><td>' + player.score + '</td></tr>');
	});
    
}