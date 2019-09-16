/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.IT17119122.reservation_ws.model;

/**
 *
 * @author inushaV
 */
public class LoginResponse {
    
    private String responseCode;
    private String responseMessage;
    private SystemUser systemUser;
    
    public LoginResponse(String responseCode, String responseMessage, SystemUser systemUser) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.systemUser = systemUser;
    }

    public LoginResponse() {
    }

    public String getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(String responseCode) {
        this.responseCode = responseCode;
    }

    public String getResponseMessage() {
        return responseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
    }
    
    public SystemUser getSystemUser() {
        return systemUser;
    }

    public void setSystemUser(SystemUser systemUser) {
        this.systemUser = systemUser;
    }
}
