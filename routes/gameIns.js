var data = require('../public/data/dataIns.json');

exports.viewG = function(request, response){
    var game = request.query.game;
    var foundGame = false;
    data.gameInfo.forEach(function(info) {
        // we found the game!
        if (info.name === game) {
            foundGame = true;
            response.render('gameIns', info);
        }
    });

    if (!foundGame) {
        console.log('Cannot find game.');
        // To-DO: render an error page here
        // response.render('error');
    }
};






