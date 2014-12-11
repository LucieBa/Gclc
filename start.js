/////////////////////////////////////////////////////////
//			Requires
/////////////////////////////////////////////////////////
_ = require("lodash") ; // Bibliothèque permettant d'étendre les capacités du JS classique : https://lodash.com/docs
var express = require('express') // Bilbliothèque permettant de créer le serveur web (remplace Apache) ;
var Twig = require('twig'), // Twig module
    twig = Twig.twig;       // Render function
fs = require('fs');


// Création du serveur
var app = express() ;
app.get('/', function (req, res) {

  res.render('main_page.html.twig', {
    message : "Hello World"
  });
})

app.get('/logo', function (req, res) {
  fs.readFile('logo.png', function (err, data) {
  if (err) throw err;
  res.write(data);
});

})

var server = app.listen(8888) ;
