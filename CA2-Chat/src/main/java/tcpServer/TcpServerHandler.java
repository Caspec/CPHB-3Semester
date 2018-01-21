package tcpServer;

import java.util.ArrayList;

public class TcpServerHandler {

    public ArrayList<TcpServerClientThread> servers;

    TcpServerHandler() {
        servers = new ArrayList();
    }

    public void addServer(TcpServerClientThread clientserver) {
        servers.add(clientserver);
    }

    public void removeServer(TcpServerClientThread clientServer) {
        servers.remove(clientServer);
    }

    public void echoAll(String echo, TcpServerClientThread clientServer) {
        servers.remove(clientServer);
        for (int i = 0; i < servers.size(); i++) {
            servers.get(i).echo(echo);
        }
        servers.add(clientServer);
    }

    public void echoOne(String echo, String name) {
        for (TcpServerClientThread t : servers) {
            if (t.name.equals(name)) {
                t.echo(echo);
            }
        }
    }

    public void echoAll(String echo) {
        for (int i = 0; i < servers.size(); i++) {
            servers.get(i).echo(echo);
        }

    }

    public String testArray(TcpServerClientThread clientServer) {
        String result = "";
        boolean first = true;
        for (int i = 0; i < servers.size(); i++) {
            if (servers.get(i).name.length() > 1) {
                if (first) {
                    result = "CLIENTLIST: " + servers.get(i).name;
                    first = false;
                } else {
                    result += ", " + servers.get(i).name;
                }
            }
        }

        return result;
    }
}
