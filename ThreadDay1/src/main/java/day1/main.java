package day1;

import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

public class main {

    private volatile static boolean bool = true;
    
    public static void main(String[] args) throws InterruptedException {

        
        Thread t1 = new Thread() {
            @Override
            public void run() {
                for (long i = 0; i <= 1000000000; i++) {
                    System.out.println(i);
                }
            }
        };
         Thread t2 = new Thread()  {
            @Override
            public void run() {
                for (int i = 0; i <= 5; i++) {
                    System.out.println(i);
                    try {
                        TimeUnit.SECONDS.sleep(2);
                    } catch (InterruptedException ex) {
                        Logger.getLogger(main.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
            }
        };
         
          Thread t3 = new Thread()  {
            @Override
            public void run() {
                int i = 0;
                while(bool){
                    System.out.println(i);
                    i++;
                    try {
                        TimeUnit.SECONDS.sleep(3);
                    } catch (InterruptedException ex) {
                        Logger.getLogger(main.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
                }
            
        };
         
        
//        t1.start();
//        t2.start();
        t3.start();
        
        TimeUnit.SECONDS.sleep(10);
        bool = false;


    }
}
