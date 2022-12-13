const EmployeeDB = require("../DBAccess/EmployeeDB");
const Employee = require("../models/Employee");

function getAll(callback){
    EmployeeDB.getAll((error, list)=>{callback(error, user)});
}

function insert(_id, email, name, password, roleID, callback){
    getByEmail(email, (error, user)=>{
        if(error){
            if(error.status === 404){
                let employee = new Employee(_id, email, name, password, roleID);
                EmployeeDB.insert(employee, (error, user)=>{callback(error, user)});
            } else {
                callback(error, null);
            }
        } else{
            callback({
                status: 409,
                message: "User already exists"
            }, null);
        }
    })
}

function getAllDrivers(callback){
    EmployeeDB.getAllDrivers((error, user)=>{callback(error, user)});
}

function getAllAdmins(callback){
    EmployeeDB.getAllAdmins((error, user)=>{callback(error, user)});
}

function getByID(employee_id, callback) {
	EmployeeDB.getByID(employee_id, (error, user) => {callback(error, user);});
}

function getByEmail(email, callback) {
	EmployeeDB.getByEmail(email, (error, user) => {
		callback(error, user);
	});
}

function update(_id, email, name, passwordFlag, password, emailFlag, callback) {
    if(passwordFlag === 1){ // PASSWORD CHANGED
        getByID(_id, (error, employee)=>{
            if(error){
                callback(error, null);
            } else {
                employee.setPassword(password);
                EmployeeDB.update(employee, (error, result) => {callback(error, result)});
            }
        });
    } else if(passwordFlag === 0){ // PASSWORD NOT CHANGED
        if(emailFlag === 1){ // EMAIL IS CHANGED
            getByEmail(email, (error, user)=>{
                if(error){
                    if(error.status === 404){
                        getByID(_id, (error, employee)=>{
                            if(error){
                                callback(error, null);
                            } else {
                                employee.setEmail(email);
                                employee.setName(name);
                                EmployeeDB.update(employee, (error, user) => {
                                    callback(error, user);
                                });
                            }
                        });
                    } else {
                        callback(error, null);
                    }
                } else {
                    callback({
                        status: 409,
                        message: "Use a unique email address."
                    }, null);
                }
            })
        } else if(emailFlag === 0) { // EMAIL IS NOT CHANGED
            getByID(_id, (error, employee)=>{
                if(error){
                    callback(error, null);
                } else {
                    employee.setName(name);
                    EmployeeDB.update(employee, (error, user) => {callback(error, user)});
                }
            });
        }
    }
}

function updateResetUUID(employee, callback) {
	getByID(employee.getId(), (error, user) => {
		if (error) {
			callback(error, null);
		} else {
			EmployeeDB.updateResetUUID(user, (error, user) => {
				callback(error, user);
			});
		}
	});
}

function remove(employee_id, callback){
    getByID(employee_id, (error, user)=>{
        if(error){
            callback(error, user);
        } else {
            if(user){
                EmployeeDB.remove(employee_id, (error, result)=>{callback(error, result)});
            } else {
                callback(error, user);
            }
        }
    })
}

module.exports = {getAll, insert, getAllAdmins, getAllDrivers, getByID, getByEmail, update, remove, updateResetUUID};