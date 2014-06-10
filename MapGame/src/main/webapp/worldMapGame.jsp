<%@page contentType="text/html" pageEncoding="windows-1250"%>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1250" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <link  rel="stylesheet" type="text/css" href="css/googleMapsStyle.css"/>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCqlzolwS5-XbKzCmqOqnRL1UiLdNYHg2k&sensor=false&libraries=geometry"></script>
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="javascript/googleMapsAPI.js"></script>
    <script type="text/javascript" src="javascript/httpRequest.js"></script>
    <title>MapGame</title>
  </head>
  <body>         
      <div id="panel">
          <table>
              <tr>
                  <td>Hledané misto: </td>
                  <td id="wantedName"></td>
                  <td><input id="checkPlace" onclick="findResult();" type=button value="Zkontroluj tip"></td>
                  <td><input onclick="newGame()" type="button" value="Nova hra"></td> 
                  <td><input onclick="location.href='index.jsp'" type="button" value="Menu"></td>               
              </tr>
              <tr>
                  <td id="predictPlace"></td>
                  <td id="predictPlaceName"></td>
                  <td id="valueMiskate" colspan="3"></td>
              </tr>
          </table>        
      </div>
      <div id="map-canvas"></div>
  </body>
</html>