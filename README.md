# 🌿 Healthcare Support Web App

A full-stack MERN application that enables patients and volunteers to register with mandatory email validation and interact with a simple AI-powered FAQ chatbot. The backend stores registrations in MongoDB, while the frontend provides a clean UI with instant auto-responses.

---

## ⚙️ Backend Setup
```bash
cd backend
npm install express mongoose cors dotenv
Create .env file:

Code
MONGO_URI=mongodb://127.0.0.1:27017/healthcareDB
PORT=5000
JWT_SECRET=your_jwt_secret_key
Run server:

bash
node server.js
MongoDB Connected
Server running on port 5000
🎨 Frontend Setup
bash
cd frontend
npm install
npm run dev
Open browser at:

Code
http://localhost:5173
🧪 Features
Registration form with mandatory email validation (@ required).

Backend generates personalized auto-response after registration.

Simple FAQ chatbot for common queries.

Data stored in MongoDB (viewable via Compass or Atlas).

🚀 Deployment
Render (Recommended)
Deploy backend as a Web Service.

Deploy frontend as a Static Site.

Use MongoDB Atlas for cloud database.

Update frontend API calls to point to Render backend URL.

Alternative
Backend → Render/Railway/Heroku

Frontend → Vercel/Netlify

Database → MongoDB Atlas

📌 Example Workflow
User registers → form validates email.

Backend saves data → returns auto-response.

Response displayed on frontend.

Data visible in MongoDB Compass/Atlas.

🛠 Tech Stack
Frontend: React (Vite)

Backend: Node.js, Express

Database: MongoDB (Compass/Atlas)

Hosting: Render (or Vercel + Render combo)
