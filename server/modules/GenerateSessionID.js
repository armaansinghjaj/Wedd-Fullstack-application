const { v4: uuidv4 } = require('uuid');

let getSession = (req) => {
    req.session.sessionID = uuidv4();
};

module.exports = getSession;