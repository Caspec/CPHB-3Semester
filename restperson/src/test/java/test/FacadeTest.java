package test;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import entity.Person;
import facade.FacadePerson;
import facade.InterfaceFacadePerson;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import static junit.framework.TestCase.assertEquals;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author auron
 */
public class FacadeTest {
    
    FacadePerson fp = new FacadePerson();
    EntityManagerFactory emf;
    
    public FacadeTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    @Test
    public void getPerson()
    {
        InterfaceFacadePerson fc = new FacadePerson(Persistence.createEntityManagerFactory("PU"));
        //EntityManager em = emf.createEntityManager();
        Person p = new Person(1l, "assadsa", "asdsad", 213123123);
        
   
            Person pe = fc.getPerson(1l);
            assertEquals(pe, p);   

        
    }

}
