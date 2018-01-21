/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import entity.Person;
import facade.FacadePerson;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import io.restassured.http.ContentType;
import io.restassured.parsing.Parser;
import java.io.IOException;
import java.util.List;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.HttpClientBuilder;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.notNullValue;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author auron
 */
public class RestCompanyIntegrationTest {

    public RestCompanyIntegrationTest() {
    }

//    @BeforeClass
//    public static void setUpClass() {
//        RestAssured.baseURI = "http://localhost";
//        RestAssured.port = 8080;
//        RestAssured.basePath = "/CA1/";
//        RestAssured.defaultParser = Parser.JSON;
//    }
//    
//    @AfterClass
//    public static void tearDownClass() {
//    }
//    
//    @Before
//    public void setUp() {
//    }
//    
//    @After
//    public void tearDown() {
//    }
//
//    @Test
//    public void testGetPersons() {
//        System.out.println("getPersons");
//       
//    }
//    
//    @Test
//    public void serverIsRunning(){
//        given().
//        when().get().
//        then().statusCode(200);
//    }
//    
//    @Test
//    public void postGetDeletePerson(){
//        Person p = new Person("zzzzz", "zzzzz", 232323);
//        Person newPerson =
//        given()
//        .contentType("application/json")
//        .body(p)
//        .when().post("/api/person")
//        .as(Person.class);
//        
//        assertNotNull(newPerson.getId());
//        given()
//        .contentType(ContentType.JSON)
//        .when().get("api/person/" + newPerson.getId()).then()
//        .body("id", notNullValue())
//        .body("firstName", equalTo("zzzzz"));
//        
//        
//        given()
//        .contentType(ContentType.JSON)
//        .when().delete("api/person/" + newPerson.getId()).then()
//        .body("firstName", equalTo("zzzzz"));
//    }
//    @Test
//    public void getPersonErrorHandling()
//            throws ClientProtocolException, IOException {
//
//        // Given
//        int wrongId = 2028;
//        HttpUriRequest request = new HttpGet("http://207.154.220.147:3306/CA1/api/company/persons/" + wrongId);
//
//        // When
//        HttpResponse httpResponse = HttpClientBuilder.create().build().execute(request);
//
//        // Then
//        assertThat(
//                httpResponse.getStatusLine().getStatusCode(),
//                equalTo(HttpStatus.SC_NOT_FOUND));
//    }
//    
//    @Test
//    public void addPersonTest() {
//        Person p = new Person();
//        p.setFirstName("test");
//        p.setLastName("user");
//        Person getP = new Person();   
//        
//        given()
//        .contentType("application/json")
//        .body(p)
//        .when().post("/company/persons/");
//        
//        FacadePerson fp = new FacadePerson();
//        List<Person> persons = fp.getPersons();
//        
//        for (Person x : persons) {
//            if(x.getFirstName() == p.getFirstName() && x.getLastName() == p.getLastName()){
//                getP = x;
//            }
//        }
//        assertTrue(p.getFirstName() == getP.getFirstName());
//        assertTrue(p.getLastName() == getP.getLastName());
//            
//    }

}
