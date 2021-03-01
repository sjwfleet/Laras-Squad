//$(document).ready(function() {
//	initializePage();
//})
const { response } = require('express');


exports.view = function(req, res) {
	res.render('homepage');
}

var modData = require('../modInfo.json');

exports.view1 = function(request, response) {
	console.log(modData);
	response.render('modules', modData);
}

exports.view2 = function(req, res) {
	res.render('games');
}

exports.view3 = function(req, res) {
	res.render('prize');
}

exports.view4 = function(req, res) {
	res.render('quizzes');
}

//const { response } = require('express');

var data = require('../dataIns.json');

exports.viewG = function(request, response){
	console.log(data);
	response.render('games', data);
};


