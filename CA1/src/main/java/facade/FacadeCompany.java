/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import entity.Company;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author auron
 */
public class FacadeCompany implements InterfaceFacadeCompany {
    
    EntityManagerFactory emf;

    public FacadeCompany() {
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
    public Company getCompany(int id) {
        EntityManager em = emf.createEntityManager();
        
        try
        {
            Company c = em.find(Company.class, id);
            return em.find(Company.class, id);
        }
        finally
        {
            em.close();
        }
    }
    
    @Override
    public Company getCompanyByCvr(int cvr) {
        EntityManager em = emf.createEntityManager();
        
        try
        {
            Company c = em.find(Company.class, cvr);
            return  em.find(Company.class, cvr);
        }
        finally
        {
            em.close();
        }
    }

    @Override
    public List<Company> getCompanys() {
        EntityManager em = emf.createEntityManager();
        
        try
        {
            return em.createQuery("SELECT c FROM Company c").getResultList();
        }
        finally
        {
            em.close();
        }
    }

    @Override
    public void addCompany(Company c) {
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
