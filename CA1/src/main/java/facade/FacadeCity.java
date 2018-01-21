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
public class FacadeCity implements InterfaceFacadeCity {
    
    EntityManagerFactory emf;

    public FacadeCity() {
    }
    
    @Override
    public void addEntityManagerFactory(EntityManagerFactory emf) {
      this.emf = emf;
        
    }

     @Override
    public EntityManager getEntityManager() {
       return emf.createEntityManager();
    }

    
    @Override
    public CityInfo getCityInfo(int id) {
       EntityManager em = emf.createEntityManager();
       
       try
       {
           CityInfo c = em.find(CityInfo.class, id);
           return em.find(CityInfo.class, id);
       }
       finally
       {
           em.close();
       }
    }

    @Override
    public List<CityInfo> getCityInfos() {
        EntityManager em = emf.createEntityManager();
        
        try
        {
            return em.createQuery("SELECT c FROM CityInfo c").getResultList();
        }
        finally
        {
            em.close();
        }
    }

    @Override
    public void addCityInfo(CityInfo c) {
        EntityManager em = emf.createEntityManager();
        
        try
        {
            em.getTransaction().begin();
            em.persist(c);
            em.getTransaction().commit();
        }
        finally
        {
            em.close();
        }
    }
    
}
