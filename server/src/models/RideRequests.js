"use strict";
module.exports = class RideRequests {

    constructor(_drivers_sid, _requestId, _customerId, name, email, phone, pickup, destination, paymentType){
        this._drivers_sid = _drivers_sid;
        this._requestId = _requestId;
        this._customerId = _customerId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.pickup = pickup;
        this.destination = destination;
        this.paymentType = paymentType;
    }

    // getters
    getDriversSID(){
        return this._drivers_sid;
    }

    getRequestID(){
        return this._requestId;
    }

    getCustomerID(){
        return this._customerId;
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getPhone(){
        return this.phone;
    }

    getPickup(){
        return this.pickup;
    }
    
    getDestination(){
        return this.destination;
    }
    
    getPaymentType(){
        return this.paymentType;
    }

    // setters
    setDriversSID(newDriverSID){
        try{
            this._drivers_sid = newDriverSID;
            return true;
        } catch(err){
            return false;
        }
    }

    setRequestID(newRequestID){
        try{
            this._requestId = newRequestID;
            return true;
        } catch(err){
            return false;
        }
    }

    setCustomerID(newCustomerID){
        try{
            this._customerId = newCustomerID;
            return true;
        } catch(err){
            return false;
        }
    }

    setName(newName){
        try{
            this.name = newName;
            return true;
        } catch(err){
            return false;
        }
    }

    setEmail(newEmail){
        try{
            this.email = newEmail;
            return true;
        } catch(err){
            return false;
        }
    }
    
    setDestination(newDestination){
        try{
            this.destination = newDestination;
            return true;
        } catch(err){
            return false;
        }
    }

    setPaymentType(newPaymentType){
        try{
            this.paymentType = newPaymentType;
            return true;
        } catch(err){
            return false;
        }
    }
}