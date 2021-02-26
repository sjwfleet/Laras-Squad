//$(document).ready(function() {
//	initializePage();
//})


exports.view = function(req, res) {
	res.render('homepage');
}

exports.view1 = function(req, res) {
	res.render('modules');
}

exports.view2 = function(req, res) {
	res.render('games');
}

exports.view3 = function(req, res) {
	res.render('prize');
}

const { response } = require('express');
var data = require('../dataIns.json');

exports.viewG = function(request, response){
	console.log(data);
	response.render('games', data);
};
