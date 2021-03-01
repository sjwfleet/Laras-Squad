var data = require('../modInfo.json');

exports.viewM = function(request, response){
    var mod = request.query.mod;
    var foundMod = false;
    data.modInfo.forEach(function(info) {
        // we found the mod!
        if (info.title === mod) {
            foundMod = true;
            response.render('indMods', info);
        }
    });

    if (!foundMod) {
        console.log('Cannot find module.');
        // To-DO: render an error page here
        // response.render('error');
    }
};


