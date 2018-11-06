var express = require('express');
var routers = express.Router();
var myDB = require('../dbInfo/todo');


routers.get('/', (req, res) => {
    myDB.find()
    .then(data =>{
        res.send(data);
    })
});

routers.delete('/delete', (req, res) => {
    myDB.remove(req.body)
    .then(data=>{
        res.send(`Deleted Successfully ${data}`);
    })
});

routers.post('/update', (req, res) => {
    var toUpdate = {};
    var newValue = {};
    var doneOrnot= {};
    toUpdate._id = req.body._id;
    newValue.color = req.body.color;
    doneOrnot.done = req.body.itDone;

    myDB.update(toUpdate,
    {$set:newValue},{multi:true})
    .then(data=>{
        res.send('Updated Successfully');
    })

    myDB.update(toUpdate,
        {$set:doneOrnot},{multi:true})
        .then(data=>{
            res.send('Updated Successfully');
        })
});

routers.post('/add', (req, res) => {
    var task = req.body;

    myDB.create(task)
    .then(function(newTodo){
        //res.status(201).json(newTodo);
        console.log(task);
        
        res.send('Task created successfully')
    })
    .catch(function(err){
        res.send(err);
    })
    
});  

module.exports = routers;