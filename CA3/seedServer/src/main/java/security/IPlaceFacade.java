/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

import entity.Place;
import java.util.List;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author KH
 */
public interface IPlaceFacade {
    public void addEntityManagerFactory(EntityManagerFactory emf);
    IPlace createPlace(Place place);
    IPlace getPlaceById(String id);
    IPlace getPlaceByName(String name);
    List<IPlace> getAllPlaces();
    IPlace updateRating(Place place);
}
