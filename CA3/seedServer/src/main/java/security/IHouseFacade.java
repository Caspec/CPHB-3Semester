package security;

import entity.House;
import java.util.List;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author KH
 */
public interface IHouseFacade {
    public void addEntityManagerFactory(EntityManagerFactory emf);
    List<IHouse> getAllHouse();
    House getHouseById(Long id);
    House updateHouseBooking(House house);
}
