/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.IT17119122.reservation_ws.controller;

import com.IT17119122.reservation_ws.model.TrainInfo;
import com.IT17119122.reservation_ws.service.TrainInfoServiceImpl;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
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
public class TrainController {
    
    @Autowired
    TrainInfoServiceImpl trainInfoServiceImpl;
    
     /*find train*/
    @RequestMapping(value = "/findtrain", method = RequestMethod.POST)
    public ResponseEntity<TrainInfo> findTrainDetails(@Valid @RequestBody TrainInfo obj) {
        try {
            TrainInfo trainInfo = trainInfoServiceImpl.findTrainDetails(obj.getStartLocation(),obj.getEndLocation(),obj.getStartTime());
            return new ResponseEntity<>(trainInfo, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
        /*get Location List*/
    @RequestMapping(value = "/trarin/location", method = RequestMethod.GET)
    public ResponseEntity<List<String>> getStartLocation() {
        try {
            List<String> startLocationList = trainInfoServiceImpl.getLocationList();
            return new ResponseEntity<>(startLocationList, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

        /*get start time List*/
    @RequestMapping(value = "/trarin/starttime", method = RequestMethod.GET)
    public ResponseEntity<List<String>> getStartTime() {
        try {
            List<String> startTimeList = trainInfoServiceImpl.getStartTimeList();
            return new ResponseEntity<>(startTimeList, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //Check whether NIC it’s valid or not
    @RequestMapping(value = "/checknic/{nic}", method = RequestMethod.POST)
    public ResponseEntity <String> checkNic(@PathVariable(value = "nic") String  govNic) {
        try {
            String nicDetail = trainInfoServiceImpl.checkNic(govNic);
            
            if(nicDetail == null){
                String nic = "invalid";
                return new ResponseEntity<>(nic, HttpStatus.OK);
            }else if(nicDetail != null){
                String nic = "valid";
                return new ResponseEntity<>(nic, HttpStatus.OK);
            }
            return null;
            
        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
