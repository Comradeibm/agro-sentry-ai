import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold text-white tracking-tight">Sentinel AgroGuard AI</span>
            </Link>
            <p className="text-green-200 leading-relaxed">
              Empowering African farmers with AI-driven insights to maximize yields and ensure food security for the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-green-800 rounded-full hover:bg-green-700 transition-colors"><Globe className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-green-800 rounded-full hover:bg-green-700 transition-colors"><Globe className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-green-800 rounded-full hover:bg-green-700 transition-colors"><Globe className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-4 text-green-200">
              <li>Crop Diagnosis</li>
              <li>Pest Detection</li>
              <li>Smart Farm Advisor</li>
              <li>Market Prices</li>
              <li>Weather Alerts</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1 shrink-0" />
                <span>123 Agric Plaza, Abuja, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 shrink-0" />
                <span>+234 800 AGRO AI</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 shrink-0" />
                <span>support@agroguard.ai</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-green-800 text-center text-green-400 text-sm">
          <p>© {new Date().getFullYear()} Sentinel AgroGuard AI. All rights reserved. Made for African Farmers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
