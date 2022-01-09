'use strict';

var utils = require('../utils/writer.js');
var FavoritosController = require('../service/FavoritosControllerService');

module.exports.deleteFavoritos = function deleteFavoritos (req, res, next, fav) {
  FavoritosController.deleteFavoritos(fav)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveFavoritos = function retrieveFavoritos (req, res, next, fav) {
  FavoritosController.retrieveFavoritos(fav)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// ----------- ALTEREI !!-----------------
module.exports.updateFavoritos = function updateFavoritos (req, res, next, body, fav) {
  UserController.updateFavoritos(body, fav)
    .then(UserController.retrieveFavoritos) // adicionei esta linha
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
