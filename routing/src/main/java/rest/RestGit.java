package rest;

import com.google.gson.Gson;
import entity.GitRepo;
import facade.FacadeFactoryGitRepo;
import facade.IGitRepo;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

@Path("git")
public class RestGit {

    private IGitRepo gitRepo;
    private Gson gson;

    public RestGit() {
        gitRepo = FacadeFactoryGitRepo.getInstance();
        gson = new Gson();
    }

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllGitRepo() {
        List<GitRepo> glist = gitRepo.getAllGitRepo();
        return gson.toJson(glist);
    }

}
