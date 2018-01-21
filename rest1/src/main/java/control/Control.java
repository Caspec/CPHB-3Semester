
package control;

import facader.PetFacade;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;


public class Control {
    public static void main(String[] args) {
        
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
        PetFacade f = new PetFacade(emf);
        
        System.out.println(f.getAllPets());
    
        
    }
}
