"use strict";
module.exports = class Customer {

    constructor(_id, email, name, password, roleId){
        this._id = _id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.roleID = roleId;
    }

    // getters
    getId(){
        return this._id;
    }

    getEmail(){
        return this.email;
    }

    getName(){
        return this.name;
    }

    getPassword(){
        return this.password;
    }

    getRoleID(){
        return this.roleID;
    }

    getHomeAddress(){
        return this.home_address;
    }

    getProfilePicture(){
        return this.customer_pp;
    }

    getCarName(){
        return this.carName;
    }

    getResetPasswordUUID(){
        return this._resetPassworduuid;
    }

    // setters
    setEmail(newEmail){
        try{
            this.email = newEmail;
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

    setPassword(newPassword){
        try{
            this.password = newPassword;
            return true;
        } catch(err){
            return false;
        }
    }

    setProfilePicture(picturePath){
        try{
            this.customer_pp = picturePath;
            return true;
        } catch(err){
            return false;
        }
    }

    setCarName(carName){
        try{
            this.carName = carName;
            return true;
        } catch(err){
            return false;
        }
    }

    setHomeAddress(address){
        try{
            this.home_address = address;
            return true;
        } catch(err){
            return false;
        }
    }

    setResetPasswordUUID(newUUID){
        try{
            this._resetPassworduuid = newUUID;
            return true;
        } catch(err){
            return false;
        }
    }
}