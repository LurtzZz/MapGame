<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <link  rel="stylesheet" type="text/css" href="googleMapsStyle.css"/>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCqlzolwS5-XbKzCmqOqnRL1UiLdNYHg2k&sensor=false"></script>
    <script type="text/javascript" src="googleMapsAPI.js"></script>
  </head>
  <body>         
    <div id="panel">
        <input onclick="findResult();" type=button value="Zkontroluj typ">
        <input onclick="nextGame()" type="button" value="Nova hra">
    </div>
    <div id="map-canvas"/>
  </body>
</html>