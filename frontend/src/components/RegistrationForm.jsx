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
      let apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      // Remove trailing slash if it exists to avoid double slashes
      if (apiBaseUrl.endsWith('/')) {
        apiBaseUrl = apiBaseUrl.slice(0, -1);
      }

      console.log("Attempting to submit to:", `${apiBaseUrl}/api/registration`);

      const res = await axios.post(`${apiBaseUrl}/api/registration`, formData, {
        headers: { "Content-Type": "application/json" }
      });
      setResponse(res.data.message);
      setFormData({ name: '', email: '', role: 'Patient', message: '' });
    } catch (err) {
      const errorMsg = err.response?.data?.error || err.response?.data?.message || err.message;
      console.error("Full error details:", err.response?.data || err);
      setResponse(`Error: ${errorMsg}`);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        {error && <p className="error">{error}</p>}
        <select name="role" value={formData.role} onChange={handleChange} required>
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
