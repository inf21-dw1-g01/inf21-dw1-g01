'use strict';

var utils = require('../utils/writer.js');
var UserController = require('../service/UserControllerService');

module.exports.deleteFavoritos = function deleteFavoritos (req, res, next, fav) {
  UserController.deleteFavoritos(fav)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveFavoritos = function retrieveFavoritos (req, res, next, fav) {
  UserController.retrieveFavoritos(fav)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

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

module.exports.updateFavoritos = function updateFavoritos (req, res, next, body, fav) {
  UserController.updateFavoritos(body, fav)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
