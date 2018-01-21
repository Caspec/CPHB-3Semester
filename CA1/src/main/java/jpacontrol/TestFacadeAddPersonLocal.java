/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jpacontrol;

import entity.Person;
import facade.FacadePerson;
import facade.InterfaceFacadePerson;
import javax.persistence.Persistence;

/**
 *
 * @author auron
 */
public class TestFacadeAddPersonLocal {
        public static void main(String[] args) {
        InterfaceFacadePerson fp = new FacadePerson(Persistence.createEntityManagerFactory("PU"));

       Person p1 = new Person("Test", "Test");

        fp.addPerson(p1);
        
        System.out.println(p1);
        
        System.out.println(fp.getPerson(1));
        
        System.out.println(fp.getPersons());

    }
}
