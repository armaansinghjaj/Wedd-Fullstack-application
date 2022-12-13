const BackgroundDB = require("../DBAccess/BackgroundDB");
const Background = require("../models/Background");

function get(){

}

function insert(_id, email, name, password, roleID, picturePath, carName, address, callback){

}

module.exports = {insert, getByID, getByEmail, updateInfo, updatePassword, updatePicture, remove,updateResetUUID};