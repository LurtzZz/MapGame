/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package mapgame.distance.googleDistanceMatrix;

import java.util.List;

/**
 *
 * @author Lurtz
 */
public class DistanceInfo {
    
       
    private String status;
    private List<String> origin_addresses;
    private List<String> destination_addresses;
    private List<Rows> rows;

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setOrigin_addresses(List<String> origin_addresses) {
        this.origin_addresses = origin_addresses;
    }

    public List<String> getOrigin_addresses() {
        return origin_addresses;
    }

    public void setDestination_addresses(List<String> destination_addresses) {
        this.destination_addresses = destination_addresses;
    }

    public List<String> getDestination_addresses() {
        return destination_addresses;
    }
    

    public void setRows(List<Rows> rows) {
        this.rows = rows;
    }

    public List<Rows> getRows() {
        return rows;
    }
  
    
    class Rows{
        private List<Elements> elements;

        public void setElements(List<Elements> elements) {
            this.elements = elements;
        }

        public List<Elements> getElements() {
            return elements;
        }
        
    }
    
    class Elements{
        private Distance distance;

        public Distance getDistance() {
            return distance;
        }

        public void setDistance(Distance distance) {
            this.distance = distance;
        }
  
    }
    
    public static class Distance{
        private int value;
        private String text;

        public void setText(String text) {
            this.text = text;
        }

        public void setValue(int value) {
            this.value = value;
        }

        public String getText() {
            return text;
        }

        public int getValue() {
            return value;
        }        
    }
    
}
