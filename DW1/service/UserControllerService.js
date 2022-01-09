'use strict';
var sql = require('../utils/db.js');



/**
 * Retrieve User
 *
 * returns List
 **/
exports.retrieveUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "mail" : "mail",
  "last_name" : "last_name",
  "id" : 0,
  "first_name" : "first_name"
}, {
  "mail" : "mail",
  "last_name" : "last_name",
  "id" : 0,
  "first_name" : "first_name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve User
 *
 * id Long 
 * first_name String 
 * last_name String 
 * mail String 
 * returns User
 **/
exports.retrieveUsers = function(id,first_name,last_name,mail) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "mail" : "mail",
  "last_name" : "last_name",
  "id" : 0,
  "first_name" : "first_name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

