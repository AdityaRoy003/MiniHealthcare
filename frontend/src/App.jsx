import React from 'react';
import RegistrationForm from './components/RegistrationForm.jsx';
import Chatbot from './components/Chatbot.jsx';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>🌿 Healthcare Support Web App</h1>
        <p>Register as a patient or volunteer and get instant support.</p>
      </header>
      <main>
        <RegistrationForm />
        <Chatbot />
      </main>
    </div>
  );
}

export default App;
