
package facade;

import entity.Phone;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;


public interface InterfaceFacadePhone {
    public void addEntityManagerFactory(EntityManagerFactory emf);        
    public EntityManager getEntityManager();  
    public Phone getPhone(int id);
    public List<Phone> getPhones();
   
}
