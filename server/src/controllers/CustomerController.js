const CustomerDB = require("../DBAccess/CustomerDB");
const Customer = require("../models/Customer");
const LoginDB = require("../DBAccess/LoginDB")

function insert(_id, email, name, password, roleID, picturePath, carName, address, callback){

    LoginDB.getByEmail(email, (error, result)=>{
        if(error){
            if(error.status === 404){
                let customer = new Customer(_id, email, name, password, roleID);
                customer.setProfilePicture(picturePath);
                customer.setCarName(carName);
                customer.setHomeAddress(address);

                CustomerDB.insert(customer, (error, user)=>{callback(error, user)});
            } else {
                callback(error, null);
            }
        } else {
            callback({
                status: 400,
                message: "Sorry, that email address is already associated with an account."
            }, null);
        }
    })
}

function getByID(customer_id, callback){
    CustomerDB.getByID(customer_id, (error, user)=>{callback(error, user)});
}

function getByEmail(email, callback){
    CustomerDB.getByEmail(email, (error, user)=>{callback(error, user)});
}

function updateInfo(_id, email, name, carName, home_address, callback){
    getByID(_id, (error, user)=>{
        if(error){
            callback(error, null);
        }
        user.setEmail(email);
        user.setName(name);
        user.setCarName(carName);
        user.setHomeAddress(home_address);
        CustomerDB.updateInfo(user, (error, user)=>{callback(error, user)});
    })
}

function updateResetUUID(customer,callback){
    getByID(customer.getId(), (error, user)=>{
        if(error){
            callback(error, null);
        } else {
            CustomerDB.updateResetUUID(customer, (error, user)=>{callback(error, user)});
        }
    })
}

function updatePassword(_id, password, callback){
    getByID(_id, (error, user)=>{
        if(error){
            callback(error, null);
        }
        user.setPassword(password);
        CustomerDB.updatePassword(user, (error, user)=>{callback(error, user)});
    })
}

function updatePicture(_id, picturePath, callback){
    getByID(_id, (error, user)=>{
        if(error){
            callback(error, null);
        }
        user.setProfilePicture(picturePath);
        CustomerDB.updatePicture(user, (error, user)=>{callback(error, user)});
    })
}

function remove(customer_id, callback){
    CustomerDB.remove(customer_id, (error, user)=>{callback(error, user)});
}

module.exports = {insert, getByID, getByEmail, updateInfo, updatePassword, updatePicture, remove,updateResetUUID};