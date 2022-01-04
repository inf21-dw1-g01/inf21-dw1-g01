'use strict';


/**
 * Delete Filmes
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteFilmes = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve Filmes
 *
 * id Long 
 * returns Filmes
 **/
exports.retrieveFilme = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "original_title" : "original_title",
  "release_date" : "release_date",
  "genre" : "genre",
  "runtime" : 6,
  "language" : "language",
  "id" : 0,
  "title" : "title",
  "adult" : "adult"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Filmes
 *
 * returns List
 **/
exports.retrieveFilmes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "original_title" : "original_title",
  "release_date" : "release_date",
  "genre" : "genre",
  "runtime" : 6,
  "language" : "language",
  "id" : 0,
  "title" : "title",
  "adult" : "adult"
}, {
  "original_title" : "original_title",
  "release_date" : "release_date",
  "genre" : "genre",
  "runtime" : 6,
  "language" : "language",
  "id" : 0,
  "title" : "title",
  "adult" : "adult"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Filmes
 *
 * body Filmes 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateFilmes = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

