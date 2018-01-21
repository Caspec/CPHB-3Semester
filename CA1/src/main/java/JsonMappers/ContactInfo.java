
package JsonMappers;

import entity.Person;
import entity.Phone;
import java.util.List;

/**
 *
 * @author stev
 */
public class ContactInfo {
    
    public String fName;
    public String lName;
    public String email;
    public int phone;
    public String street;
    public String city;
    public String zip;

    public ContactInfo(Person p) {
        this.fName = p.getFirstName();
        this.lName = p.getLastName();
        this.email = p.getEmail();
        List<Phone> phones = p.getInfophone();
        
        if(phones != null && phones.size() > 0){
            this.phone = phones.get(0).getNumber();
        }
        this.street = p.getAddress().getStreet();
    }
        
    
    
  
}

