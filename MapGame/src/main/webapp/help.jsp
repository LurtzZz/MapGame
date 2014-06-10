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
                <h1>Ostatn� hry</h1>
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
                    <h1>N�pov�da</h1>
                    <a class="menu" href="index.jsp"> Menu </a>
                    <article>
                        <h2>Pravidla hry</h2>
                        <p class="help_p">
                            �kolem hr��e je nal�zt na slep� map� sv�ta 5 m�st. Hr��i je tedy v ka�d�m kole vybr�no m�sto z datab�ze. 
                            Hr�� kliknut�m na n�kter� m�sto na map� vytvo�� bod, kter� mu�e my�� posouvat. 
                            A� si mysl�, �e vybral spr�vn� m�sto, klikne na tla��tko <b>Zkontroluj tip</b> a hra mu zkontroluje jeho tip. 
                            V p��pad� chyby se hr��i uk�e, kde hledan� m�sto skute�n� le��. 
                            Pokud hr�� netref� spr�vn� m�sto, vypo��t� se, kolik kilometr� jsou m�sta vzd�lena a v�sledek ulo�� jako sk�re hr��e. 
                            Nejlep�� hr�� je ten, kter� m� nejmen�� sk�re, tud� nejmen�� chybn� odhadnutou vzd�lenost.                       
                        </p>
                        <p class="help_p">
                            Po odehr�n� 5 kol se hr��i nab�dne, aby vyplnil svoje jm�no do tabulky nejlep��ch hr���.  
                        </p> 

                        <img src="pictures/mapa.png" alt="Mapa uk�zka"/>
                        <h2>Slep� mapa</h2>
                        <p class="help_p">Jedn� se o mapu, kde nejsou vyps�ny n�zvy m�st.</p>
                    </article>
                </div>
            </div> 
        </div>
        <!-- Paticka -->
        <footer>
            <div class="vcard">
                Created by <span class="fn">Jan Jake�</span> | <span class="title"> JavaScript developer </span>| <span class="org"><a href="http://www.seznam.cz">Seznam.cz</a></span>          
            </div>     
        </footer>
    </body>
</html>