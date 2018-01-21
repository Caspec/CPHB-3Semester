package rest;

import JsonMappers.ContactInfo;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import deploy.DeploymentConfiguration;
import entity.Address;
import entity.CityInfo;
import entity.Hobby;
import entity.InfoEntity;
import entity.Person;
import entity.Phone;
import facade.FacadeAddress;
import facade.FacadeCity;
import facade.FacadeHobby;
import facade.FacadeInfo;
import facade.FacadePerson;
import facade.FacadePhone;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Persistence;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

// Ali -> person, hobby and phone
// Steff -> Company and address
@Path("company")
public class RestCompany {

    private FacadePerson fp;
    private Gson gson;
    private FacadeHobby fh;
    private FacadeAddress fa;
    private FacadeCity fc;
    private FacadePhone fph;
    private FacadeInfo fi;
    @Context
    private UriInfo context;

    public RestCompany() {
        fp = new FacadePerson();
        fh = new FacadeHobby();
        fa = new FacadeAddress();
        fc = new FacadeCity();
        fph = new FacadePhone();
        fi = new FacadeInfo();
        fp.addEntityManagerFactory(Persistence.createEntityManagerFactory(DeploymentConfiguration.PU_NAME));
        gson = new Gson();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/persons")
    public String addPerson(String content) {

        JsonObject body = new JsonParser().parse(content).getAsJsonObject();

        String PFirstName = "";
        String PLastName = "";

        if (body.has("firstName") && body.has("lastName")) {
            PFirstName = body.get("firstName").getAsString();
            PLastName = body.get("lastName").getAsString();
        }

        Person p = new Person(PFirstName, PLastName);
        fp.addPerson(p);
        System.out.println(p);
        return gson.toJson(p);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("persons/{id}")
    public Response getPerson(@PathParam("id") int id) {
        Person p = fp.getPerson(id);
        if (p != null) {
            return Response.ok(gson.toJson(p), MediaType.APPLICATION_JSON).build();
        }

        return Response.status(Response.Status.NOT_FOUND).entity("Person not found for id: " + id).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("persons/all")
    public String getAllPersons() {

        List<Person> persons;
        persons = fp.getPersons();
        if (persons != null) {
            return new Gson().toJson(persons);
        }

        return "{}";
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("persons/all/{zip}")
    public String getAllPersons(@PathParam("zip") int zip) {

        List<Person> persons;
        persons = fp.getPersons(zip);
        if (persons != null) {
            return new Gson().toJson(persons);
        }

        return "{}";
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("persons/delete/{id}")
    public String deletePerson(@PathParam("id") int id) {
        fp.deletePerson(id);
        return "Deleted";
    }

    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String updatePerson(String content) {

//        JsonObject body = new JsonParser().parse(content).getAsJsonObject();
//
//        String PFirstName = "";
//        String PLastName = "";
//
//        if (body.has("firstName") && body.has("lastName")) {
//            PFirstName = body.get("firstName").getAsString();
//            PLastName = body.get("lastName").getAsString();
//        }
//
//        Person p = new Person(PFirstName, PLastName);
//        fp.editPerson(p);
//        System.out.println(p);
//        return gson.toJson(p);
        JsonObject body = new JsonParser().parse(content).getAsJsonObject();
        Person p = fp.getPerson(body.get("id").getAsInt());

        if (body.has("firstName")) {
            p.setFirstName(body.get("firstName").getAsString());
        }
        if (body.has("lastName")) {
            p.setLastName(body.get("lastName").getAsString());
        }

        fp.editPerson(p);

        return new Gson().toJson(p);

    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("hobby/{id}")
    public String getHobby(@PathParam("id") int id) {
        Hobby h = fh.getHobby(id);
        if (h != null) {
            return new Gson().toJson(h);
        }

        return "{}";
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("hobby/all")
    public String getAllHobbies() {

        List<Hobby> h = fh.getHobbies();

        if (h != null) {
            return new Gson().toJson(h);
        }

        return "{}";
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/contactinfo")
    public String getContactInfo() {
        
            List<Person> persons = fp.getPersons();
            
            List<ContactInfo> i = new ArrayList();
             for(Person p: persons){
                 i.add(new ContactInfo(p));
                         
             }
     return new Gson().toJson(i);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
