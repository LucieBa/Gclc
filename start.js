/////////////////////////////////////////////////////////
//			Requires
/////////////////////////////////////////////////////////
_ = require("lodash") ; // Bibliothèque permettant d'étendre les capacités du JS classique : https://lodash.com/docs
var express = require('express') // Bilbliothèque permettant de créer le serveur web (remplace Apache) ;
var Twig = require('twig'), // Twig module
    twig = Twig.twig;       // Render function



// Création du serveur
var app = express() ;
app.get('/', function (req, res) {
  res.render('main_page.html.twig', {
    message : "Hello World"
  });
})
var server = app.listen(e8888) ;
