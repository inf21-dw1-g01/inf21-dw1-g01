'use strict';



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

