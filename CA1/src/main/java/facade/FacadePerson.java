
package facade;

import entity.Company;
import entity.Person;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;


public class FacadePerson implements InterfaceFacadePerson {

    EntityManagerFactory emf;
    
    public FacadePerson()
    {
    }
    
    public FacadePerson(EntityManagerFactory emf) {
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
    public Person getPerson(int id) {
       
        
        EntityManager em = emf.createEntityManager();
        
        Person p;
        
        try
        {
            p = em.find(Person.class, id);
        }
        finally
        {
            em.close();
        }
        
        return p;    
    
    
    }

    @Override
    public List<Person> getPersons()     {
        EntityManager em = emf.createEntityManager();
        
        List<Person> Persons;
        
        try
        {
            Persons = em.createQuery("SELECT p FROM Person p").getResultList();
        }
        finally
        {
            em.close();
        }
        
        return Persons;
    }
    

    @Override
    public List<Person> getPersons(int zipCode) {
        EntityManager em = emf.createEntityManager();
      
        try
        {
             return em.createQuery("SELECT p FROM Person p WHERE ZIPCODE = " + zipCode).getResultList();
        }
        finally
        {
            em.close();
        }
        
       
    }
    
    @Override
    public List<Person> getPersonsContactInfo() {
        EntityManager em = emf.createEntityManager();
        
        try
        {
            return em.createQuery("SELECT p, a FROM Person p JOIN p.infophone ").getResultList();
        }
        finally
        {
            
        }
    }

    @Override
    public Company getCompany(int cvr){
       
        
        EntityManager em = emf.createEntityManager();
        
        Company c;
        
        try
        {
            c = em.find(Company.class, cvr);
        }
        finally
        {
            em.close();
        }
        
        return c;    
    
    
    }
    @Override
    public Person addPerson(Person person) {
        EntityManager em = emf.createEntityManager();

        try
        {
            em.getTransaction().begin();
            em.persist(person);
            em.getTransaction().commit();
        }
        finally
        {
            em.close();
        }
        
        return person;
    }

    @Override
    public Person deletePerson(int id)    {
        EntityManager em = emf.createEntityManager();

        Person p;
        
        try
        {
            em.getTransaction().begin();
            p = em.find(Person.class, id);
            em.remove(p);
            em.getTransaction().commit();
        }
        finally
        {
            em.close();
        }
        
        return p;
    }

    @Override
    public Person editPerson(Person person)   {
        EntityManager em = emf.createEntityManager();

        Person p;
        
        try
        {
            em.getTransaction().begin();
            p = em.find(Person.class, person.getId());
            if(p != null)
            {
                p = person;
                em.merge(p);
                em.getTransaction().commit();
            }
        }
        finally
        {
            em.close();
        }  
        
        return p;
    }

    
    
}
