/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package mapgame.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import mapgame.gameDB.GameDB;
import mapgame.place.IntOutput;
import mapgame.place.PlaceInput;
import mapgame.place.PlaceOutput;

/**
 *
 * @author Lurtz
 */
@Path("/place")
@Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
public class PlaceResource {
    
        
    @GET
    @Path("/random/")
    public PlaceOutput getPlace() {
        String place = GameDB.getRandomPlace();
        return new PlaceOutput(place);
    }
    
    @POST
    @Path("/")
    public Response addPlace(PlaceInput place){
        GameDB.addPlace(place.getName());
        return Response.status(Response.Status.NO_CONTENT).build();
    }
    
    @GET
    @Path("/number/")
    public IntOutput getNumberOfPlaces() {
        int number = GameDB.getNumberOfPlacesInDB();
        return new IntOutput(number);
    }
}
