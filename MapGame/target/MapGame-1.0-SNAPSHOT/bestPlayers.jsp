<%-- 
    Document   : bestPlayers
    Created on : 10.5.2014, 10:24:43
    Author     : Lurtz
--%>

<%@page contentType="text/html" pageEncoding="windows-1250"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1250" />
        <link href='http://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,900' rel='stylesheet' type='text/css' />
        <link  rel="stylesheet" type="text/css" href="css/style.css"/>  
        <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
        <script type="text/javascript" src="javascript/httpRequest.js"></script>
        <title>Top 99</title>
    </head>
    <body onload="javascript:getBestPlayersTable()">
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
                    <h1>Top 99 nejlepších hráčů</h1>
                    <a class="menu" href="index.jsp"> Menu </a>
                    <table id="bestTable">            
                    </table>
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