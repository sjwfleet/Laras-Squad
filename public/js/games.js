$(document).ready(function() {
    initializePage();
})

function initializePage() {

    console.log("Javascript connected!");

$("button.g").click(answerClick);
// Add any additional listeners here
// example: $("#div-id").click(functionToCall);
}


function answerClick(e) {
console.log("Button clicked")
  // prevent the page from reloading     
e.preventDefault();
   
$(this).css({"background-color": "#1BC47D", "color": "#FFF"});

//$("div.quiz").toggle();


//console.log(gCheck);
//console.log("adding up");
//scoreNew += 500
//$('.score').text(scoreNew);
var x = $(this).text();
$(this).text(gameCheck(x));
}

var score = 0;
var scoreNew = 0;
function gameCheck(selected) {
var gid = $('#gameId').val();

$.getJSON('/gameData', function(data) {
    data = data['gameInfo'];
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        let d = data[i];

        if (d.id == gid) {
            // do your quiz checking stuff here
            console.log(d);

            console.log(d.id);

            for (let i=0; i < d['play'].length; i++) {

                let did = d['play'][i]['answer'];
                console.log(did + " THIS IS THE ANSWER");
                if (did == selected) {

                    console.log("adding up");
                    scoreNew+= 500;
                   
                    $('.score').text(scoreNew);

                    console.log("done did it");

                }
                else {
                    
                    console.log("wrong!!");
                }
             }
        }
    }
});
}

