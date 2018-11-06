var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var myRouters = require('./routers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/client'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.use('/tasks', myRouters);

app.listen(3000, function(){
    console.log("APP IS RUNNING ON PORT " + 3000);
})
