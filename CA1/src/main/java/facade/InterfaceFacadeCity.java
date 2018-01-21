/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import entity.CityInfo;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author auron
 */
public interface InterfaceFacadeCity {
    
    public void addEntityManagerFactory(EntityManagerFactory emf);
    public EntityManager getEntityManager();
    public void addCityInfo(CityInfo c);
    public CityInfo getCityInfo(int id); 
    public List<CityInfo> getCityInfos();
}
