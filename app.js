var express = require('express')
  , app = express.createServer();

app.configure(function(){
    app.set('view engine', 'handlebars');
    app.set("view options", { layout: false }) 
});



app.get('/', function(req, res){

    var data = {
        name: "Ford Prefect",
        home: "a small planet somewhere in the vicinity of Betelgeuse"
    }

    res.render('index.html', data);
});

app.listen(3000);
