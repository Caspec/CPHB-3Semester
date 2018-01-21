package day2.webscraper;

public class Tester {

    // a) Det er vel fordi at den skal tælle elementer på siden og at der er flere divs på politiken end på google og at tc2 kan ikke kører før at tc1 bliver færdig.
    // b) public class TagCounter extends Thread, jeg tænkte først at jeg ville bruge Runnable fordi der er flere som mener at det er den måde som giver en bedre performance
    // c) At den kører 3 tråde i stedet for en metode som skal udføre at hente data fra siderne. At det går meget hurtigere men output giver null og 0, det er fordi den overskriver hinanden. 
    // d) At ved run metoden tager det meget længere tid fordi hver Counter skal vente før den næste bliver udført derimod hvis der bliver brugt Thread med start() på den så kører den parallelt istedet for sekvens som run metoden gør
    public static void main(String[] args) throws InterruptedException {

        System.out.println("Avilable Processors: " + Runtime.getRuntime().availableProcessors());

        TagCounter tc1 = new TagCounter("http://www.fck.dk");
        tc1.start();
        tc1.join();
        TagCounter tc2 = new TagCounter("http://www.google.com");
        tc2.start();
        tc2.join();
        TagCounter tc3 = new TagCounter("http://politiken.dk/");
        tc3.start();
        tc3.join();

        System.out.println("Title: " + tc1.getTitle());
        System.out.println("Div's: " + tc1.getDivCount());
        System.out.println("Body's: " + tc1.getBodyCount());

        System.out.println("Title: " + tc2.getTitle());
        System.out.println("Div's: " + tc2.getDivCount());
        System.out.println("Body's: " + tc2.getBodyCount());

        System.out.println("Title: " + tc3.getTitle());
        System.out.println("Div's: " + tc3.getDivCount());
        System.out.println("Body's: " + tc3.getBodyCount());

        long start = System.nanoTime();
        tc1.start();
        tc2.start();
        tc3.start();

        long end = System.nanoTime();
        System.out.println("Time Sequential: " + (end - start));

    }
}
