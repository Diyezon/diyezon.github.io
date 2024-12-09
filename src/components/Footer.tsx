import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <p className="mb-4">Email: info@diyezon.com</p>
          <p className="mb-6">Yenişehir, Aeropark, Osmanlı Bulvarı No:11 Kat 5, Kurtkoy, 34912 İstanbul, Türkiye</p>
          <a
            href="https://www.linkedin.com/company/diyezon/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-primary-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center mt-8">
          <p>© 2024 Diyezon Technology Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;