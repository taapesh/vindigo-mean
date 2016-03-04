var express     = require('express');
var app         = express();
var cors        = require('cors');
var mongoose    = require('mongoose');
var morgan      = require('morgan');
var bodyParser  = require('body-parser');
var methodOverride = require('method-override');

// Connect to db
var database = require('./config/database');
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

// routes
require('./app/routes')(app);

// Start listening for requests
app.listen(3000);
console.log('Listening on port 3000');
