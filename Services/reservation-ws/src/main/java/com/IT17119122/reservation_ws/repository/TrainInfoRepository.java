/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.IT17119122.reservation_ws.repository;

import com.IT17119122.reservation_ws.model.TrainInfo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author inushaV
 */
public interface TrainInfoRepository extends JpaRepository<TrainInfo, Integer>{
    
    @Query("select su from TrainInfo su where su.startLocation = ?1 and su.endLocation = ?2 and su.startTime = ?3")
    TrainInfo findTrainDetails(String start,String end,String time);
    
    @Query(value="select su.location_desc from location su",nativeQuery=true)
    List<String> getLocationList();
    
    @Query("select su.startTime from TrainInfo su")
    List<String> getStartTimeList();
    
    @Query(value="select ge.NIC from gov_employee ge where ge.NIC = ?1",nativeQuery=true)
    String checkNic(String nic);

}
