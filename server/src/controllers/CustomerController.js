const CustomerDB = require("../DBAccess/CustomerDB");
const Customer = require("../models/Customer");

function insert(_id, email, name, password, roleID, picturePath, carName, address, callback){
    let customer = new Customer(_id, email, name, password, roleID);
    customer.setProfilePicture(picturePath);
    customer.setCarName(carName);
    customer.setHomeAddress(address);

    CustomerDB.insert(customer, (error, user)=>{callback(error, user)});
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

module.exports = {insert, getByID, getByEmail, updateInfo, updatePassword, updatePicture, remove};