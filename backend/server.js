const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
})
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error!");
    console.error("Reason:", err.message);
    console.error("Tip: Check if your MongoDB Atlas IP Whitelist allows access from everywhere (0.0.0.0/0)");
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
