  "use client"
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Bed, Users, Square, Coffee, Wifi, Tv, Wind, 
  MapPin, Phone, Mail, Instagram, Facebook, Twitter, 
  ChevronRight, Star, CheckCircle, Calendar, ShieldCheck,
  ArrowRight, Waves, Utensils
} from 'lucide-react';

//import logo from 'logo'
import Image from 'next/image';
  
  const ContactView = () => {
      const [formData, setFormData] = useState({ name: '', subject:'', email: '', message: '' });
      const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    
    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value, })); };

       const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       setStatus('loading');
   
       try {
         const response = await fetch('/api/contact', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(formData),
         });
   
         if (response.ok) {
           setStatus('success');
           setFormData({ name: '', email: '', subject:'', message: '' }); // Clear form
         } else {
           setStatus('error');
         }
       } catch (error) {
         console.error('Submission Error:', error);
         setStatus('error');
       }
     };
   
     const isFormValid = formData.name && formData.email && formData.message;
    return(
          <div className="pt-32 pb-24 bg-slate-50 animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 md:p-16 shadow-xl shadow-slate-200">
            <h1 className="text-4xl font-black text-slate-900 mb-4">Let's Connect</h1>
            <p className="text-slate-500 mb-12">Fill out the form below and our concierge team will get back to you within the hour.</p>
            
                        {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 mb-6 text-sm text-smartGreen border border-smartGreen/30 bg-smartGreen/10 rounded-lg">
                Thank you! Your message has been sent successfully. We will be in touch shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 mb-6 text-sm text-red-700 border border-red-300 bg-red-100 rounded-lg">
                Failed to send message. Please try again or email us directly at support@smartenv.com.
              </div>
            )}

            <form className="space-y-6" onSubmit={ handleSubmit }>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest">Full Name</label>
                  <input type="text"
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                   className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-smartGreen focus:ring-amber-500 transition-all" placeholder="Enter your name..." />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest">Email Address</label>
                  <input type="email"
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 transition-all" placeholder="you@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest">Subject</label>
                <input type="text"
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 transition-all" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest">Message</label>
                <textarea 
                  id='message'
                  name='message'
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 transition-all resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button
              type="submit"
              disabled={status === 'loading' || !isFormValid}
              className={`
              w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-amber-600 transition-all shadow-xl shadow-slate-200
                 ${status === 'loading' || !isFormValid
                    ? 'bg-green-400 cursor-not-allowed'
                    : 'bg-black hover:bg-green-500 shadow-md shadow-smartGreen/30'
                  }
              
              `}>{status === 'loading' ? 'Sending...' : 'Send Message'}</button>
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
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-500 shrink-0"><MapPin size={24}/></div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Find Us</p>
                    <p className="font-bold">37, Oduduwa way, GRA Ikeja, <br/>Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100">
              <h4 className="font-black text-slate-900 text-xl mb-6">Socials</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <button key={i} className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-amber-600 hover:text-white transition-all shadow-sm">
                    <Icon size={24} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    )

};

export default ContactView;