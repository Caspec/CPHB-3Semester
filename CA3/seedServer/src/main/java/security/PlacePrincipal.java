/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author KH
 */
public class PlacePrincipal implements Principal{
     private String address; 

  
  public PlacePrincipal(String address) {
    super();
    this.address = address;
  }

  @Override
  public String getName() { 
    return address;
  }
    
}
