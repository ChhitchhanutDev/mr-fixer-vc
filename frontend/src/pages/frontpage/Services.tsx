import React from 'react';
import { motion } from 'motion/react';
import { Car, Bike, Zap, Droplets, Home, Star, CheckCircle2, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export const Services = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-primary-light pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 mb-8">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">The #1 Maintenance Marketplace in Cambodia</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8">
            Trusted Home Services in <br />
            <span className="text-primary">Cambodia</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Find professional fixers for your home, car, and bikes. High-quality services delivered right to your doorstep in Phnom Penh and Siem Reap.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="mb-12 flex items-center">
          <h2 className="text-2xl font-bold text-slate-900 mr-6">Service Categories</h2>
          <div className="flex-grow h-px bg-slate-200"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Car />, title: 'Car Repair', desc: 'Expert engine checkups, oil changes, and roadside assistance for your vehicle.' },
            { icon: <Zap />, title: 'Motor Repair', desc: 'Reliable maintenance for scooters and motorbikes, keeping you moving safely.' },
            { icon: <Bike />, title: 'Bicycle Repair', desc: 'Professional tuning, tire changes, and brake repairs for all types of bikes.' },
            { icon: <Zap />, title: 'Electrical', desc: 'Fixing wiring issues, appliance installation, and electrical safety checks.' },
            { icon: <Droplets />, title: 'Plumbing', desc: 'Leak repairs, pipe installations, and bathroom renovation services.' },
            { icon: <Home />, title: 'Home Fixing', desc: 'General maintenance, painting, and carpentry for your home improvement.' }
          ].map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {React.cloneElement(cat.icon as React.ReactElement, { className: 'w-7 h-7' })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{cat.desc}</p>
              <div className="flex items-center justify-between">
                <button className="text-primary font-bold text-sm hover:underline">View Fixers</button>
                <button className="bg-primary text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-primary-dark transition-colors">
                  Book Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Rated Fixers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Top-Rated Fixers in Your Area</h2>
          <p className="text-slate-500">Our highest-rated professionals available right now in Cambodia</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: 'Dara Sokha', 
              role: 'Expert Mechanic', 
              exp: '8 yrs exp.', 
              rating: '4.9', 
              jobs: '450+ Jobs', 
              speed: 'Faster responder', 
              city: 'Phnom Penh',
              img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500'
            },
            { 
              name: 'Srey Leak', 
              role: 'Electrical Specialist', 
              exp: '6 yrs exp.', 
              rating: '4.8', 
              jobs: '312+ Jobs', 
              speed: '99% Satisfaction', 
              city: 'Siem Reap',
              img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500'
            },
            { 
              name: 'Chan Vantha', 
              role: 'Home & Plumbing', 
              exp: '10 yrs exp.', 
              rating: '5.0', 
              jobs: '670+ Jobs', 
              speed: 'Local expert', 
              city: 'Phnom Penh',
              img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500'
            }
          ].map((fixer, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all"
            >
              <div className="relative h-64">
                <img 
                  src={fixer.img} 
                  alt={fixer.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1.5 border border-slate-100">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Verified Pro</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-primary px-3 py-1.5 rounded-full">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">{fixer.city}</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{fixer.name}</h3>
                    <p className="text-sm text-slate-500">{fixer.role} • {fixer.exp}</p>
                  </div>
                  <div className="bg-amber-50 px-2 py-1 rounded-lg flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-sm font-bold text-amber-700">{fixer.rating}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-2 text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-medium">{fixer.jobs}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium">{fixer.speed}</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center space-x-2 group">
                  <span>Book {fixer.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
