const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// POST route
router.post('/', async (req, res) => {
  try {
    console.log("Incoming data:", req.body);  // Debug log
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.json({ message: "Registration successful!" });
  } catch (err) {
    console.error("Error saving registration:", err); // Full error log
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
