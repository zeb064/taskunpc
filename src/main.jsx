import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { TareasProvider } from './context/TareasContext.jsx';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TareasProvider>
        <App />
      </TareasProvider>
    </BrowserRouter>
  </React.StrictMode>
);