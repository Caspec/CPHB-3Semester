package facader;

import entity.Customer;
import entity.ItemType;
import entity.Orderline;
import entity.Ordero;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;


public class Facade {

    EntityManagerFactory emf;

    EntityManager em;

    public Facade(EntityManagerFactory emf) {
        this.emf = emf;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    //Customer
    public void createCustomer(Customer customer) {
        em = getEntityManager();
        em.getTransaction().begin();
        em.persist(customer);
        em.getTransaction().commit();
        em.close();
    }

    public Customer getCustomer(long id) {
        em = getEntityManager();
        em.getTransaction().begin();
        Customer customer = em.find(Customer.class, id);
        em.getTransaction().commit();
        em.close();

        return customer;
    }

    public List<Customer> getCustomers() {

        EntityManager em = emf.createEntityManager();

        List<Customer> customers = null;

        try {
            em.getTransaction().begin();
            customers = em.createQuery("Select u from Customer u").getResultList();
            em.getTransaction().commit();
            return customers;
        } finally {
            em.close();
        }
    }

    public void deleteCustomer(long id) {
        em = getEntityManager();
        em.getTransaction().begin();
        Customer cus = em.find(Customer.class, id);
        em.remove(cus);
        em.getTransaction().commit();
        em.close();
    }

    public void editCustomer(Customer cust) {
        em = getEntityManager();
        em.getTransaction().begin();
        em.merge(cust);
        em.getTransaction().commit();
        em.close();
    }

    //Order
    public void createOrder(Ordero order) {
        em = getEntityManager();
        em.getTransaction().begin();
        em.persist(order);
        em.getTransaction().commit();
        em.close();
    }

    public void setOrderToCus(Ordero order, long customerID) {
        Customer customer = new Customer();
        customer.setId(customerID);
        customer.addOrder(order);
        editCustomer(customer);
    }

    public Ordero findOrder(long id) {
        em = getEntityManager();
        em.getTransaction().begin();
        Ordero order = em.find(Ordero.class, id);
        em.getTransaction().commit();
        em.close();

        return order;
    }

    //ItemType
    public void createItemType(ItemType item) {
        em = getEntityManager();
        em.getTransaction().begin();
        em.persist(item);
        em.getTransaction().commit();
        em.close();
    }

    //OrderLine
    public void createOrderline(Orderline ol) {
        em = getEntityManager();
        em.getTransaction().begin();
        em.persist(ol);
        em.getTransaction().commit();
        em.close();
    }

    //TotalPrice Calc //Find the total price of an order
    public double calcPrice(long orderoID) {
        double price = 0;

        Ordero or = findOrder(orderoID);
        price+=calcOrderPrice(or, price);
        return price;
    }

    public double calcPriceFromCus(long customerID) {
        double price = 0;
        Customer customer = getCustomer(customerID);
        List<Ordero> list = customer.getOrderList();
        for (int i = 0; i < list.size(); i++) {
            price+=calcOrderPrice(list.get(i), price);
        }
        return price;
    }
    
    public double calcOrderPrice(Ordero order, double price){
        List<Orderline> ol = order.getOrderList();
        for (int i = 0; i < ol.size(); i++) {
            price += ol.get(i).getCost();
        }
        return price;
    }

}
