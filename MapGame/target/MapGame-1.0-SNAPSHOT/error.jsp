<%-- 
    Document   : crMapGame
    Created on : 10.5.2014, 10:23:37
    Author     : Lurtz
--%>

<%@page contentType="text/html" pageEncoding="windows-1250"%>
<!DOCTYPE html>
<html manifest="mapgame.manifest">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1250" />
        <link href='http://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,900' rel='stylesheet' type='text/css' />
        <link  rel="stylesheet" type="text/css" href="css/style.css"/>
        <!-- <link  rel="stylesheet" type="text/css" href="../Documents/GITRepository/MapGame/MapGame/src/main/webapp/css/style.css"/>   -->   
        <title>MapGame</title>
    </head>
    <body>
        <div class="wrapper">
            <!-- Hlavicka -->
            <header>
                <h1>Ostatní hry</h1>
                <nav>                   
                    <a href="index.jsp"> MapGame </a>       
                    <a href="error.jsp"> Dynamite </a>
                    <a href="error.jsp"> Sudoku </a> 
                    <a href="error.jsp"> Dyna Blaster </a> 
                    <a href="error.jsp"> Dave </a>
                </nav>
            </header>
            <!-- Telo -->
            <div id="content" >
                <div class="table_cont">
                    <h1>Na hře se pracuje</h1>
                    <a class="menu" href="index.jsp"> Menu </a>
                    <img src="pictures/znacka.svg" id="stop" alt="STOP"/>
                    <br/>
                    <p>Na hře se zatím pracuje. Ale můžete se alespoň pokusit uhodnout z jakého filmu je to znělka ... :-)</p>
                    <img src="pictures/sipka.png" id="sipka" alt="Šipka"/>
                    <br/>
                    <audio controls>
                        <source src="audio/X-Men_-_Magneto.ogg" type="audio/ogg" />
                        <source src="audio/X-Men_-_Magneto.mp3" type="audio/mpeg" />                        
                        Tvůj browser nepodporuje audio.
                    </audio>
                </div>
            </div> 
        </div>
        <!-- Paticka -->
        <footer>
            <div class="vcard">
                Created by <span class="fn">Jan Jakeš</span> | <span class="title"> JavaScript developer </span>| <span class="org"><a href="http://www.seznam.cz">Seznam.cz</a></span>          
            </div>      
        </footer>
    </body>
</html>