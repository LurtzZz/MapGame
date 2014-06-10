/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package mapgame.gameDB;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;import java.util.List;
;
import mapgame.player.PlayerEntity;
import org.omg.CORBA.ORB;

/**
 *
 * @author Lurtz
 */
public class GameDB {
    
    private static PlayerEntity [] playerDB = new PlayerEntity[100];
    private static int playersInDB;
    
    
    public static boolean addPlayer(PlayerEntity player){
        if(playersInDB < playerDB.length){          
            playerDB[playersInDB] = player;
            Arrays.sort(playerDB, new Comparator<PlayerEntity>() {

                public int compare(PlayerEntity o1, PlayerEntity o2) {
                    if(o1 == null){
                        return 1;
                    }
                    if(o2 == null){
                        return -1;
                    }
                    return o1.getScore() - o2.getScore();
                }
            });
            playersInDB = playersInDB + 1;
            return true;
        }
        else {
            if (playerDB[playerDB.length - 1].getScore() > player.getScore()) {
                playerDB[playerDB.length - 1] = player;
                Arrays.sort(playerDB, new Comparator<PlayerEntity>() {

                    public int compare(PlayerEntity o1, PlayerEntity o2) {
                        return o1.getScore() - o2.getScore();
                    }
                });
                return true;
            }
            return false;
        }
    }
    
    public static PlayerEntity[] getBestPlayers(){
        return playerDB;
    }
       
    public static void printAllPlayers(){
        for (int i = 0; i < playerDB.length; i++) {
            PlayerEntity playerEntity = playerDB[i];
            if(playerEntity == null){
                System.out.println("Player: " + "NULL" + " \t Score: " + "NULL" );
            }
            else{
                System.out.println("Player: " + playerEntity.getName() + " \t Score: " + playerEntity.getScore());
            }    
        }
    }
    
    public static PlayerEntity getPlayer(int position){
        PlayerEntity p;
        if(position < 0 || position >= getLength()){
             p = playerDB[0];
        }
        else {
             p = playerDB[position];
        }
        if(p == null){
            return new PlayerEntity("COMPUTER", 2000000000);
        }
        return p;
    }
    
    public static int getLength(){
        return playerDB.length;
    }
        
    public static void main(String[] args)  {
        for (int i = 0; i < 1000; i++) {
            System.out.println("" + getRandomPlace());
        }
                      
//
        addPlayer(new PlayerEntity("Helka", 100));
        addPlayer(new PlayerEntity("Ahoj", 1001));
        addPlayer(new PlayerEntity("Verca", 1));
        addPlayer(new PlayerEntity("Monca", 102230));
        for (int i = 0; i < 100; i++) {
            addPlayer(new PlayerEntity("Honza" + i, i));
        }
        addPlayer(new PlayerEntity("Jirka", -50000));
        printAllPlayers();
    }
    
    
    
    // townDB
    private static List<String> placeDB = new ArrayList();
    private static int numberOfPlaces;
    private static int min = 0;        
            
            
    private static void init(){
        placeDB.add("Praha");
        placeDB.add("Washington");
        placeDB.add("Indianapolis");
        placeDB.add("Moskva");
        placeDB.add("Minsk");
        placeDB.add("Harare");
        placeDB.add("Rosario");
        placeDB.add("Brno");
        placeDB.add("Serrekunda");
        numberOfPlaces = placeDB.size();
    }
    
    
    public static String getRandomPlace(){
        if(placeDB.isEmpty()){
            init();     
        }    
        int randomPlace = min + (int)(Math.random() * ((numberOfPlaces - 1 - min ) + 1));
        String place = placeDB.get(randomPlace);
        return place;
    }
    
    
    public static void addPlace(String place){
        if(!placeDB.contains(place)){
            placeDB.add(place);
            numberOfPlaces = numberOfPlaces + 1;
        } 
    }
    
    
    public static int getNumberOfPlacesInDB(){
        return numberOfPlaces;
    }
    
}

