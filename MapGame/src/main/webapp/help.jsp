<%-- 
    Document   : help
    Created on : 10.5.2014, 10:24:59
    Author     : Lurtz
--%>

<%@page contentType="text/html" pageEncoding="windows-1250"%>
<!DOCTYPE html>
<html manifest="mapgame.manifest">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1250" />
        <link href='http://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,900' rel='stylesheet' type='text/css' />
        <link  rel="stylesheet" type="text/css" href="css/style.css"/>  
        <title>Help</title>
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
                <div class="help_cont">
                    <h1>Nápověda</h1>
                    <a class="menu" href="index.jsp"> Menu </a>
                    <article>
                        <h2>Pravidla hry</h2>
                        <p class="help_p">
                            Úkolem hráče je nalézt na slepé mapě světa 5 měst. Hráči je tedy v každém kole vybráno město z databáze. 
                            Hráč kliknutím na některé město na mapě vytvoří bod, který muže myší posouvat. 
                            Až si myslí, že vybral správné město, klikne na tlačítko <b>Zkontroluj tip</b> a hra mu zkontroluje jeho tip. 
                            V případě chyby se hráči ukáže, kde hledané město skutečně leží. 
                            Pokud hráč netrefí správné město, vypočítá se, kolik kilometrů jsou města vzdálena a výsledek uloží jako skóre hráče. 
                            Nejlepší hráč je ten, který má nejmenší skóre, tudíž nejmenší chybně odhadnutou vzdálenost.                       
                        </p>
                        <p class="help_p">
                            Po odehrání 5 kol se hráči nabídne, aby vyplnil svoje jméno do tabulky nejlepších hráčů.  
                        </p> 

                        <img src="pictures/mapa.png" alt="Mapa ukázka"/>
                        <h2>Slepá mapa</h2>
                        <p class="help_p">Jedná se o mapu, kde nejsou vypsány názvy měst.</p>
                    </article>
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