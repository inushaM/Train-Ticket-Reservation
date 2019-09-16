package com.IT17119122.reservation_ws.service;

import com.IT17119122.reservation_ws.model.SystemUser;
import com.IT17119122.reservation_ws.repository.SystemuserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author inushaV
 */
@Service
public class SystemUserServiceImpl {
    
    
    @Autowired
    SystemuserRepository repository;
    
    
    public SystemUser findByUsernameandPassword(String username,String password) {
        return repository.findByUsernameandPassword(username,password);
    }
    
    public SystemUser saveUser(SystemUser obj){
        return repository.save(obj);
    }
}
