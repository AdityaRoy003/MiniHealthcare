const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// POST registration
router.post('/', async (req, res) => {
    try {
        const newEntry = new Registration(req.body);
        await newEntry.save();
        res.json({ success: true, message: "Registration successful!" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET all registrations
router.get('/', async (req, res) => {
    try {
        const entries = await Registration.find();
        res.json(entries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
