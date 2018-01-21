/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import entity.Place;
import facades.PlaceFacade;
import java.util.List;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import security.IPlace;

/**
 *
 * @author JEFF
 */
public class TestFacadePlace {
    
//    private EntityManagerFactory emf;
//    private PlaceFacade fp;
//    private String PU = "pu_development";
//    
//    public TestFacadePlace() {
//        fp = new PlaceFacade();
//    }
//    
//    @BeforeClass
//    public static void setUpClass() {
//    }
//    
//    @AfterClass
//    public static void tearDownClass() {
//    }
//    
//    @Before
//    public void setUp() {
//         {
//        System.out.println("SetUp");
//        emf = Persistence.createEntityManagerFactory(PU);
//        fp.addEntityManagerFactory(emf);
//        
////        fp.createPlace(new Place("Ali", "AliStræde", "GPS", "AliErSmuk", 4, "image"));
////        fp.createPlace(new Place("AliErTyk", "AliStræde 2", "GPS", "AliErRygerer", 5, "image"));
////        fp.createPlace(new Place("AliLugter", "AliLugteStræde", "GPS", "AliHanLugterMegetSlemt", 2, "image"));
//    }
//    }
//    
//    @After
//    public void tearDown() {
//    }
//
//    //as a registered user you can add New places
//    @Test
//    public void testAddPlace()
//    {
//        System.out.println("addPlace");
//        int expResult2 = fp.getAllPlaces().size();
//        Place place = new Place("BonBonland", "Næstved", "Gps", "BonBonlandErSjovt", 0, "image");
//        IPlace expResult = new Place("BonBonland", "Næstved", "Gps", "BonBonlandErSjovt", 0, "image");
//        IPlace result = fp.createPlace(place);
//        assertEquals(expResult2+1, fp.getAllPlaces().size());
//    }
//    //As a registered user you can see existing Places and ratings
//    @Test
//    public void testGetPlaces()
//     {
//        System.out.println("getPlaces");
//        
//        List<IPlace> places = fp.getAllPlaces();
//
//         for (int i = 0; i < places.size(); i++) {
//          System.out.println(places.get(i).getName()+"\n");
//             System.out.println(places.get(i).getRating());
//         }
//                 
//        assertEquals(places.size(), fp.getAllPlaces().size());
//    }
//    
//  @Test
//  public void testUpdateRating(){
//      System.out.println("UpdateRating");
//      Place place = new Place(1l, "BonBonland", "Næstved", "Gps", "BonBonlandErSjovt", 0, "image");
//      int expect = place.getRating();
//      place.setRating(5);
//      fp.updateRating(place);
//      System.out.println(place.getRating());
//      assertNotEquals(expect, place.getRating());
//           
//}
    
}
