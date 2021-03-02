'use strict';

$(document).ready(function() {
	initializePage();
})

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  document.location.href = 'homepage'
}

function initializePage() {
	$('.sign-in').click(loginClick);
}

function loginClick(e) {
	document.location.href = 'homepage';
}