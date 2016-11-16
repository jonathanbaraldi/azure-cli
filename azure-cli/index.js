var express = require('express'),
    http = require('http');
var app = express();

// Parsear o conteudo
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Configuração da requisição, cabeçalhos, etc. CORS
app.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	// Métodos que queremos permitir
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  	res.header("Access-Control-Allow-Headers", "X_CSRF_TOKEN, Origin, X-Requested-With, Content-Type, Accept");
  	next();
});

app.get('/', function(req, res, next) {
	data = {
		"Azure-CLI":"online" 
	};
	res.json(data);
});

http.createServer(app).listen(8080, function() {
  console.log('Azure-CLI online. Port ' + (8080));
});