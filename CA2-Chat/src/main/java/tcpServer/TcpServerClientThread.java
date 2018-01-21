package tcpServer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.HashMap;

public class TcpServerClientThread extends Thread {

    private Socket clientSocket;
    PrintWriter toClient;
    TcpServerHandler serverHandler;
    String name = "";

    public TcpServerClientThread(Socket s, TcpServerHandler serverHandler) {
        clientSocket = s;
        this.serverHandler = serverHandler;
        start();
    }

    @Override
    public void run() {
        serverHandler.addServer(this);
        System.out.println("Server log: New communication thread started...");

        try {
            toClient = new PrintWriter(clientSocket.getOutputStream(), true);
            BufferedReader fromClient = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));

            toClient.println("WELCOME...");

            String clientInput;

            while ((clientInput = fromClient.readLine()) != null) {
                System.out.println("Server log: Received input - " + clientInput);

                 if (clientInput.startsWith("LOGIN:") ) {
                     if(name.isEmpty()){
                        System.out.println("Server log: Asked for uppercased...");
                    
                        String parts[] = clientInput.split("\\:");
                        name = (parts[1]);
                    
                    serverHandler.echoAll(serverHandler.testArray(this));
                     }else{
                         toClient.println("Du kan ikke logge ind to gange.");
                     }
                 }else if (clientInput.startsWith("MSG:")){
                     String parts[] = clientInput.split("\\:");
                     if(parts[1].equals("*")){
                         serverHandler.echoAll("MSGRES: " + name + ": " + parts[2]);
                     }else if(parts[1].contains(",")){
                         String targets[] = parts[1].split("\\,");
                         for(String s : targets){
                             serverHandler.echoOne("MSGRES: " + name + ": " + parts[2], s);
                         }
                     }else{
                         serverHandler.echoOne("MSGRES: " + name + ": " + parts[2], parts[1]);
                     }
                     
                 }else if(clientInput.startsWith("LOGOUT:")){
                     serverHandler.removeServer(this);
                     serverHandler.echoAll(serverHandler.testArray(this));
                 }
                  
                else {
                    System.out.println("Server log: Asked for something unknown...");

                    toClient.println("DO NOT UNDERSTAND...");
                }
            }

            toClient.close();
            fromClient.close();
            clientSocket.close();
        } catch (IOException e) {
            System.out.println("Server log: Problem with Communication Server...");
        }
    }

    public void echo(String stringToClient) {
        toClient.println(stringToClient);
    }

}