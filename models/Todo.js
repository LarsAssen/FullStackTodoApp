const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    priority:{
        type: Number,
        required: false
    },
    points:{
        type: Number,
        required: false
    },
    category:{
        type: String,
        required: false
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);