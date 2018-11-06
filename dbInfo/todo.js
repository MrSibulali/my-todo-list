var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/user');

mongoose.Promise = Promise;

var todoSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: 'Cannot be blank'
    },
    color: {
        type: 'string',
        default: 'black'
    },
    done: {
        type: 'string',
        default: 'Unchecked'
    },
    date_created: {
        type: Date,
        default: Date.now
    },
});



var todo = mongoose.model('todo', todoSchema);
module.exports = todo;