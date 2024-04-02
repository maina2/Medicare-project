import React, { useState, useEffect } from 'react';
import './consultation.css';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const Consultation = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setMessages([]); // Clear previous chat messages
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const newMessage = { text: message, sender: 'User', time: new Date() };
      socket.emit('message', newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="consultation-page-container">
      <div className="doctor-list-container">
        <h2>Doctors</h2>
        <ul>
          <li onClick={() => handleDoctorSelect('Dr. John Doe')}>Dr. John Doe</li>
          <li onClick={() => handleDoctorSelect('Dr. Jane Smith')}>Dr. Jane Smith</li>
          <li onClick={() => handleDoctorSelect('Dr. Michael Johnson')}>Dr. Michael Johnson</li>
          <li onClick={() => handleDoctorSelect('Dr. Sarah Adams')}>Dr. Sarah Adams</li>
        </ul>
      </div>

      <div className="chat-window-container">
        {selectedDoctor && (
          <>
            <h2>Chatting with {selectedDoctor}</h2>
            <div className="messages-container">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message-container ${msg.sender === 'User' ? 'user-message' : 'doctor-message'}`}
                >
                  <div className="message-text">{msg.text}</div>
                  <div className="message-time">{msg.time.toString()}</div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="input-area-container">
              <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                placeholder="Type your message..."
              />
              <button type="submit">Send</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Consultation;
