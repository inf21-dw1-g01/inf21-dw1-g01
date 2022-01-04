'use strict';


/**
 * Delete Filmes -------------- alterei !!!!!
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteFilmes = function(id) {
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
 * Retrieve Filmes --------------- alterei !!!!!!!!
 *
 * id Long 
 * returns Filmes
 **/
exports.retrieveFilme = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM filmes WHERE id = ?", [id], function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res[0]);
      }
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
  });
}


/**
 * Retrieve Filmes ------------- alterei !!!!!
 *
 * returns List
 **/
exports.retrieveFilmes = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM filmes WHERE id = ?", [id], function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res[0]);
      }
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
});
}


/**
 * Update Filmes ----------------- alterei !!!!!
 *
 * body Filmes 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateFilmes = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE filmes set id = ?, original_title = ?, release_date = ?, genre = ?, runtime = ?, language = ?, title = ?, adult = ?", [body.id, body.original_title, body.release_date, body.genre, body.runtime, body.language, body.title, body.adult], function (err, res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(id);
      }
    });
  });
}

