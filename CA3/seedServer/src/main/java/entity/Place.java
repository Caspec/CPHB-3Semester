/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;
import security.IPlace;

/**
 *
 * @author KH
 */
@Entity(name = "PLACE")
@XmlRootElement
public class Place implements IPlace, Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private List<House> h;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Place)) {
            return false;
        }
        Place other = (Place) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.Place[ id=" + id + " ]";
    }
    
    String name;
    String address;
    String longtitude;
    String latitude;
    String description;
    int rating;
    String imageUrl;

    public Place(Long id, String name, String address, String longtitude, String latitude, String description, int rating, String imageUrl) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.longtitude = longtitude;
        this.latitude = latitude;
        this.description = description;
        this.rating = rating;
        this.imageUrl = imageUrl;
    }

    public Place(String name, String address, String longtitude, String latitude, String description, int rating, String imageUrl) {
        this.name = name;
        this.address = address;
        this.longtitude = longtitude;
        this.latitude = latitude;
        this.description = description;
        this.rating = rating;
        this.imageUrl = imageUrl;
    }

    
    public Place(){
        
    }
    
    public void setRating(int i){
        this.rating = i;
    }
    
    @Override
    public String getAddress() {
        return address;
    }


    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public int getRating() {
        return rating;
    }

    @Override
    public String getImageUrl() {
        return imageUrl;
    }
    
        @Override
    public String getName() {
        return name;
    }

    @Override
    public String getLontitude() {
        return longtitude;
    }

    @Override
    public String getLatitude() {
        return latitude;
    }

    @Override
    public List<House> getHouse() {
        return h;
    }
    
}
