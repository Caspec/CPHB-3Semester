
package jpaControl;

import facader.Facade;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;


public class Tester {
    
    public static void main(String[] args) {
        
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
        Facade f = new Facade(emf);
        
        System.out.println(f.getCustomers());
        System.out.println(f.getCustomer(1l) + " " + f.getCustomer(1).getName());
        
    }
    
}
