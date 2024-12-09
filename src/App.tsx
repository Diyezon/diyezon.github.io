import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { Code2, Users, BookOpen, BarChart3, CheckCircle2, MapPin } from 'lucide-react';

const App = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onContactClick={handleContactClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transforming Ideas into Digital Excellence
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Diyezon Technology delivers cutting-edge software solutions, expert business consultancy, and comprehensive training programs.
              </p>
              <button 
                onClick={handleContactClick}
                className="bg-primary-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors"
              >
                Get Started
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 right-4 bg-primary-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <p className="text-lg font-semibold">20+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code2,
                title: 'Software Development',
                description: 'Custom software solutions tailored to your business needs'
              },
              {
                icon: Users,
                title: 'Business Consultancy',
                description: 'Expert guidance to optimize your business processes'
              },
              {
                icon: BookOpen,
                title: 'Training Programs',
                description: 'Comprehensive technical and business training courses'
              },
              {
                icon: BarChart3,
                title: 'Project Management',
                description: 'Efficient project delivery and resource optimization'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Diyezon Technology</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 20 years of industry experience, Diyezon Technology has been at the forefront of digital transformation, helping businesses navigate the complex landscape of modern technology.
              </p>
              <div className="space-y-4">
                {[
                  'Custom Software Development Solutions',
                  'Expert Business Consultation Services',
                  'Comprehensive Training Programs',
                  'Professional Project Management'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Team meeting" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                alt="Modern office" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-primary-500" />
              <p>Yenişehir, Aeropark, Osmanlı Bulvarı No:11 Kat 5, Kurtkoy, 34912 İstanbul, Türkiye</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.0076366284424!2d29.317436776526766!3d40.905391571533566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad8f7ee6f56e7%3A0x33c7c2bd2b372927!2sAeropark!5e0!3m2!1sen!2str!4v1709836271037!5m2!1sen!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diyezon Technology Location"
            ></iframe>
          </div>
        </div>
      </section>

      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default App;