package mapgame.distance;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Lurtz
 */
public class DistanceInput {
    
    private String wantedTown;
    private String predictTown;

    public DistanceInput(String wantedTown, String predictTown) {
        this.wantedTown = wantedTown;
        this.predictTown = predictTown;
    }

    public DistanceInput() {
    }

    public String getPredictTown() {
        return predictTown;
    }

    public String getWantedTown() {
        return wantedTown;
    }

    public void setPredictTown(String predictTown) {
        this.predictTown = predictTown;
    }

    public void setWantedTown(String wantedTown) {
        this.wantedTown = wantedTown;
    }

}
