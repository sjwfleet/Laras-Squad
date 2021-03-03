//$(document).ready(function() {
//	initializePage();
//})
const { response } = require('express');

exports.view = function(req, res) {
	res.render('homepage');
}

var modData = require('../public/data/modInfo.json');

exports.viewJsonData = function(request, response) {
	response.json(modData);
}

exports.view1 = function(request, response) {
	console.log(modData);
	response.render('modules', modData);
}

exports.view3 = function(req, res) {
	res.render('prize');
}

	var lead = require('../leader.json');
exports.viewLead = function(req, res) {
	console.log(lead);
	res.render('leaderboard', lead);
 }

exports.view4 = function(req, res) {
	var lessonId = parseInt(req.params.id);
	var quizNum = parseInt(req.params.quizNum);
	var foundQuiz = false;

	for (let i = 0; i < modData.modInfo.length; i++) {
		let data = modData.modInfo[i];

		if (data.id == lessonId) {
			// we found what we're looking for

			foundQuiz = true;
			res.render('quiz', data);
		}
	}

	if (!foundQuiz) {
		// quiz was not found, do some error handling here...
	}
}

exports.view5 = function(req, res) {
	res.render('quizResults');
}

//const { response } = require('express');

var dataG = require('../dataIns.json');

exports.viewG = function(request, response){
	console.log(dataG);
	response.render('games', dataG);
};

exports.playG = function(req, res){
	var gameId = parseInt(req.params.id);
	var gameNum = parseInt(req.params.gameNum);
	var foundGame = false;

	for (let i = 0; i < dataG.gameInfo.length; i++) {
		let data = dataG.gameInfo[i];

		if (data.id == gameId) {
			// we found what we're looking for

			foundGame = true;
			res.render('gamePlay', data);
		}
	}

	if (!foundGame) {
		// quiz was not found, do some error handling here...
	}
}


