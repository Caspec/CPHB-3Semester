/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import javax.persistence.Persistence;

/**
 *
 * @author auron
 */
public class FacadeFactoryGitRepo {
    private static final IGitRepo instance = new FacadeGitRepo(Persistence.createEntityManagerFactory("pu_development"));
    public static IGitRepo getInstance(){
        return instance;
    }
}
