/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mapgame.resources;

import java.util.ArrayList;
import java.util.Collection;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import mapgame.gameDB.GameDB;
import mapgame.player.PlayerEntity;
import mapgame.player.PlayerInput;
import mapgame.player.PlayerOutput;

/**
 *
 * @author Lurtz
 */
@Path("/player")
@Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
public class PlayerResource {

    @GET
    @Path("/")
    public Collection<PlayerOutput> getBestPlayers() {
        Collection<PlayerOutput> bestPlayers = new ArrayList<PlayerOutput>();
        PlayerEntity[] bestPlayerEntitys = GameDB.getBestPlayers();
        for (int i = 0; i < GameDB.getLength() - 1; i++) {
            bestPlayers.add(new PlayerOutput(GameDB.getPlayer(i)));
        }
        return bestPlayers;
    }

    
    @POST
    @Path("/")
    public Response addPlayer(PlayerInput playerIn){
        GameDB.addPlayer(new PlayerEntity(playerIn.getName(), playerIn.getScore()));
        return Response.status(Response.Status.NO_CONTENT).build(); 
    }
    
    
    @PUT
    @Path("/")
    public Collection<PlayerOutput> editBestPlayer(PlayerInput playerIn) {
        GameDB.addPlayer(new PlayerEntity(playerIn.getName(), playerIn.getScore()));
        Collection<PlayerOutput> bestPlayers = new ArrayList<PlayerOutput>();
        for (int i = 0; i < GameDB.getLength() - 1; i++) {
            bestPlayers.add(new PlayerOutput(GameDB.getPlayer(i)));
        }
        return bestPlayers;
    }

}
