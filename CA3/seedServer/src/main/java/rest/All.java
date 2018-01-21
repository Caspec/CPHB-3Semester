/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import facades.UserFacade;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import security.IUserFacade;
import security.PasswordStorage;
import security.UserFacadeFactory;

/**
 * REST Web Service
 *
 * @author plaul1
 */
@Path("demoall")
public class All {
IUserFacade userFacade;
  @Context
  private UriInfo context;

  
     private IUserFacade uf;
     private Gson gson;
  /**
   * Creates a new instance of A
   */
   public All() {
        userFacade = UserFacadeFactory.getInstance();
    }

  /**
   * Retrieves representation of an instance of rest.All
   * @return an instance of java.lang.String
   */
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String getText() {
    return " {\"message\" : \"result for all\"}";
  }
  
  
//  @POST
//  @Path("/register")
//  @Consumes(MediaType.APPLICATION_JSON)
//  @Produces(MediaType.APPLICATION_JSON)
//  public String registerUser(String content) throws PasswordStorage.CannotPerformOperationException{
//      JsonObject body = new JsonParser().parse(content).getAsJsonObject();
//      String userName = "";
//      String password = "";
//      if(body.has("userName")){
//          userName = body.get("userName").getAsString();
//      }
//      if(body.has("password")){
//          password = body.get("password").getAsString();
//      }
//      
//      entity.User eu = new entity.User(userName, password);
//      uf.registerUser(eu);
//      return new Gson().toJson(eu);
//  }
  
    @POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void createUser(String content) {
        entity.User u = new Gson().fromJson(content, entity.User.class);
        System.out.println("username :"+u.getUserName()+" password: "+u.getPasswordHash());
        userFacade.registerUser(u.getUserName(), u.getPasswordHash());
    }

}
