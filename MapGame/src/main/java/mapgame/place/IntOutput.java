/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package mapgame.place;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Lurtz
 */

@XmlRootElement(name = "numPlaces")
public class IntOutput {
    
    int numberOfPlaces;

    public IntOutput(int numberOfPlaces) {
        this.numberOfPlaces = numberOfPlaces;
    }

    public IntOutput() {
    }

    
    @XmlElement(required = true)
    public int getNumberOfPlaces() {
        return numberOfPlaces;
    }

    public void setNumberOfPlaces(int numberOfPlaces) {
        this.numberOfPlaces = numberOfPlaces;
    }
    
    
}
