import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Patient', message: '' });
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      setError("Please enter a valid email address containing '@'.");
      return;
    }
    try {
      const res = await axios.post('https://minihealthcare.onrender.com/api/registration', formData);
      setResponse(res.data.message);
      setFormData({ name: '', email: '', role: 'Patient', message: '' });
    } catch (err) {
      setResponse("Error submitting form");
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        {error && <p className="error">{error}</p>}
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="Patient">Patient</option>
          <option value="Volunteer">Volunteer</option>
        </select>
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
      {response && <p className="response">{response}</p>}
    </div>
  );
}

export default RegistrationForm;
