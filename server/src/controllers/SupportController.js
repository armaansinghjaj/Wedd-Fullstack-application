const SupportDB = require("../DBAccess/SupportDB");
const Support = require("../models/Support");

function insert(email, reason, description, comments, callback){
    let support = new Support(email, reason, description, comments);

    SupportDB.insert(support, (error, user)=>{callback(error, user)});
}

function getAll(callback){
    SupportDB.getAll((error, user)=>{callback(error, user)});
}

function getByEmail(email, callback){
    SupportDB.getByEmail(email, (error, user)=>{callback(error, user)});
}

function remove(email, callback){
    SupportDB.remove(email, (error, user)=>{callback(error, user)});
}

module.exports = {insert, getAll, getByEmail, remove};