/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import com.google.gson.Gson;
import entity.House;
import entity.Place;
import facades.HouseFacade;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.persistence.EntityManager;
import security.HouseFacadeFactory;
import security.IHouse;
import security.IHouseFacade;

/**
 *
 * @author auron
 */
public class testmain {

//    public static void main(String[] args) {
//        
//        HouseFacade hf;
//        hf = (HouseFacade) HouseFacadeFactory.getInstance();
//        
//        House house = new House();
//        
//        house.setAddress("testvej");
//        house.setId(101l);
//        EntityManager em =  hf.getEntityManager();
//                
//         System.out.println(em.find(House.class, 1L).getAddress());
//         try {
//            em.getTransaction().begin();
//            em.persist(house);
//            em.getTransaction().commit();
//        } finally {
//            em.close();
//        }
//
//        
//
//    }
//    public static void main(String[] args) {
//        HouseFacade hf;
//        hf = (HouseFacade) HouseFacadeFactory.getInstance();
//        
//        House house = new House();
// 
//        EntityManager em =  hf.getEntityManager();
//        System.out.println(em.find(House.class, 1L).getAddress());
//    }
    
    public static void main(String[] args) {
        HouseFacade hf;
        hf = (HouseFacade) HouseFacadeFactory.getInstance();
        
        Date d1 = new Date();
        String datePC = new SimpleDateFormat("yyyy-MM-dd").format(d1);
        
        Place place = new Place("Din mor", "Der hvor hun bor", "1234", "4321", "Hun er løs", 1, "mandingo");
        House house = new House(2l, "Gangsta blvd", "Sindssygt sted", "Hårde tider", "1234", "4321", true, d1, d1, place);
        EntityManager em =  hf.getEntityManager();
        hf.updateHouseBooking(house);
        System.out.println(em.find(House.class, 2L).getCheckin());
        System.out.println(em.find(House.class, 2L).getCheckout());
        System.out.println(em.find(House.class, 2L).getReserved());
        
    }
    
}
