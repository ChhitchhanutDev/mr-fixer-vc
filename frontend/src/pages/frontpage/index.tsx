import React from 'react';
import { motion } from 'motion/react';
import { Car, Droplets, Zap, ShieldCheck, DollarSign, Clock, CheckCircle2, MapPin } from 'lucide-react';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Expert help for your needing, <span className="text-primary">just a click away.</span>
              </h1>
              <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
                Find your trusted fixers with Mr. Fixer. Every fairs and problems Mr. Fixer is near you. Comfortable journeys with comfortable fixers by exploring Mr. Fixer.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 transition-all transform hover:-translate-y-1">
                  Explore Services
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Repair Expert" 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 border border-slate-50">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Trusted Experts</p>
                  <p className="text-xl font-extrabold text-slate-900">10,000+ Services Fixed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Popular Categories</h2>
            <p className="text-slate-500">Quickly find the most requested services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Car />, title: 'Car Repair', desc: 'Mobile mechanics for battery jumps, oil changes, and diagnostics at your doorstep.', color: 'bg-purple-100 text-purple-600' },
              { icon: <Droplets />, title: 'Plumbing', desc: 'From clogged drains to new faucet installations, Leaking Faucets, our plumbers are ready to help.', color: 'bg-indigo-100 text-indigo-600' },
              { icon: <Zap />, title: 'Electrical', desc: 'Certified electricians for wiring, light fixture installs, and power issues.', color: 'bg-blue-100 text-blue-600' }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className={`${cat.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  {React.cloneElement(cat.icon as React.ReactElement, { className: 'w-7 h-7' })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Mr. Fixer?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16">
            We take the stress out of home maintenance by connecting you with fixers professionals who care about your issues.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck />, title: 'Verified Expert', desc: 'Every expert undergoes a background check and skill verification process before joining our platform.' },
              { icon: <DollarSign />, title: 'Fair Pricing', desc: 'Transparent upfront pricing with no hidden fees. You know exactly what you\'ll pay before the work begins.' },
              { icon: <Clock />, title: 'Fast Response', desc: 'Need it fixed now? Our experts respond within minutes and can often arrive the same day.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-primary mb-6">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-20">
            Get your repairs done in four simple steps. We make it easy to find, book, and pay for quality services.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { num: '01', title: 'Choose issue', desc: 'Choose the issue that you face or set the issue.' },
              { num: '02', title: 'Fine fixer', desc: 'Fine the fixer and can choose which customer that you want.' },
              { num: '03', title: 'Confirm price', desc: 'Do the decision that you accept with that price or not.' },
              { num: '04', title: 'Fixer arrival', desc: 'When you confirm the price, the fixer will come and do it for you.' },
              { num: '05', title: 'Job completed', desc: 'Your fixer arrives, completes the job, and you rate your experience.' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 h-full flex flex-col items-center text-center">
                  <span className="text-4xl font-black text-primary/10 mb-4 block">{step.num}</span>
                  <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-light rounded-[3rem] overflow-hidden flex flex-col lg:row">
            <div className="p-12 lg:p-20 lg:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Serving Cambodia's major cities</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                We currently operate in Phnom Penh and Siem Reap, with hundreds of professionals ready to serve your neighborhood.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-slate-900 font-semibold">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Phnom Penh Metropolitan Area</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-900 font-semibold">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Siem Reap City Center & Surrounding</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 h-[400px] lg:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Map of Cambodia" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-12 h-12 bg-primary rounded-full animate-ping absolute inset-0 opacity-20"></div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white relative shadow-2xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
