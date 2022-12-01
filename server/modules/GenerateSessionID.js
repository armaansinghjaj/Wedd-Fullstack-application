const { v4: uuidv4 } = require('uuid');

var loginSessionID = (req) => {
    req.session.sessionID = uuidv4();
};

var signupSessionID = (req) => {
    req.session.sessionID = uuidv4();
};

var rideSessionID = (req) => {
    req.session.sessionID = uuidv4();
};

module.exports = {loginSessionID, signupSessionID, rideSessionID};