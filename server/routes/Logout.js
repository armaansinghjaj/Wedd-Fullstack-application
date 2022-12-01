const express = require("express");
const router = express.Router();
// const loadDefaultValues = require("../modules/LoadDefaultValues");

router.post("/", (req, res)=>{
    if(req.session.sessionID === req.body.__sid){
        req.session.sessionID = null;
        req.session.access = null; 
        req.session.user = null;
        return res.send({
            logout: true,
        })
    } else {
        return res.send({
            logout: false,
        })
    }
})

module.exports = router;