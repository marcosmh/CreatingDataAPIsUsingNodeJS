'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Create_date: {
        type: Date,
        required: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoig', 'completed']
        }],
        default: ['pending']
    }

});

module.exports = mongoose.model('Tasks',TaskSchema);