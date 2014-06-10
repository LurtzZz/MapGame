/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



// Apouzití hitory API, Offline API, Geolocation  
function initIndex(){
    var game = document.getElementById("game");
    game.addEventListener("click", addToHistory("index.jsp"), false);   
    var best = document.getElementById("best");
    best.addEventListener("click", addToHistory("index.jsp"), false);   
    var geo = document.getElementById("geo");
    geo.addEventListener("click", addToHistory("index.jsp"), false); 
    var help = document.getElementById("help");
    help.addEventListener("click", addToHistory("index.jsp"), false);   
    var con = document.getElementById("con");
    con.addEventListener("click", addToHistory("index.jsp"), false);   
    
    window.addEventListener('offline', updateOnlineStatus());  
    window.addEventListener('online', updateOnlineStatus());
    
}

// nastavi hodnotu span v paticce online/offline podle toho zda je hrac online/offline
  function updateOnlineStatus() {
    var online = document.getElementById("online");

    
    var rodic = function(){};
    var potomek = function(){};
    rodic.prototype.condiction = function(){ return navigator.onLine ? "online" : "offline"; };
    potomek.prototype = new rodic();
      
    var print = new potomek();  
      
    online.className = print.condiction();
    online.innerHTML = print.condiction();
    
  }

function addToHistory(link){
      history.pushState("index", 'uvodni strana', link);

}