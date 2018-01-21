
package facade;

import entity.Phone;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;


public class FacadePhone implements InterfaceFacadePhone {
    
EntityManagerFactory emf;

    public FacadePhone() {
    }

    public FacadePhone(EntityManagerFactory emf) {
        this.emf = emf;
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
    public Phone getPhone(int id) {
        
        EntityManager em = emf.createEntityManager();
        
        Phone p;
        
        try
        {
            p = em.find(Phone.class, id);
        }
        finally
        {
            em.close();
        }
        
        return p;    
    
    }

    @Override
    public List<Phone> getPhones() 
        {
        EntityManager em = emf.createEntityManager();
        
        List<Phone> Phones;
        
        try
        {
            Phones = em.createQuery("SELECT p FROM Phone p").getResultList();
        }
        finally
        {
            em.close();
        }
        
        return Phones;
    
    }
    
}
