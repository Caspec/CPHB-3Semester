package jpacontrol;


import entity.GitRepo;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Populate
{
    public static void main(String[] args)
    {
        
        // Select = find
        // Create = persist
        // Update = merge
        // Delete = remove
        
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
        EntityManager em = emf.createEntityManager();
        
        
        em.getTransaction().begin();

        GitRepo git = new GitRepo("Benny", "Benny Eriksen");
        GitRepo git2 = new GitRepo("John", "John Rambo");
        
        em.persist(git);
        em.persist(git2);
        
        em.getTransaction().commit();
        
        em.close();
    }
}