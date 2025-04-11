
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-6 md:px-8 mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">MedWaste Guardian</h3>
            <p className="text-gray-600 mb-4">
              AI-powered assistant for safe and correct disposal of biomedical waste.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-medical-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-medical-primary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 hover:text-medical-primary transition-colors">Team</Link>
              </li>
              <li>
                <Link to="/subscription" className="text-gray-600 hover:text-medical-primary transition-colors">Subscription</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <p className="text-gray-600">
              Have questions or feedback? Reach out to our team.
            </p>
            <button className="mt-4 px-4 py-2 bg-medical-primary text-white rounded-lg hover:bg-opacity-90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500">
          <p>© {new Date().getFullYear()} MedWaste Guardian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
