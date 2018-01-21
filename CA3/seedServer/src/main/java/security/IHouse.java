package security;

import entity.Place;
import java.util.Date;
import javax.persistence.Entity;

/**
 *
 * @author KH
 */

public interface IHouse {
    String getName();
    String getDescription();
    String getAddress();
    String getLongitude();
    String getLatitude();
    Boolean getReserved();
    Date getCheckin();
    Date getCheckout();
    Place getPlace();
}
