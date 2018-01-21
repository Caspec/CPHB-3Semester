package day1;

public class Even {

    private int n = 0;

    public synchronized int next() 
    {
        n++;
        n++;
        return n;
    }
}
