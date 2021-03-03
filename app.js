/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var homepage = require('./routes/paths');
var modules = require('./routes/paths');
var games = require('./routes/paths');
var prize = require('./routes/paths');
var gameIns = require('./routes/gameIns');
var indMods = require('./routes/modInfo');
var quiz = require('./routes/paths');
var quizResults = require('./routes/paths');
var gamePlay = require('./routes/paths');
var leaderboard = require('./routes/paths');
var add = require('./routes/add');
var gameScore = require('./routes/paths'); //edit here;

// Example route
// var user = require('./routes/user');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/homepage', homepage.view);
app.get('/modules', modules.view1);
app.get('/games', games.viewG);
app.get('/prize', prize.view3);
app.get('/gamesIns', gameIns.viewG);
app.get('/indMods', indMods.viewM);
app.get('/quiz/:id/:quizNum/', quiz.view4);
app.get('/quizResults', quizResults.view5);
app.get('/gamePlay/:id/:gameNum/', gamePlay.playG);
app.get('/quizData', quizResults.viewJsonData);
app.get('/leaderboard', leaderboard.viewLead);
app.get('/leaderboard/add', add.addScore);
app.get('/gameData', gameScore.viewJsonData2); //edit here



app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

