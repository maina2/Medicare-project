import './symptomschecker.css'
import React from 'react';
import ChatBot from 'react-simple-chatbot';

const MyChatbot = () => {
  const steps = [
    { id: '1', message: 'Hello!', trigger: '2' },
    { id: '2', message: 'How can I help you?', trigger: '3' },
    // Add more steps as needed
  ];

  return (
    <div>
      <ChatBot steps={steps} />
    </div>
  );
};

export default MyChatbot;