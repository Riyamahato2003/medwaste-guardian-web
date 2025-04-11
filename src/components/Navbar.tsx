
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Logo size={40} />
              <span className="text-xl font-bold text-gray-900">MedWaste Guardian</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-2 md:space-x-6">
            <NavLink to="/" active={location.pathname === '/'}>
              Home
            </NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>
              About
            </NavLink>
            <NavLink to="/team" active={location.pathname === '/team'}>
              Team
            </NavLink>
            <NavLink to="/subscription" active={location.pathname === '/subscription'}>
              Subscription
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Helper component for navigation links
const NavLink = ({ to, active, children }) => (
  <Link
    to={to}
    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      active 
        ? 'text-medical-primary bg-medical-accent' 
        : 'text-gray-600 hover:text-medical-primary hover:bg-gray-50'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
