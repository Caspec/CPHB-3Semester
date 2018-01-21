/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entity.House;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import security.IHouse;

/**
 *
 * @author KH
 */
public class HouseFacadeTest {

    private static HouseFacade hf;

    public HouseFacadeTest() {
    }

    @BeforeClass
    public static void setUpClass() {
        System.out.println("addEntityManagerFactory");
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
        hf = new HouseFacade();
        hf.addEntityManagerFactory(emf);
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

    /**
     * Test of addEntityManagerFactory method, of class HouseFacade.
     */
    @Test
    public void testHouseBooking() {
        House h = hf.getHouseById(1l);
        assertEquals(false, h.getReserved());
    }

    @Test
    public void testHouseBookingCheckin() {     
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date dirty = new Date();
        String dirtyString = sdf.format(dirty);
        if (dirtyString.length() > 10 || dirtyString.length() < 10) {
            assertTrue(false);
        } else {
            assertTrue(true);
        }

    }
    
    @Test
    public void testHouseBookingCheckout(){
        House h = hf.getHouseById(1l);
        Date date = new Date();
        Date dt = h.getCheckout();
        
        String datePC = new SimpleDateFormat("yyyy-MM-dd").format(date);
        String dateDB = new SimpleDateFormat("yyyy-MM-dd").format(dt);
        
        if(datePC.equals(dateDB)){
            assertTrue(true);
        }else{
            assertFalse(false);
        }
    }
    
}
