package rest;

import com.google.gson.Gson;
import entity.House;
import entity.Place;
import facades.HouseFacade;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import security.HouseFacadeFactory;
import security.IHouse;
import security.IHouseFacade;
import security.IPlace;

@Path("house")
/**
 *
 * @author KH
 */
public class RestHouse {

    private IHouseFacade hf;
    private Gson gson;

    public RestHouse() {
        hf = HouseFacadeFactory.getInstance();
        gson = new Gson();
    }

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllHouse() {
     
       List<IHouse> houses = hf.getAllHouse();
         return gson.toJson(houses);
    }
    
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getHouseById(@PathParam("id") Long id) {
      
        House h = hf.getHouseById(id);
        return gson.toJson(h);
    }
    
    @PUT
    @Path("/updateHouse")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String updateBooking(String content){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
        HouseFacade hff = new HouseFacade(emf);
        House h = new Gson().fromJson(content, House.class);
        System.out.println(h.toString());
        hff.updateHouseBooking(h);
        System.out.println(content);
        return "We in";
    }
}
