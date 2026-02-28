import React from 'react';
import { Wrench, MapPin, Facebook, Twitter } from 'lucide-react';

export const Navbar = ({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-primary p-2 rounded-lg mr-2">
              <Wrench className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold text-primary tracking-tight">Mr. Fixer</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className={`text-sm font-medium transition-colors ${currentPage === 'services' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
            >
              Our Services
            </button>
            <button className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Contact Us
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors">
              Log In
            </button>
            <button 
              onClick={() => onNavigate('signup')}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-primary p-1.5 rounded-md mr-2">
                <Wrench className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-primary">Mr. Fixer</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The leading on-demand service marketplace for repair experts in Cambodia. Quality guaranteed for every fix.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Service Cities</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Phnom Penh</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Siem Reap</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sihanoukville</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Battambang</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Car & Motor Repair</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Electrical Work</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Plumbing Repairs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Home Renovation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Become a Pro</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:row justify-between items-center text-xs text-slate-400 space-y-4 md:space-y-0">
          <p>© 2024 Mr. Fixer Cambodia. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Service Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
