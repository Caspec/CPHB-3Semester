/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

import facades.HouseFacade;
import javax.persistence.Persistence;

/**
 *
 * @author KH
 */
public class HouseFacadeFactory {
    private static final IHouseFacade instance = new HouseFacade(Persistence.createEntityManagerFactory("pu_development"));
    public static IHouseFacade getInstance(){
        return instance;
    }
}
