import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import Angeln from './pages/Angeln'; 
import Auto from './pages/Auto'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auto" element={<Auto />} />
        <Route path="/angeln" element={<Angeln />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

reportWebVitals();
