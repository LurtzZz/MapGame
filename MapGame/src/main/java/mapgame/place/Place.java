/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package mapgame.place;

/**
 *
 * @author Lurtz
 */
public abstract class Place {
    
    String name;

    public Place(String name) {
        this.name = name;
    }

    public Place() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    
    
}
