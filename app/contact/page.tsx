"use client"
import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Mail, Instagram, Facebook, Twitter, 
  Menu, X, ChevronRight, ArrowRight 
} from 'lucide-react';

/**
 * Suite Data for the Header
 */
const SUITES = [
  { id: 'standard', name: 'Standard Suite', route: 'standard' },
  { id: 'deluxe', name: 'Deluxe Suite', route: 'deluxe' },
  { id: 'executive', name: 'Executive Suite', route: 'executive' },
  { id: 'diplomatic', name: 'Diplomatic Suite', route: 'diplomatic' },
  { id: 'family', name: 'Family Suite', route: 'family' }
];

/**
 * Internal Header Component
 * Consolidated to ensure the page compiles in the preview environment.
 */
const InternalHeader = ({ navigateTo = (route:any, suite = null) => {}, currentView = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInternalNavigate = (route:any, suite = null) => {
    if (typeof navigateTo === 'function') {
      navigateTo(route, suite);
    }
    setMobileMenu(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div onClick={() => handleInternalNavigate('home')} className="flex items-center gap-2 cursor-pointer group">
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white/20 backdrop-blur-md'}`}>
            <span className="text-amber-500 font-bold text-xl">V</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-black tracking-widest leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>VIEVELY</span>
            <span className={`text-[10px] font-bold tracking-[0.4em] ${isScrolled ? 'text-amber-600' : 'text-amber-400'}`}>SUITES & APARTMENT</span>
          </div>
        </div>

        <nav className={`hidden lg:flex items-center gap-10 font-medium ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
          <button onClick={() => handleInternalNavigate('home')} className={`transition-colors hover:text-amber-500 ${currentView === 'home' ? 'text-amber-500' : ''}`}>Home</button>
          
          <div className="relative group py-2">
            <button className="flex items-center gap-1 transition-colors hover:text-amber-500">
              Our Suites <ChevronRight size={14} className="group-hover:rotate-90 transition-transform" />
            </button>
            <div className="absolute top-full -left-4 w-64 bg-white shadow-2xl rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-100 p-2 transform translate-y-2 group-hover:translate-y-0">
              {SUITES.map((s:any) => (
                <button 
                  key={s.id}
                  onClick={() => handleInternalNavigate('suite-details', s)}
                  className="w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-amber-600 rounded-xl transition-colors text-sm font-semibold flex justify-between items-center"
                >
                  {s.name} <ArrowRight size={14} />
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => handleInternalNavigate('about')} className={`transition-colors hover:text-amber-500 ${currentView === 'about' ? 'text-amber-500' : ''}`}>About</button>
          <button onClick={() => handleInternalNavigate('contact')} className={`transition-colors hover:text-amber-500 ${currentView === 'contact' ? 'text-amber-500' : ''}`}>Contact</button>
          
          <button onClick={() => handleInternalNavigate('booking')} className={`px-8 py-3 rounded-full font-bold transition-all ${isScrolled ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-white text-slate-900 hover:bg-amber-50 shadow-lg'}`}>Book Now</button>
        </nav>

        <button className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900' : 'text-white bg-white/10'}`} onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {mobileMenu && (
        <div className="fixed inset-0 top-[72px] bg-white z-[99] p-8 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
          <button onClick={() => handleInternalNavigate('home')} className="text-3xl font-black text-slate-900 text-left">Home</button>
          <button onClick={() => handleInternalNavigate('about')} className="text-3xl font-black text-slate-900 text-left">About</button>
          <button onClick={() => handleInternalNavigate('contact')} className="text-3xl font-black text-slate-900 text-left">Contact</button>
        </div>
      )}
    </header>
  );
};

/**
 * Internal Footer Component
 */
const InternalFooter = () => (
  <footer className="bg-slate-900 text-white py-12">
    <div className="container mx-auto px-6 text-center">
      <p className="text-slate-500">© 2024 Vievely Suites & Apartment. All rights reserved.</p>
    </div>
  </footer>
);

/**
 * ContactView Page
 */
const ContactView = () => {
  const [formData, setFormData] = useState({ name: '', subject: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const navigateTo = (route:any, suite = null) => {
    console.log(`Navigating to ${route}`, suite);
    if (route === 'home') window.location.href = '/';
    else window.location.href = `/${route}`;
  };

  const handleChange = (e:any) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setStatus('loading');
    // Simulated API call
    setTimeout(() => setStatus('success'), 1500);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <main className="pt-0 min-h-screen flex flex-col">
      <InternalHeader navigateTo={navigateTo} currentView="contact" />

      <div className="flex-grow pt-32 pb-24 bg-slate-50 animate-in fade-in duration-500">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 md:p-16 shadow-xl shadow-slate-200">
              <h1 className="text-4xl font-black text-slate-900 mb-4">Let's Connect</h1>
              <p className="text-slate-500 mb-12">Fill out the form below and our concierge team will get back to you shortly.</p>
              
              {status === 'success' && (
                <div className="p-4 mb-6 text-sm text-green-700 border border-green-300 bg-green-50 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 transition-all" placeholder="Enter your name..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 transition-all" placeholder="you@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest">Message</label>
                  <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 transition-all resize-none" placeholder="Your message here..."></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading' || !isFormValid}
                  className={`w-full py-5 rounded-2xl font-black text-lg transition-all shadow-xl ${
                    status === 'loading' || !isFormValid ? 'bg-slate-300 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-amber-600'
                  }`}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 shadow-2xl">
                <h3 className="text-2xl font-black mb-8">Contact Info</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-500 shrink-0"><Phone size={24}/></div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call Us</p>
                      <p className="font-bold text-lg">+234 808 233 2432</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-500 shrink-0"><Mail size={24}/></div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                      <p className="font-bold text-lg">vievelysuites@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100">
                <h4 className="font-black text-slate-900 text-xl mb-6">Socials</h4>
                <div className="flex gap-4">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <button key={i} className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-amber-600 hover:text-white transition-all">
                      <Icon size={24} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <InternalFooter />
    </main>
  );
};

export default ContactView;