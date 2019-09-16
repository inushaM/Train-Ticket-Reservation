/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.IT17119122.reservation_ws.controller;

import com.IT17119122.reservation_ws.model.LoginRequest;
import com.IT17119122.reservation_ws.model.LoginResponse;
import com.IT17119122.reservation_ws.model.SystemUser;
import com.IT17119122.reservation_ws.service.SystemUserServiceImpl;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author inushaV
 */
@RestController
@CrossOrigin
public class UserController {
    
    @Autowired
    SystemUserServiceImpl systemUserServiceImpl;
    
    
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        
        try{
        
            SystemUser systemUser = systemUserServiceImpl.findByUsernameandPassword(loginRequest.getUsername(),loginRequest.getPassword());
        
            if(systemUser == null) {
                LoginResponse loginResponse = new LoginResponse();
                
                loginResponse.setResponseCode("LOGIN_FAILED’");
                loginResponse.setResponseMessage("Login failed");
                return new ResponseEntity<>(loginResponse, HttpStatus.OK);        
            }
        
            LoginResponse loginResponse = new LoginResponse();
            
            loginResponse.setResponseCode("LOGIN_SUCCESS");
            loginResponse.setResponseMessage("Successfully logged in");
            loginResponse.setSystemUser(systemUser);
            return new ResponseEntity<>(loginResponse, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
        /*to save a SystemUser*/
    @RequestMapping(value = "/saveuser", method = RequestMethod.POST)
    public ResponseEntity<SystemUser> saveCpbMeetingsDetails(@Valid @RequestBody SystemUser systemUser) {
        try {
            //Save SystemUser
            SystemUser obj = systemUserServiceImpl.saveUser(systemUser);
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    
}
