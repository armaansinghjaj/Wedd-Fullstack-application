"use strict";
module.exports = class Background {

    constructor(){
        this.homepage = null;
    }

    getHomepage(){
        return this.homepage;
    }

    setHomepage(newHomepage){
        this.homepage = newHomepage;
    }
}