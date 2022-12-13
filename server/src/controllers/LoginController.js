const LoginDB = require("../DBAccess/LoginDB");

function getById(id, callback){
    LoginDB.getById(id, (error, user)=>{callback(error, user)});
}

function getByEmail(email, callback){
    LoginDB.getByEmail(email, (error, user)=>{callback(error, user)});
}
function getByresetUUID(UUID, callback){
    LoginDB.getByResetUUID(UUID, (error, user)=>{callback(error, user)});
}

module.exports = {getByEmail,getByresetUUID, getById};