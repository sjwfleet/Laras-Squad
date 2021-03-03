$(document).ready(function() {
    initializePage();
})

function initializePage() {

    console.log("Javascript connected!");

$("button.g").click(answerClick);
// Add any additional listeners here
// example: $("#div-id").click(functionToCall);
}
var score = 0;
var scoreNew = 0;
function answerClick(e) {
console.log("Button clicked")
  // prevent the page from reloading     
  e.preventDefault();
  // In an event handler, $(this) refers to     
  // the object that triggered the event  
   
$(this).css("background-color", "green");
//$("div.quiz").toggle();
console.log("adding up");
scoreNew += 500
$('.score').text(scoreNew);
}

