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
    // get the quiz id
    var qid = $('#quizId').val();

    $.getJSON('/quizData', function(data) {
        data = data['modInfo'];
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let d = data[i];
            if (d.id == qid) {
                // do your quiz checking stuff here
                console.log(d);
                
                
                break;
            }
        }
    });
    var data = require('../data/modInfo.json')['quiz'];
    var question = data['question'];
    if (selected == question.answer) {
        return "Correct!"
    }
    
    else {
        return "Incorrect."
    }
}

