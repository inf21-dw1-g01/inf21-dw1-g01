'use strict';

var utils = require('../utils/writer.js');
var GeneroController = require('../service/GeneroControllerService');

module.exports.retrieveGenero = function retrieveGenero (req, res, next, id) {
  GeneroController.retrieveGenero(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveGeneros = function retrieveGeneros (req, res, next) {
  GeneroController.retrieveGeneros()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
