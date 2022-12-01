"use strict";
module.exports = class Support {

    constructor(email, reason, description, comments){
        this.email = email;
        this.reason = reason;
        this.description = description;
        this.comments =comments;
    }

    // getters
    getEmail(){
        return this.email;
    }
    
    getReason(){
        return this.reason;
    }

    getDescription(){
        return this.description;
    }

    getComments(){
        return this.comments;
    }

    // setters
    setEmail(newEmail){
        this.email = newEmail;
    }

    setReason(newReason){
        this.reason = newReason;
    }

    setDescription(newDescription){
        this.description = newDescription;
    }

    setComments(newComments){
        this.comments(newComments);
    }
}