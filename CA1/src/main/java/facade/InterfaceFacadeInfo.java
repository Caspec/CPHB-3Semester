
package facade;


import entity.InfoEntity;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;


public interface InterfaceFacadeInfo {
    public void addEntityManagerFactory(EntityManagerFactory emf);        
    public EntityManager getEntityManager();  
    public InfoEntity getEmail(Long id);
    public List<InfoEntity> getEmails();
}
