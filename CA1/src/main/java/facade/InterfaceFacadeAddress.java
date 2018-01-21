/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import entity.Address;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author auron
 */
public interface InterfaceFacadeAddress {
    
    public void addEntityManagerFactory(EntityManagerFactory emf);
    public void addAddress(Address a);
    public EntityManager getEntityManager();
    public Address getAddress(int id); 
    public List<Address> getAddress();

}
