import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import App from './App.tsx';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);