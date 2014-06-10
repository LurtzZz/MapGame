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
@XmlRootElement(name = "place")
public class PlaceOutput extends Place{

    
    public PlaceOutput() {
    }

    public PlaceOutput(String name) {
        super(name);
    }

    @XmlElement(required = true)
    @Override
    public String getName() {
        return super.getName(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setName(String name) {
        super.setName(name); //To change body of generated methods, choose Tools | Templates.
    }
    
    
    
    
}
