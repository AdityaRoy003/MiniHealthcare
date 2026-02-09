const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true ,match: /.+\@.+\..+/},
    role: { type: String, enum: ['Patient', 'Volunteer'], required: true },
    message: { type: String }

}, { timestamps: true });

module.exports = mongoose.model('Registration', RegistrationSchema);
