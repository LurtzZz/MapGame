<%-- 
    Document   : contact
    Created on : 29.5.2014, 20:16:28
    Author     : Lurtz
--%>

<%@page contentType="text/html" pageEncoding="windows-1250"%>
<!DOCTYPE html>
<html manifest="mapgame.manifest">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1250" />
        <link href='http://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,900' rel='stylesheet' type='text/css' />
        <link  rel="stylesheet" type="text/css" href="css/style.css"/>  
        <title>Kontakt</title>
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
                    <h1>Kontakt</h1>
                    <a class="menu" href="index.jsp"> Menu </a>
                    <div class="kontakt">
                        <div>
                            <div id="jmeno">Jan Jakeš</div>                           
                            <div id="telefon">+420 123 456</div>
                            <div id="email">email@email.cz</div>
                        </div>
                        <div >
                            <h2>Napis mi</h2>
                            <form onsubmit="return ">
                                <label for="jmeno_f">Jméno</label><br/>
                                <input id="jmeno_f" type="text" placeholder="Jmeno" pattern="[a-zA-Z]{3,}" autofocus required/><br/>
                                <label for="prijmeni_f">Příjmení</label><br/>
                                <input id="prijmeni_f" type="text" placeholder="Přijmení" pattern="[a-zA-Z]{3,}" required/><br/>
                                <label for="mail_f">E-mail</label><br/>
                                <input id="mail_f" type="email" placeholder="E-mail" required/><br/>
                                <label for="vek_f">Věk</label><br/>
                                <input id="vek_f" type="number" required  name="vek" min="10" max="99" /><br/>
                                <label for="text_f">Text</label><br/>
                                <textarea id="text_f" rows="4" cols="50" ></textarea><br/>
                                <input type="submit" value="Odeslat"/>
                                
                            </form>
                        </div>
                    </div>
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