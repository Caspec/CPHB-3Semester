package blockqueue;

import java.util.concurrent.ArrayBlockingQueue;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Producer implements Runnable {

//    int[] list = { 4,5,8,12,21,22,34,35,36,37,42 };
//    ArrayList<Integer> list = new ArrayList<>();
    ArrayBlockingQueue<Integer> s1;
    ArrayBlockingQueue<Integer> s2;

    Producer(ArrayBlockingQueue<Integer> s1, ArrayBlockingQueue<Integer> s2) {
        this.s1 = s1;
        this.s2 = s2;
    }

    public Producer() {
    }

    public void run() {
        Boolean b = true;
        while (b) {
            Integer i = s1.poll();
            if (i == null) 
            {
                b = false;
            } 
            else 
            {
                Integer fibI = fib(i);
                try {
                    s2.put(fibI);

                } catch (InterruptedException ex) {
                    Logger.getLogger(Producer.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }

    }

    private Integer fib(Integer n) {
        if ((n == 0) || (n == 1)) {
            return n;
        } else {
            return fib(n - 1) + fib(n - 2);
        }

    }

//    public void run() {
//
//        
//        for (int i = 0; i < 11; i++) {
//            try {
//                numbersProduced.put(list[i]);
////                System.out.println(list[i]);
//            } catch (InterruptedException ex) {
//                Logger.getLogger(Producer.class.getName()).log(Level.SEVERE, null, ex);
//            }
//        }
//
//    }
//    @Override
//    public String toString() {
//        return "Producer{" + "list=" + list + '}';
//    }
}
