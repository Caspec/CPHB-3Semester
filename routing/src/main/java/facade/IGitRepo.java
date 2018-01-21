/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import entity.GitRepo;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author auron
 */
public interface IGitRepo {
    public void addEntityManagerFactory(EntityManagerFactory emf);
    public List<GitRepo> getAllGitRepo();
    public GitRepo getGitRepo(Long id);
    public EntityManager getEntityManager();
    
}
