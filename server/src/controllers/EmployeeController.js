const EmployeeDB = require("../DBAccess/EmployeeDB");
const Employee = require("../models/Employee");

function insert(_id, email, name, password, roleID, callback){
    let employee = new Employee(_id, email, name, password, roleID);

    EmployeeDB.insert(employee, (error, user)=>{callback(error, user)});
}

function getByID(employee_id, callback){
    EmployeeDB.getByID(employee_id, (error, user)=>{callback(error, user)});
}

function getByEmail(email, callback){
    EmployeeDB.getByEmail(email, (error, user)=>{callback(error, user)});
}

function update(_id, email, name, password, callback){
    let employee = new Employee(_id, email, name, password);

    EmployeeDB.update(employee, (error, user)=>{callback(error, user)});
}

function remove(employee_id, callback){
    EmployeeDB.remove(employee_id, (error, user)=>{callback(error, user)});
}

module.exports = {insert, getByID, getByEmail, update, remove};