import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Phone, Mail, Lock, ShieldCheck } from 'lucide-react';

export const SignUp = ({ onLoginClick }: { onLoginClick: () => void }) => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onChange =
    (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!form.fullName || !form.email || !form.password) {
      setError('Full name, email, and password are required.');
      return;
    }

    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          phone: form.phone || null,
          email: form.email,
          password: form.password,
          role: 'customer',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'Sign up failed.');
      }

      setSuccess('Account created successfully. You can log in now.');
      setForm({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (submitError) {
      if (submitError instanceof Error) {
        setError(submitError.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden items-center justify-center p-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=1000"
            alt="Repairman"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary/80 to-transparent"></div>

        <div className="relative z-10 text-white max-w-md">
          <h2 className="text-6xl font-black mb-8 leading-tight">Quality Service, Guaranteed.</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Join thousands of homeowners who trust Mr. Fixer for their daily repair and maintenance needs. Expert hands, just a click away.
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white/60 uppercase tracking-widest">Trusted by 50k+ Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center p-8 lg:p-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <h1 className="text-4xl font-black text-slate-900 mb-2">Create Account</h1>
            <p className="text-slate-500">Please enter your details to register with Mr. Fixer.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={onChange('fullName')}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={onChange('phone')}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={onChange('email')}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="password"
                  placeholder="********"
                  value={form.password}
                  onChange={onChange('password')}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="password"
                  placeholder="********"
                  value={form.confirmPassword}
                  onChange={onChange('confirmPassword')}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            {error && <p className="text-sm font-medium text-red-600">{error}</p>}
            {success && <p className="text-sm font-medium text-emerald-700">{success}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-1"
            >
              {isSubmitting ? 'Creating account...' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-slate-500 font-medium">
              Already have an account? <button onClick={onLoginClick} className="text-primary font-bold hover:underline">Log In</button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
