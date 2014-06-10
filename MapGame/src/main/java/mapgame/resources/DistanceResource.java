/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package mapgame.resources;



import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import mapgame.distance.DistanceInput;
import mapgame.distance.DistanceOutput;
import mapgame.distance.googleDistanceMatrix.DistanceClientGoogle;
import mapgame.distance.googleDistanceMatrix.DistanceInfo.Distance;
import mapgame.gameDB.GameDB;



/**
 * 
 * REST Web Service Resource pro zísaní vzdáleností meezi mìsty
 *
 * @author Lurtz
 */

@Path("/distance")
@Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
public class DistanceResource {
    
    
    
    @GET
    @Path("/")
    public Response test() {	
        return Response.status(Response.Status.OK).build();
    }
    
    
    @PUT
    @Path("/")
    public DistanceOutput calculateDistance(DistanceInput distanceIn){
        GameDB.addPlace(distanceIn.getPredictTown());
        DistanceClientGoogle dcg = new DistanceClientGoogle();
        Distance di = dcg.getDistance(distanceIn.getPredictTown(), distanceIn.getWantedTown());       
        return new DistanceOutput(distanceIn.getWantedTown(), distanceIn.getPredictTown(),  di);
    }
       
    
}
