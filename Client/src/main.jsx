import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import UserContextProvider from './UserContext';

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);