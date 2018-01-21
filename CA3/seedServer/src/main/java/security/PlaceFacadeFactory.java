/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

import facades.PlaceFacade;
import javax.persistence.Persistence;

/**
 *
 * @author KH
 */
public class PlaceFacadeFactory {
    private static final IPlaceFacade instance = new PlaceFacade(Persistence.createEntityManagerFactory("pu_development"));
    public static IPlaceFacade getInstance(){
        return instance;
    }
}
