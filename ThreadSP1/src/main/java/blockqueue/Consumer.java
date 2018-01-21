
package blockqueue;

import java.util.concurrent.ArrayBlockingQueue;
import java.util.logging.Level;
import java.util.logging.Logger;


public class Consumer implements Runnable {
    
  ArrayBlockingQueue<Integer> s2;

   int amount;
    static Counter counter;
    static long sum;
 
    Consumer(ArrayBlockingQueue<Integer> s2, Counter counter) {
        this.s2 = s2;
        this.counter = counter;
    }

    public void run() {
        Boolean b = true;
        while (b) {
            if (counter.getCounter() > 0) {
                try {
                    Integer i = s2.take();
                    counter.decrease();
                    add(i);
                    System.out.println("fib number: " + i);
                } catch (InterruptedException ex) {
                    Logger.getLogger(Consumer.class.getName()).log(Level.SEVERE, null, ex);
                }
            } else {
                System.out.println("summa: " + sum);
                b = false;
            }

        }

    }
    
    private synchronized void add(Integer i){
        sum+=i;
    }
}
