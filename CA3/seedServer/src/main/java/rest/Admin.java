package rest;

import com.google.gson.Gson;
import facades.UserFacade;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import javax.annotation.security.RolesAllowed;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import security.IUser;
import security.IUserFacade;
import security.UserFacadeFactory;

@Path("demoadmin")
@RolesAllowed("Admin")
public class Admin {
    IUserFacade facade = UserFacadeFactory.getInstance();

  
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String getSomething(){
    String now = new SimpleDateFormat("MM-dd-yyyy HH:mm:ss").format(new Date());
    return "{\"message\" : \"Hello Admin from server (call accesible by only authenticated ADMINS)\",\n"+"\"serverTime\": \""+now +"\"}"; 
  }
//  @GET
//  @Path("/users")
//  @Produces(MediaType.APPLICATION_JSON)  
//  public String getAllUsers(){
//      try{
//        IUser user1 = facade.getUserByUserId("user");
//        IUser user2 = facade.getUserByUserId("user_admin");
//            return "{\"message\" : \""+  user1.getUserName() + ", " + user2.getUserName() + "\"}"; 
//        }
//        catch(Exception e){
//            System.out.println(e);
//        }
//        return null;
//  }
// 
    @GET
    @Path("/users")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllUsers() {
        try {
            String json = "{\"users\":[\"";
            List<IUser> users = facade.getAllUsers();
            for (int i = 0; i < users.size(); i++) {
                json+= users.get(i).getUserName(); 
                if(i==users.size()-1){
                    json+="\"]}";
                } else {
                    json+="\",\"";
                }
            }
                System.out.println(json);
//            String json = new Gson().toJson(users);
            return json;
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }
    
    @GET
    @Path("/user")
    @Produces(MediaType.APPLICATION_JSON)
    public String getUser(String u) {
        try {
            IUser Iuser = facade.getUser(u);
            Gson gson = new Gson();
           String result = gson.toJson(Iuser, entity.User.class);
            //String user = "{\"user\":\"" + Iuser + "\"}";
       
                System.out.println(result);
            return result;
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }
}