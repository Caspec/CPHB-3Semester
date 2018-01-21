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
import javax.persistence.Query;

/**
 *
 * @author auron
 */
public class FacadeGitRepo implements IGitRepo {

    EntityManagerFactory emf;

    public FacadeGitRepo(EntityManagerFactory emf) {
        this.emf = emf;
    }

    public FacadeGitRepo() {

    }

    @Override
    public void addEntityManagerFactory(EntityManagerFactory emf) {
        this.emf = emf;
    }

    @Override
    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    @Override
    public List<GitRepo> getAllGitRepo() {
        EntityManager em = getEntityManager();
        try{
            Query query = em.createQuery("SELECT e FROM GITREPO e");
            return (List<GitRepo>) query.getResultList();
        }catch (Exception e) {
            System.out.println(e);
    }
        return null;
    }

    @Override
    public GitRepo getGitRepo(Long id) {
        EntityManager em = getEntityManager();
        try{
            return em.find(GitRepo.class, id);
        } finally{
            em.close();
        }
    }

}
