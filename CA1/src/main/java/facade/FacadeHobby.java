package facade;


import entity.Hobby;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

public class FacadeHobby implements InterfaceFacadeHobby
{
    
    EntityManagerFactory emf;
    
    public FacadeHobby()
    {
    }
    
    public FacadeHobby(EntityManagerFactory emf) {
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
    public Hobby getHobby(int id) {
       
        
        EntityManager em = emf.createEntityManager();
        
        Hobby h;
        
        try
        {
            h = em.find(Hobby.class, id);
        }
        finally
        {
            em.close();
        }
        
        return h;    
    
    
    }

    @Override
    public List<Hobby> getHobbies() {
        
        EntityManager em = emf.createEntityManager();
        
        List<Hobby> Hobbies;
        
        try
        {
            Hobbies = em.createQuery("SELECT h FROM Hobby h").getResultList();
        }
        finally
        {
            em.close();
        }
        
        return Hobbies;
    
    }
}