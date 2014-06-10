/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package mapgame.distance.googleDistanceMatrix;

import com.google.gson.Gson;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import mapgame.distance.googleDistanceMatrix.DistanceInfo.Distance;


/**
 *
 * @author Lurtz
 */
public class DistanceClientGoogle {        
    public static final String RESOURCE_URL = "http://maps.googleapis.com/maps/api/distancematrix/json";
    
    private Client client;
    private Gson gson;

    public DistanceClientGoogle() {               
        client = Client.create();
        gson = new Gson();
    }
    
      
    public Distance getDistance(String origin, String destination) {
        WebResource webResource = client
                .resource(RESOURCE_URL)
                .queryParam("origins", origin)
                .queryParam("destinations", destination)
                .queryParam("sensor", "false");
                
        ClientResponse response = webResource.accept("application/json")
                .get(ClientResponse.class);
                 
        if (response.getStatus() != 200) {
            throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
        }
        String output = response.getEntity(String.class);
        DistanceInfo fromJson = gson.fromJson(output, DistanceInfo.class);
           
        
        Distance distance = fromJson.getRows().get(0).getElements().get(0).getDistance();
        return distance;
    }
    
    
    public static void main(String[] args)  {
        new DistanceClientGoogle().getDistance("Praha", "Prostì›jov");
    }
    
    
}
