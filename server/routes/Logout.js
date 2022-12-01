const express = require("express");
const router = express.Router();
// const loadDefaultValues = require("../modules/LoadDefaultValues");

router.post("/", (req, res)=>{
    if(req.session._uid === req.body.__sid){
        req.session.sessionID = null;
        req.session.access = null; 
        req.session.user = null;
        return res.status(200).send({
            logout: true,
        })
    } else {
        return res.status(500).send({
            logout: false,
        })
    }
})

module.exports = router;