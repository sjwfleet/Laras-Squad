// learned from https://simplestepscode.com/javascript-quiz-tutorial/

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

    $(".q").click(answerSelected);
    console.log("wtf");
  

}

function answerSelected(e) {
    e.preventDefault();
    console.log("getting there");

	var x = $(this).text();
	$(this).text(answer(x));
}

function answer(selected) {
    if (selected == "yes??") {
        return "Correct!"
    }
    else if (selected == "yes.") {
        return "Incorrect."
    }
     else if (selected == "no!!") {
        return "Incorrect."
     }
     else if (selected == "yES...") {
        return "Incorrect."
     }
}

