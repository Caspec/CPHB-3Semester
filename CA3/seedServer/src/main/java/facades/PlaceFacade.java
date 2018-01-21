/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entity.Place;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import security.IPlace;
import security.IPlaceFacade;
import security.IUser;

/**
 *
 * @author KH
 */
public class PlaceFacade implements IPlaceFacade {

    EntityManagerFactory emf;

    public PlaceFacade(EntityManagerFactory emf) {
        this.emf = emf;
    }

    public PlaceFacade() {
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    @Override
    public IPlace createPlace(Place place) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(place);
            em.getTransaction().commit();
            return place;
        } finally {
            em.close();
        }
    }

    @Override
    public IPlace getPlaceById(String id) {
        EntityManager em = getEntityManager();
        try {
            return em.find(Place.class, id);
        } finally {
            em.close();
        }
    }

    @Override
    public IPlace getPlaceByName(String name) {
        EntityManager em = getEntityManager();
        Place entity = (Place) em.createQuery("SELECT t FROM PLACE t where t.name = :value1")
                .setParameter("value1", name).getSingleResult();
        return entity;
    }

    @Override
    public List<IPlace> getAllPlaces() {
        EntityManager em = getEntityManager();
        try {
            Query query = em.createQuery("SELECT e FROM PLACE e");
            return (List<IPlace>) query.getResultList();
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }
    
    @Override
    public IPlace updateRating(Place place) {
        EntityManager em = getEntityManager();
        try{
           em.getTransaction().begin();
           Place p = em.find(Place.class, place.getId());
           if(p != null){
               p.setRating(place.getRating());
               em.merge(p);
               em.getTransaction().commit();
               return p;
           }
        }
        finally{
            em.close();
        }
        return null;
    }

    @Override
    public void addEntityManagerFactory(EntityManagerFactory emf) {
       this.emf = emf;
    }

}
