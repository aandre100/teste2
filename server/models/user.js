
var mongoose = require('mongoose');



var User = mongoose.model('User', {
  user: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 15
  }
});
module.exports={User}
