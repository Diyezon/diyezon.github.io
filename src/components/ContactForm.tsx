import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        formRef.current?.reset();
      }, 2000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{t.contact.title}</h2>
          
          {status === 'success' ? (
            <div className="text-green-600 text-center py-8">
              <p className="text-xl">{t.contact.form.success}</p>
              <p>{t.contact.form.successSubtitle}</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>

                <input 
                  type="hidden" 
                  name="to_email" 
                  value="umit@diyezon.com" 
                />
                
                <div className="text-sm text-gray-500 mb-4">
                  Your message will be sent to info@diyezon.com
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600 transition-colors disabled:bg-primary-300"
                >
                  {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-center">
                    {t.contact.form.error}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;