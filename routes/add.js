const { response } = require("express");
var data = require("../leader.json");

exports.addScore = function(request, response) {  
	console.log("ITS PASSING THRU"); 
	gapi.load('auth2', function() {
		gapi.auth2.init({

			client_id: '507886246064-dmi1bf43lbqthsiuanb7occuu432vqkm.apps.googleusercontent.com', 

		}).then(function() {
				auth2 = gapi.auth2.getAuthInstance();
				if (auth2.isSignedIn.get() == true)
				{
					console.log("HELLO");
					googleUser = auth2.currentUser.get();
					var profile = googleUser.getBasicProfile();
					var newScoreGoogle = {"name": profile.getName(), "score": 0, "imageURL": profile.getImageUrl()};
					data.users.push(newScoreGoogle);
					response.render('leaderboard', data);
				}
				else {
					//Your code goes here
					var newScore = {"name": request.query.name, "score": request.query.score, "imageURL": "/images/girl_icon.png"};
					console.log("New score on Leaderboard");
					data.users.push(newScore);
					response.render('leaderboard', data);
				}
				

		});
	});
}