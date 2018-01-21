
package day1;


public class Day1main2 {
    public static void main(String[] args) {
        
        // a) Ja jeg får 2 ud også 4 ud i konsollen eller 4 og 2 ud
        // b) Jeg har prøvet en 5-7 gange og det er det samme resultat
        // c) public synchronized int next() 
        // d) Jeg vil argumentere for det ved at sige at når der bliver brugt synchronized på metoden next() så locker vi også er det der bliver udført før at den bliver frigivet til den anden tråd 
        
        
        Even e = new Even();
        
        Thread t1 = new Thread() {
            @Override
            public void run() {
                System.out.println(e.next());
            }
        };
        
        Thread t2 = new Thread() {
            @Override
            public void run() {
               System.out.println(e.next());
            }
        };
         
       t1.start();
       t2.start();
        
    }
}
