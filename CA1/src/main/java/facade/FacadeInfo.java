
package facade;

import entity.InfoEntity;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;


public class FacadeInfo implements InterfaceFacadeInfo {
    
EntityManagerFactory emf;

    public FacadeInfo() {
    }

    public FacadeInfo(EntityManagerFactory emf) {
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
    public InfoEntity getEmail(Long id) {
       
        
        EntityManager em = emf.createEntityManager();
        
        InfoEntity e;
        
        try
        {
            e = em.find(InfoEntity.class, id);
        }
        finally
        {
            em.close();
        }
        
        return e;    
    
    
    }

    @Override
    public List<InfoEntity> getEmails() 
        {
        EntityManager em = emf.createEntityManager();
        
        List<InfoEntity> Emails;
        
        try
        {
            Emails = em.createQuery("SELECT i FROM InfoEntity i").getResultList();
        }
        finally
        {
            em.close();
        }
        
        return Emails;
    }
    
}