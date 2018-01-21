package entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToOne;

@Entity
public class Company extends InfoEntity implements Serializable {

    private String name;
    private String description;
    private int cvr;
    private int NumEmployees;
    private double marketValue;
    @OneToOne
    private InfoEntity iec;

    public Company() {
    }

    public Company(String name, String description, int cvr, int NumEmployees, double marketValue) {
        this.name = name;
        this.description = description;
        this.cvr = cvr;
        this.NumEmployees = NumEmployees;
        this.marketValue = marketValue;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getCvr() {
        return cvr;
    }

    public void setCvr(int cvr) {
        this.cvr = cvr;
    }

    public int getNumEmployees() {
        return NumEmployees;
    }

    public void setNumEmployees(int NumEmployees) {
        this.NumEmployees = NumEmployees;
    }

    public double getMarketValue() {
        return marketValue;
    }

    public void setMarketValue(double marketValue) {
        this.marketValue = marketValue;
    }
    
}
