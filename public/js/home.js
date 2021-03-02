'use strict';

$(document).ready(function() {
	initializePage();
})

var auth2; // The Sign-In object.
var googleUser; // The current user.

function initializePage() {
	gapi.load('auth2', function() {
		gapi.auth2.init({

			client_id: '507886246064-dmi1bf43lbqthsiuanb7occuu432vqkm.apps.googleusercontent.com', 

		}).then(function() {
				auth2 = gapi.auth2.getAuthInstance();
				if (auth2.isSignedIn.get() == true)
				{
					googleUser = auth2.currentUser.get();
					var profile = googleUser.getBasicProfile();
					$('#name').text("Welcome " + profile.getName());
				}
				

		});
	});
}

 