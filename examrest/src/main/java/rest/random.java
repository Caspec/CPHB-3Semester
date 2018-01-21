/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author auron
 */
@Path("random")
public class random {

    @Context
    private UriInfo context;

    public random() {
    }

    @GET
    @Path("/randomuuid")
    @Produces(MediaType.APPLICATION_JSON)
    public String getRandom() {
        String data = "{\"uuid\": " + "\"" + UUID.randomUUID().toString() + "\""  + "}" ;
        return data;
    }

    @GET
    @Path("/{timestamp}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getTime() {
        String data = new SimpleDateFormat("dd.MM.yyyy-HH.mm.ss").format(new Date());
        return data;
    }

}
