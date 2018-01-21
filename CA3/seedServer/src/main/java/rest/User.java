package rest;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import facades.UserFacade;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import security.PasswordStorage;

@Path("demouser")
@RolesAllowed("User")
public class User {

    private UserFacade uf;
    private Gson gson;
    
    public User() {
        uf = new UserFacade();
        gson = new Gson();
    }
    
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String getSomething(){
    return "{\"message\" : \"Hello User from Server (Accesible by only authenticated USERS)\"}"; 
  }

  @GET
  @Path("/random")
  @Produces(MediaType.APPLICATION_JSON)
  public String getRandomNumber(){
      
      return "{\"message\" : \"" + String.valueOf(Math.random()) + "\"}";
  }
}