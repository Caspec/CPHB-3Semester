package tcpClient;

import tcpClient.TcpClient;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class TcpReader extends Thread {

    private BufferedReader fromServer;
    private String output;
    private TcpClient client;

    TcpReader(BufferedReader fromServer, TcpClient tcpClient) {
        this.fromServer = fromServer;
        this.client = tcpClient;
        start();
    }

    public void run() {
        try {
            while ((output = fromServer.readLine()) != null) {
                if (output.equals("GOODBYE...")) {
                    System.out.println("Client message: Left the server!");
                    client.kill();
                    break;
                }
                System.out.println(output);
            }
        } catch (IOException ex) {
            Logger.getLogger(TcpReader.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Throwable ex) {
            Logger.getLogger(TcpReader.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}