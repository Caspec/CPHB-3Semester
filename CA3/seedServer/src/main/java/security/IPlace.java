/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

import entity.House;
import java.util.List;

/**
 *
 * @author KH
 */
public interface IPlace {
    Long getId();
    String getName();
    String getAddress();
    String getLontitude();
    String getLatitude();
    String getDescription();
    int getRating();
    String getImageUrl();
    List<House> getHouse();
    
    
       
    /*
    Address (city, zip, street) (just keep in one Class/Table, no need to normalize)
Gps-location (make it nullable, only meant for uploads via an App)
A description of the place and why it´s amazing.
A rating on the experience from 1-5.
A uri to an image

    */
}
