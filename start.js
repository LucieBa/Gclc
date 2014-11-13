
_ = require("lodash") ; // Bibliothèque permettant d'étendre les capacités du JS classique : https://lodash.com/docs
var express = require('express') // Bilbliothèque permettant de créer le serveur web (remplace Apache) ;

// Création du serveur
var app = express() ;
app.get('/', function (req, res) {
  res.send('Hello World!')
})
var server = app.listen(8888) ;
