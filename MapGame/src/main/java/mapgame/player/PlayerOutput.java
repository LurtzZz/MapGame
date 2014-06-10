/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package mapgame.player;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Lurtz
 */
@XmlRootElement(name = "player")
public class PlayerOutput extends Player{

    
    public PlayerOutput() {
    }
    
    public PlayerOutput(PlayerEntity p){
        super(p.getName(), p.getScore());
    }
    
    @XmlElement(required = true)
    @Override
    public String getName() {
        return super.getName(); //To change body of generated methods, choose Tools | Templates.
    }

    @XmlElement(required = true)
    @Override
    public int getScore() {
        return super.getScore(); //To change body of generated methods, choose Tools | Templates.
    }
      
}
