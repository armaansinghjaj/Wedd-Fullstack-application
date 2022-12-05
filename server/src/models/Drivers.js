"use strict";
module.exports = class Drivers {

    constructor(_sid, d1_id, d2_id, car_id, lat, lon){
        this._sid = _sid;
        this.d1_id = d1_id;
        this.d2_id = d2_id;
        this.car_id = car_id;
        this.lat = lat;
        this.lon = lon;
    }

    // getters
    getSID(){
        return this._sid;
    }

    getD1ID(){
        return this.d1_id;
    }

    getD2ID(){
        return this.d2_id;
    }

    getCarID(){
        return this.car_id;
    }

    getLatitude(){
        return this.lat;
    }

    getLongitude(){
        return this.lon;
    }

    // setters
    setSID(newSID){
        try{
            this._sid = newSID;
            return true;
        } catch(err){
            return false;
        }
    }

    setD1ID(newD1ID){
        try{
            this.d1_id = newD1ID;
            return true;
        } catch(err){
            return false;
        }
    }

    setD2ID(newD2ID){
        try{
            this.d2_id = newD2ID;
            return true;
        } catch(err){
            return false;
        }
    }

    setCarID(newCarID){
        try{
            this.car_id = newCarID;
            return true;
        } catch(err){
            return false;
        }
    }

    setLocation(newLocation){
        try{
            this.location = newLocation;
            return true;
        } catch(err){
            return false;
        }
    }
}