/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import entity.Place;
import facades.PlaceFacade;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import security.IPlace;
import security.IPlaceFacade;
import security.PlaceFacadeFactory;

@Path("place")
/**
 *
 * @author KH
 */
public class RestPlace {

    private IPlaceFacade pf;
    private Gson gson;

    public RestPlace() {
        pf = PlaceFacadeFactory.getInstance();
        gson = new Gson();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getMsg() {
        return "{\"message\" : " + "Testing" + "\"}";
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getPlace(@PathParam("id") String id) {
        Place p = (Place) pf.getPlaceByName(id);
        //String json = "{\"place\":[";
         String json = "{\"name\":\"" + p.getName() + "\", ";
                json += "\"address\":\"" + p.getAddress() + "\", ";
                json += "\"description\":\"" + p.getDescription() + "\", ";
                json += "\"rating\":\"" + p.getRating() + "\", ";
                json += "\"imageUrl\":\"" + p.getImageUrl() + "\"}";
        return json;
    }

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllPlaces(String content) {
        Place body = new Gson().fromJson(content, Place.class);
        List<IPlace> list = pf.getAllPlaces();
        List<Place> places = new ArrayList();
        if (body != null) {
            if (body.getAddress() != null) {
                for (IPlace p : list) {
                    if (p.getAddress().equals(body.getAddress())) {
                        places.add((Place) p);
                    }
                }
            }
            if (body.getDescription() != null) {
                for (IPlace p : list) {
                    if (p.getDescription().contains(body.getDescription())) {
                        places.add((Place) p);
                    }
                }
            }
            if (body.getRating() != 0) {
                for (IPlace p : list) {
                    if (p.getRating() == body.getRating()) {
                        places.add((Place) p);
                    }
                }
            }
        }
        if (places.size() < 1) {
            //return list
            String json = "{\"places\":[";
            for (int i = 0; i < list.size(); i++) {
                json += "{\"id\":\"" + list.get(i).getId() + "\", ";
                json += "\"name\":\"" + list.get(i).getName() + "\", ";
                json += "\"address\":\"" + list.get(i).getAddress() + "\", ";
                json += "\"description\":\"" + list.get(i).getDescription() + "\", ";
                json += "\"rating\":\"" + list.get(i).getRating() + "\", ";
                json += "\"imageUrl\":\"" + list.get(i).getImageUrl() + "\", ";
                json += "\"latitude\":\"" + list.get(i).getLatitude() + "\", ";
                json += "\"longtitude\":\"" + list.get(i).getLontitude() + "\"}";
                
                if (i == list.size() - 1) {
                    json += "]}";
                } else {
                    json += ",";
                }
            }
            return json;
        } else {
            //return places
                        String json = "{\"places\":[";
            for (int i = 0; i < places.size(); i++) {
                json += "{\"name\":\"" + list.get(i).getName() + "\", ";
                json += "\"address\":\"" + list.get(i).getAddress() + "\", ";
                json += "\"description\":\"" + list.get(i).getDescription() + "\", ";
                json += "\"rating\":\"" + list.get(i).getRating() + "\", ";
                json += "\"imageUrl\":\"" + list.get(i).getImageUrl() + "\", ";
                 json += "\"latitude\":\"" + list.get(i).getLatitude() + "\", ";
                json += "\"longtitude\":\"" + list.get(i).getLontitude() + "\"}";
                
                if (i == places.size() - 1) {
                    json += "]}";
                } else {
                    json += ",";
                }
            }
            return json;
        }
    }

    @POST
    @Path("/create")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public String createPlace( String name) {
        //Place p = new Gson().fromJson(content, Place.class);
        //pf.createPlace(p);d
        return gson.toJson(name);
    }
    
    @PUT
    @Path("/updateRating")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String updateRating(String content){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
        PlaceFacade pff = new PlaceFacade(emf);
       Place p = new Gson().fromJson(content, Place.class);
        System.out.println(p.toString());
       pff.updateRating(p);
        System.out.println(content);
       return "we in";
    }
}
