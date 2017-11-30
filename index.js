"use strict";

/**
 * Say Hello World
 * @param {String} password - Enter sentence containg "gci"
 * @returns {Promise}
 */
module.exports = (password) => {
    return new Promise((resolve, reject) => {
        if(password.search(/gci/i) < 0){
            reject("Password incorrect!");
        }
        resolve("Hello World");
    });
}