package facades;

import entity.House;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import security.IHouse;
import security.IHouseFacade;

/**
 *
 * @author KH
 */
public class HouseFacade implements IHouseFacade {

    EntityManagerFactory emf;

    public HouseFacade(EntityManagerFactory emf) {
        this.emf = emf;
    }
    
    public HouseFacade(){
        
    }
    
    @Override
    public void addEntityManagerFactory(EntityManagerFactory emf) {
        this.emf = emf;
    }
    
    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    @Override
    public List<IHouse> getAllHouse() {
        EntityManager em = getEntityManager();
        try{
            Query query = em.createQuery("SELECT e FROM HOUSE e");
            return (List<IHouse>) query.getResultList();
        }catch (Exception e) {
            System.out.println(e);
    }
        return null;
    }

    @Override
    public House getHouseById(Long id) {
        EntityManager em = getEntityManager();
        try{
            return em.find(House.class, id);
        } finally{
            em.close();
        }
    }

    @Override
    public House updateHouseBooking(House house) {
        EntityManager em = getEntityManager();
        try{
            em.getTransaction().begin();
            House h = em.find(House.class, house.getId());
            if(h != null){
                h.setCheckin(house.getCheckin());
                h.setCheckout(house.getCheckout());
                h.setReserved(house.getReserved());
                em.merge(h);
                em.getTransaction().commit();
                return h;
            }
        }finally{
            em.close();
        }
        return null;
    }
    
    
    
}
