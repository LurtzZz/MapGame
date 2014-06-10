/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package mapgame.distance;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import mapgame.distance.googleDistanceMatrix.DistanceInfo.Distance;

/**
 *
 * @author Lurtz
 */
@XmlRootElement(name = "distance")
public class DistanceOutput {
    
    private String wantedTown;
    private String predictTown;
    private String text;
    private int value;

    public DistanceOutput() {
    }
  
    
    public DistanceOutput(String wantedTown, String predictTown, Distance distance) {
        this.wantedTown = wantedTown;
        this.predictTown = predictTown;
        this.text = distance.getText();
        this.value = distance.getValue();
    }

    public void setPredictTown(String predictTown) {
        this.predictTown = predictTown;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public void setWantedTown(String wantedTown) {
        this.wantedTown = wantedTown;
    }

    @XmlElement(required = true)
    public String getPredictTown() {
        return predictTown;
    }

    @XmlElement(required = true)
    public String getWantedTown() {
        return wantedTown;
    }
    
        
    @XmlElement(required = true)
    public String getText() {
        return text;
    }

    @XmlElement(required = true)
    public int getValue() {
        return value;
    }


    
    
    
}
