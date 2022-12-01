const crypto = require("crypto");

const generateUserID = () => {
    
    // generate unique user id, by taking the time and concatinating it with the random hex
    return crypto.randomBytes(8).toString("hex").concat(new Date().getTime());
};

module.exports = generateUserID;