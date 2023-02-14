'user strict'

var mongoose = require('mongoose');
Task = mongoose.model('Tasks');

exports.list_all_task = function(req, res) {
    res.json('HELLO');
}