package com.IT17119122.reservation_ws.repository;

import com.IT17119122.reservation_ws.model.SystemUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author inushaV
 */
public interface SystemuserRepository extends JpaRepository<SystemUser, Integer>{
    
        @Query("select su from SystemUser su where su.username = ?1 and su.password = ?2")
        SystemUser findByUsernameandPassword(String username,String password);
}
