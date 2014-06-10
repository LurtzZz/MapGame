<%-- 
    Document   : index
    Created on : 4.5.2014, 17:42:01
    Author     : Lurtz
--%>

<%@page contentType="text/html" pageEncoding="windows-1250"%>
<!DOCTYPE html>
<html manifest="mapgame.manifest">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1250" />
        <link href='http://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,900' rel='stylesheet' type='text/css' />
        <link  rel="stylesheet" type="text/css" href="css/style.css"/>
        <script type="text/javascript" src="javascript/history.js"></script>
        <title>MapGame</title>
    </head>
    <body onload="initIndex()" >
        <div class="wrapper">
            <!-- Hlavicka -->
            <header>
                <h1>Ostatní hry</h1>
                <nav>                   
                    <a class="m_e" href="index.jsp"> MapGame </a>       
                    <a class="m_e" href="error.jsp"> Dynamite </a>
                    <a class="m_e" href="error.jsp"> Sudoku </a> 
                    <a class="m_e" href="error.jsp"> Dyna Blaster </a> 
                    <a class="m_e" href="error.jsp"> Dave </a>
                </nav>
            </header>
            <!-- Telo -->
            <div id="content" >
                <div class="menu_cont">          
                    <h1>MapGame</h1>
                    <a id="game" class="menu" href="worldMapGame.jsp"> Hra </a>    
                    <a id="geo" class="menu" href="geolocation.jsp">Moje pozice</a>
                    <a id="best" class="menu" href="bestPlayers.jsp"> Nejlepší hráči </a>
                    <a id="help" class="menu" href="help.jsp"> Nápověda </a>
                    <a id="con" class="menu" href="contact.jsp"> Kontakt </a>  
                </div>

            </div> 
        </div>
        <!-- Paticka -->
        <footer>
            <div class="vcard">
                Created by <span class="fn">Jan Jakeš</span> | <span class="title"> JavaScript developer </span>| <span class="org"><a href="http://www.seznam.cz">Seznam.cz</a></span> | <span id="online"></span>        
            </div>
        </footer>


    </body>
</html>
