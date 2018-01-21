package socket;

import java.net.*;
import java.io.*;
import java.util.Calendar;
import java.util.Date;

public class EchoServer {

    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = null;

        try {
            serverSocket = new ServerSocket(9876);
        } catch (IOException e) {
            System.err.println("Could not listen on port: 9876.");
            System.exit(1);
        }

        Socket clientSocket = null;
        System.out.println("Waiting for connection.....");

        try {
            clientSocket = serverSocket.accept();
        } catch (IOException e) {
            System.err.println("Accept failed.");
            System.exit(1);
        }

        System.out.println("Connection successful");
        System.out.println("Waiting for input.....");

        PrintWriter out = new PrintWriter(clientSocket.getOutputStream(),
                true);
        BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream()));

        String inputLine;
        Date now = new Date();
        Calendar cal = Calendar.getInstance();
        String date = cal.getTime().toString();
        while ((inputLine = in.readLine()) != null) {

            if (inputLine.equals("time")) {

                System.out.println("Server " + inputLine);
                out.println(date);

            } else if (inputLine.contains("UPPER#")) {

                String parts[] = inputLine.split("\\#");
                out.println(parts[1].toUpperCase());
            } else if (inputLine.contains("LOWER#")) {

                String parts[] = inputLine.split("\\#");
                out.println(parts[1].toLowerCase());
            } else if (inputLine.contains("REVERSE#")) {

                String parts[] = inputLine.split("\\#");
                String p = parts[1];
                String s = "";

                for (int i = p.length() - 1; i > -1; i--) {

                    s += p.charAt(i);

                }
                out.println(s);
                
            } else if (inputLine.equals("Bye.")) {
                break;
            } else {
                System.out.println("Server: " + inputLine);
                out.println(inputLine.toUpperCase());
            }

            out.close();
            in.close();
            clientSocket.close();
            serverSocket.close();
        }
    }
}
