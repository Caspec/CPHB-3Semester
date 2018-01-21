/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import entity.Address;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author auron
 */
public class FacadeAddress implements InterfaceFacadeAddress {

    EntityManagerFactory emf;

    public FacadeAddress() {
    }
    
    public void addEntityManagerFactory(EntityManagerFactory emf)
    {
        this.emf = emf;
    }

    @Override
    public EntityManager getEntityManager() {
       return emf.createEntityManager();
    }
    

    @Override
    public Address getAddress(int id) {
        EntityManager em = emf.createEntityManager();
        
        try
        {
            Address a = em.find(Address.class, id);
            return em.find(Address.class, id);    
        }
        finally
        {
            em.close();
}
    }

    @Override
    public List<Address> getAddress() {
         EntityManager em = emf.createEntityManager();
         
         try
        {
            return em.createQuery("SELECT a FROM Address p").getResultList();
        }
        finally
        {
            em.close();

        }
    }

    @Override
    public void addAddress(Address a) {
         EntityManager em = emf.createEntityManager();
        
        try
        {
            em.getTransaction().begin();
            em.persist(a);
            em.getTransaction().commit();
        }
        finally
        {
            em.close();
        }
    }
    
}
