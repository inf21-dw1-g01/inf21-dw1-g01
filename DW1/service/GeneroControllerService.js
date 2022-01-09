'use strict';


/**
 * Retrieve Genero
 *
 * returns List
 **/
exports.retrieveGenero = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "genero" : "genero"
}, {
  "id" : 0,
  "genero" : "genero"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Genero
 *
 * id Long 
 * returns Genero
 **/
exports.retrieveGeneros = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "genero" : "genero"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

