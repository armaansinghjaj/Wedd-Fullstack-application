const express = require("express");
const router = express.Router();
const LoginController = require("../src/controllers/LoginController");

router.get("/:id", (req, res) => {
    if(req.session._uid === req.params.id){
        LoginController.getById(req.params.id, (error, user)=>{
            if(error){
                return res.status(error.status).send(error);
            } else {
                return res.status(200).send({
                    user:{
                        name: user.getName(),
                        role: user.getRoleID()
                    }
                });
            }
        })
    } else {
        return res.status(403).send({
            status: 403,
            message: "Please try loggin in again"
        });
    }
})

module.exports = router;