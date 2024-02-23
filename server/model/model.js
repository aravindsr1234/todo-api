const mongoose = require('mongoose');

const task = mongoose.Schema({
    title: String,
    description: String,
    date: String,
    category: String,
    completed: String
})

const taskCollection = mongoose.model('task', task);

module.exports = taskCollection;

