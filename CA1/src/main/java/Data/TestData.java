
package Data;

import java.util.Random;


public class TestData {
    private static String[] firstname = {"Jeppe", "Martin", "li", "Stephan", "David", "Tjelfe", "Jakob", "Tue", "Palle", "Christian"};
    private static String[] lastname = {"Christensen", "K", "A", "Q", "R", "Z", "Martinsen", "Bond", "Vikke", "Kazandra"};
    private static String[] hobbydescription={"Ball", "featherball", "tennisball", "pukball", "stamp collecting", "fighting", "watersport", "airsport", "earthsport", "mountainsport"};
    private static String[] hobbyname={"football", "Tennis", "badminton", "ishocky", "squash", "Waterpolo", "swiming", "diving", "mountainclaimer", "music"};
    private static String[] companyname={"hjemis", "apple", "linux", "windows", "microsoft", "joe and the juice", "jack and jones", "eco sko", "bog og ide", "barreso"};
    private static String[] companydescription={"ice", "fire", "wind", "earth", "flame", "rain", "water", "elecktricity", "dragon", "normal"};
    private static Integer[] companycvr={1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    private static Integer[] companynumemployees={1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    private static Integer[] companymarketvalue={10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
    private static String[] infoentityemail={"denklammelundin", "terminatorRobocopsylvesterstalonarnoldsorteneger", "googior", "google", "hotmail", "gmail", "yahoo", "jubii", "negerKat", "hvidHund"};
    private static Integer[] phonenumber ={12, 13, 14, 15, 16, 17, 18, 19, 20, 123};
    private static String[] phonedescription={"black", "white", "yellow", "orange", "blue", "green", "purple", "pink", "teal", "red"};
    private static String[] adressstreet={"lundemo 65", "vallensbæk 65", "lhynby 43", "lungty 76", "tysselit 86", "ulysses 54", "wyisrt 78", "topoplob 94", "polækkerstreet 12", "polensveder 55"};
    private static String [] adressadditionalinfo={"anden til højre", "ned i kælderen", "oppe på loftet", "anden til venstre", "stueEtagen", "først sal", "tredje til højre", "tredje til venstre", "fjerde til højre", "fjerde til venstre"};
    public static void main(String[] args) {
         
          System.out.println(createPerson(10));
          System.out.println(createHobby(10));
          System.out.println(createCompany(10));
          System.out.println(createInfoEntity(10));
          System.out.println(createPhone(10));
          System.out.println(createAddress(10));
          
    }
    
    public static String createPerson(int amount){
        String sql = "";
        int i = 0;
        Random random = new Random();
       
        while( i < amount){
            i++;
         int randomId = random.nextInt(9 - 1 + 1) + 1;
        int randomId2 = random.nextInt(9 - 1 + 1) + 1;
            sql += " INSERT INTO company.`PERSON` (FIRSTNAME, LASTNAME) VALUES" + "(" + "'" + firstname[randomId] + "'" + "," + "'" + lastname[randomId2] + "'" + ");\n";
                   
        }
               
        return sql;
    }
    public static String createHobby(int amount){
        String sql = "";
        int i = 0;
        Random random = new Random();
        
        while( i < amount){
            i++;
            int randomId = random.nextInt(9 - 1 + 1) + 1;
        int randomId2 = random.nextInt(9 - 1 + 1) + 1;
         sql += " INSERT INTO company.`HOBBY` (DESCRIPTION, NAME) VALUES" + "(" + "'" + hobbydescription[randomId] + "'" + "," + "'" + hobbyname[randomId2] + "'" + ");\n";
        }
         return sql;
    }
   public static String createCompany(int amount) {
       String sql = "";
       int i = 0;
       Random random = new Random();
       
       while( i < amount){           
           i++;
           int randomId = random.nextInt(9 - 1 + 1) + 1;
        int randomId2 = random.nextInt(9 - 1 + 1) + 1;
        int randomId3 = random.nextInt(9 - 1 + 1) + 1;
        int randomId4 = random.nextInt(9 - 1 + 1) + 1;
        int randomId5 = random.nextInt(9 - 1 + 1) + 1;
        sql += " INSERT INTO company.`COMPANY` (NUMEMPLOYEES, CVR, DESCRIPTION, MARKETVALUE, NAME) VALUES" + "(" + "'" + companynumemployees[randomId] + "'" + "," + "'" + companycvr[randomId2] + "'" + "," + "'" + companydescription[randomId3] + "'" + "," + "'" + companymarketvalue[randomId4] + "'" + "," + "'" + companyname[randomId5] + "'" + ");\n";
       }
       return sql;
   }
   public static String createInfoEntity(int amount) {
       String sql = "";
       int i = 0;
       Random random = new Random();
       
       while( i < amount) {
           i++;
           int randomId = random.nextInt(9 - 1 + 1) + 1;
           sql += " INSERT INTO company.`INFOENTITY` (EMAIL) VALUES" + "(" + "'" + infoentityemail[randomId] + "'" + ");\n";
          
       }
       return sql;
   }
   public static String createPhone(int amount) {
       String sql = "";
       int i = 0;
       Random random = new Random();
       
       while(i < amount) {
           i++;
         int randomId = random.nextInt(9 - 1 + 1) + 1;
        int randomId2 = random.nextInt(9 - 1 + 1) + 1;
         sql += " INSERT INTO company.`PHONE` (DESCRIPTION, NUMBER) VALUES" + "(" + "'" + phonedescription[randomId] + "'" + "," + "'" + phonenumber[randomId2] + "'" + ");\n";
       }
       return sql;
   }
   public static String createAddress(int amount){
       String sql = "";
       int i = 0;
       Random random = new Random();
       
       while(i < amount) {
           i++;
             int randomId = random.nextInt(9 - 1 + 1) + 1;
        int randomId2 = random.nextInt(9 - 1 + 1) + 1;
        sql += " INSERT INTO company.`ADDRESS` (STREET, DESCRIPTION) VALUES" + "(" + "'" + adressstreet[randomId] + "'" + "," + "'" + adressadditionalinfo[randomId2] + "'" + ");\n";
       }
       return sql;
   }
}
