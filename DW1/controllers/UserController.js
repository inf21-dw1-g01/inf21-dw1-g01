'use strict';

var utils = require('../utils/writer.js');
var UserController = require('../service/UserControllerService');


module.exports.retrieveUser = function retrieveUser (req, res, next) {
  UserController.retrieveUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveUsers = function retrieveUsers (req, res, next, id, first_name, last_name, mail) {
  UserController.retrieveUsers(id, first_name, last_name, mail)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
