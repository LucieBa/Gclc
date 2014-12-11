/////////////////////////////////////////////////////////
//			Requires
/////////////////////////////////////////////////////////
_ = require("lodash") ; // Bibliothèque permettant d'étendre les capacités du JS classique : https://lodash.com/docs
var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));

var Twig = require('twig'), // Twig module
    twig = Twig.twig;       // Render function
fs = require('fs');


var news = JSON.parse('{"data": [] }');


// Création du serveur
app.get('/', function (req, res) {

  res.render('main_page.html.twig', {
    message : news
  });
})

app.get('/logo', function (req, res) {
  	fs.readFile('logo.png', function (err, data) {
  	if (err) throw err;
  		res.write(data);
	});

})

app.post('/News', function (req, res) {
	news.data.push({ 'titre': req.body.titre, 'contenu': req.body.contenu });
  	res.json(news);
});

var server = app.listen(8888) ;
