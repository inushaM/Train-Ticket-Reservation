/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.IT17119122.reservation_ws.service;

import com.IT17119122.reservation_ws.model.TrainInfo;
import com.IT17119122.reservation_ws.repository.TrainInfoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author inushaV
 */
@Service
public class TrainInfoServiceImpl {
    
    @Autowired
    TrainInfoRepository repository;
    
    public TrainInfo findTrainDetails(String start,String end,String time){
        return repository.findTrainDetails(start,end,time);
    }
    
    public List<String> getLocationList(){
        return repository.getLocationList();
    }

    public List<String> getStartTimeList(){
        return repository.getStartTimeList();
    }
    
    public String checkNic(String nic){
        return repository.checkNic(nic);
    }
}
