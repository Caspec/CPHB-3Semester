
package junit;

import entity.Person;
import facade.FacadePerson;
import java.util.HashMap;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.junit.After;
import org.junit.AfterClass;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;


public class FacadePersonTest
{
//    private EntityManagerFactory emf;
//    private FacadePerson fp;
//    private String PU = "PU_Testdb";
//    
//    public FacadePersonTest()
//    {
//        fp = new FacadePerson();
//        
//    }
//    
//    @BeforeClass
//    public static void setUpClass()
//    {
//    }
//    
//    @AfterClass
//    public static void tearDownClass()
//    {
//    }
//    
//    @Before
//    public void setUp()
//    {
//        System.out.println("SetUp");
//        emf = Persistence.createEntityManagerFactory(PU);
//        fp.addEntityManagerFactory(emf);
//        
//        fp.addPerson(new Person("Dan", "Mark"));
//        fp.addPerson(new Person("Kaj", "Olsen"));
//        fp.addPerson(new Person("Jens", "Madsen"));
//    }
//    
//    @After
//    public void tearDown()
//    {
//        System.out.println("TearDown");
//        emf.close();
//        HashMap<String, Object> puproperties = new HashMap();
//        //puproperties.put("javax.persistence.sql-load-script-source", "scripts/ClearDBTest.sql");
//        Persistence.generateSchema(PU, puproperties);
//        Persistence.generateSchema(PU, new HashMap());
//    }
//
//    @Test
//    public void testGetPerson()
//    {
//        System.out.println("getPerson");
//        Person expResult = new Person("Dan", "Mark");
//        Person result = fp.getPerson(4);
//        assertEquals(expResult.getFirstName(), result.getFirstName());
//    }
//
//    @Test
//    public void testGetPersons()
//    {
//        System.out.println("getPerson");
//        Person expResult = new Person("Dan", "Mark");
//        Person result = fp.getPerson(1);
//        assertEquals(expResult.getFirstName(), result.getFirstName());
//    }
//    
//    @Test
//    public void testAddPerson()
//    {
//        System.out.println("addPerson");
//        Person expResult = new Person("Ole", "Larsen");
//        Person result = fp.addPerson(new Person("Ole", "Larsen"));
//        assertEquals(9, fp.getPersons().size());
//    }
//    
//    @Test
//    public void testDeletePerson()
//    {
//        System.out.println("deletePerson");
//        fp.deletePerson(1);
//        assertEquals(5, fp.getPersons().size());
//    }
}
