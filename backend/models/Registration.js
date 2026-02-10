const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    match: /.+\@.+\..+/ 
  },
  role: { 
    type: String, 
    enum: ['Patient', 'Volunteer'], 
    required: true 
  },
  message: { type: String }
});

module.exports = mongoose.model('Registration', registrationSchema);
