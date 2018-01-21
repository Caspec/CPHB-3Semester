
package facade;

import entity.Company;
import entity.Company;
import entity.Person;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author auron
 */
public interface InterfaceFacadePerson {

    public void addEntityManagerFactory(EntityManagerFactory emf);        
    public EntityManager getEntityManager();
    public Person getPerson(int id);
    public List<Person> getPersons();
    public List<Person> getPersons(int zipCode);
    public List<Person> getPersonsContactInfo();
    public Company getCompany(int cvr);
    public Person addPerson(Person p);
    public Person deletePerson(int id);
    public Person editPerson(Person p);

}
