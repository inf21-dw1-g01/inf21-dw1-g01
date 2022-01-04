'use strict';
var sql = require('../utils/db.js');

/**
 * Delete Favoritos ------------- fiz alterações !!!
 *
 * fav Long 
 * no response value expected for this operation
 **/
exports.deleteFavoritos = function(fav) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM filmes WHERE id = ?", [id], function (err, res){
      if (err || !res.affectedRows){
        console.log(err);
        console.log(res);
        reject();
      }
      else{
        console.log(res);
        resolve({"deleted":id});
      }
    });
  });
}


/**
 * Retrieve Favoritos
 *
 * fav Long 
 * returns Filmes
 **/
exports.retrieveFavoritos = function(fav) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "original_title" : "original_title",
  "release_date" : "release_date",
  "genre" : "genre",
  "runtime" : 0,
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


/**
 * Update Favoritos ----------- alterei !!!!!!
 *
 * body Filmes 
 * fav Long 
 * no response value expected for this operation
 **/
exports.updateFavoritos = function(body,fav) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE favoritos set id = ?, original_title = ?, release_date = ?, genre = ?, runtime = ?, language = ?, title = ?, adult = ?", [body.id, body.original_title, body.release_date, body.genre, body.runtime, body.language, body.title, body.adult], function (err, res){
        if(err){
          console.log(err);
          reject(err);
        }
        else{
          console.log(res);
          resolve;
        }
    });
  });
}

