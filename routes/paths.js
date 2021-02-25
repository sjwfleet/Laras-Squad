//$(document).ready(function() {
//	initializePage();
//})


function initializePage() {
}


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
