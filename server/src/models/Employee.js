"use strict";
module.exports = class Employee {

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

    getResetPasswordUUID(newUUID){
        return this._resetPassworduuid;
    }

    getRegisterAccountUUID(newUUID){
        return this._registerAccountuuid;
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

    setResetPasswordUUID(newUUID){
        try{
            this._resetPassworduuid = newUUID;
            return true;
        } catch(err){
            return false;
        }
    }

    setRegisterAccountUUID(newUUID){
        try{
            this._registerAccountuuid = newUUID;
            return true;
        } catch(err){
            return false;
        }
    }
}