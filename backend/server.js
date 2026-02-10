const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.set('bufferCommands', false); // Disable buffering so we see errors immediately if not connected

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error!");
    console.error("Error Name:", err.name);
    console.error("Error Message:", err.message);
    console.error("Check your MONGO_URI in Render Environment Variables.");
  });

mongoose.connection.on('error', err => {
  console.error("Mongoose default connection error:", err);
});

mongoose.connection.on('disconnected', () => {
  console.log("Mongoose default connection disconnected");
});

// Routes
const registrationRoutes = require('./routes/registrationRoutes');
app.use('/api/registration', registrationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
