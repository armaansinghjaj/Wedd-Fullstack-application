const LoginDB = require("../DBAccess/LoginDB");

function getByEmail(email, callback){
    LoginDB.getByEmail(email, (error, user)=>{callback(error, user)});
}

module.exports = {getByEmail};