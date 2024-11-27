import React from 'react';
import { Hash, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                <Hash className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Diyezon Technology</span>
            </div>
            <p className="text-gray-400">
              Empowering businesses through innovative technology solutions and expert guidance.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Software Development',
                'Business Consultancy',
                'Training Programs',
                'Project Management',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="hover:text-primary-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <p className="text-gray-400">Email: info@diyezon.com</p>
              <p className="text-gray-400">Address: Yenişehir, Aeropark, Osmanlı Bulvarı No:11 Kat 5, Kurtkoy, 34912 İstanbul, Türkiye</p>
              <div className="flex gap-4">
                {[
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Linkedin, label: 'LinkedIn' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="hover:text-primary-400 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Diyezon Technology Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;