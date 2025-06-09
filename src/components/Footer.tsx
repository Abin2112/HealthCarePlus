import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">HealthCare</span>
                <span className="text-xl font-bold text-blue-400">Plus</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing comprehensive healthcare services with compassion, expertise, and state-of-the-art facilities. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Our Doctors', href: '/doctors' },
                { name: 'Book Appointment', href: '/appointments' },
                { name: 'Patient Portal', href: '/patient-portal' },
                { name: 'Health Blog', href: '/blog' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <nav className="space-y-2">
              {[
                'Cardiology',
                'Neurology',
                'Orthopedics',
                'Pediatrics',
                'Emergency Care',
                'Radiology',
              ].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>123 Medical Center Drive</p>
                  <p>Healthcare City, HC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Emergency: (555) 911-1111</p>
                  <p>General: (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@healthcareplus.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat-Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 HealthCare Plus. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;