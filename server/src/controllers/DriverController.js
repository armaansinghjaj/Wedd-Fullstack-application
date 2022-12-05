const DriversDB = require("../DBAccess/DriversDB");
const Drivers = require("../models/Drivers");

function startShift(_driversSID, _d1ID, _d2ID, _carID, lat, long, callback){
    const drivers = new Drivers(_driversSID, _d1ID, _d2ID, _carID, lat, long);
    DriversDB.startShift(drivers, (error, result)=>{callback(error, result)});
}

function getRequests(_driversSID, callback){
    DriversDB.getRequests(_driversSID, (error, result)=>{callback(error, result)});
}

function endShift(_driversSID, callback){
    DriversDB.endShift(_driversSID, (error, result)=>{callback(error, result)});
}

module.exports = {startShift, getRequests, endShift};