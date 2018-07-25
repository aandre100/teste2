
var {mongoose}= require('../db/mongoose.js');


var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlenght: 2,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo: Todo}
