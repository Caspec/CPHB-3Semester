package facade;

import entity.Hobby;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

public interface InterfaceFacadeHobby {

    public void addEntityManagerFactory(EntityManagerFactory emf);        
    public EntityManager getEntityManager();
    Hobby getHobby(int id);
    List<Hobby> getHobbies();
    

}
