const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/LoadDefaultValues");
const LoginController = require("../src/controllers/LoginController");

router.get("/:id", (req, res) => {
    LoginController.getById(req.params.id, (error, user)=>{
        if(error){
            return res.status(error.status).send(error);
        } else {
            return res.status(200).send(user._id);
        }
    })
});

module.exports = router;