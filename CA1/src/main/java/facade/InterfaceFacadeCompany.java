/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import entity.Company;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author auron
 */
public interface InterfaceFacadeCompany {
    
    public void addEntityManagerFactory(EntityManagerFactory emf);
    public void addCompany(Company c);
    public EntityManager getEntityManager();
    public Company getCompanyByCvr(int cvr);
    public Company getCompany(int id); 
    public List<Company> getCompanys();
}
