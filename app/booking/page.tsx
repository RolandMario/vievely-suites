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
import Link from 'next/link';
import { SUITES } from '../page';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Header from '../components/navbar';


  const BookingView = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
     const [activeSuite, setActiveSuite] = useState(null);
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({ 
      suite: activeSuite ? 'deluxe' : 'standard', 
      checkIn: '', 
      checkOut: '', 
      guests: '2',
      name: '',
      email: ''
    });

    const handleConfirm = async (e:any) => {
      e.preventDefault();
      // Logic for Next.js API call (e.g., fetch('/api/send-email', { method: 'POST', body: ... }))
        e.preventDefault();
       setStatus('loading');
   
       try {
         const response = await fetch('/api/booking', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(bookingData),
         });
   
         if (response.ok) {
           setStatus('success');
          //  setBookingData({ name:''}); // Clear form
         } else {
           setStatus('error');
         }
       } catch (error) {
         console.error('Submission Error:', error);
         setStatus('error');
       }
      setStep(3);
    };

    return (
      <>
      <Header/>
      <div className="pt-32 pb-24 bg-slate-50 min-h-screen animate-in zoom-in duration-500 px-6">
        
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-4 bg-slate-900 p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black mb-6">Book Your <br/><span className="text-amber-500">Suite</span></h2>
                <div className="space-y-6">
                  {[
                    { s: 1, l: 'Dates' },
                    { s: 2, l: 'Your Details' },
                    { s: 3, l: 'Confirmation' }
                  ].map((item) => (
                    <div key={item.s} className={`flex items-center gap-4 transition-all ${step >= item.s ? 'text-white' : 'text-slate-600'}`}>
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs ${step >= item.s ? 'border-amber-500 bg-amber-500 text-slate-900' : 'border-slate-800'}`}>{item.s}</div>
                      <span className="font-bold tracking-widest uppercase text-[10px]">{item.l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-12 text-sm text-slate-400 italic">
                Best price guaranteed when booking directly with Vievely Suites.
              </div>
            </div>

            <div className="md:col-span-8 p-10 md:p-16">
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right">
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest block mb-2">Select Accommodation</label>
                      <select 
                        className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500"
                        value={bookingData.suite}
                        onChange={e => setBookingData({...bookingData, suite: e.target.value})}
                      >
                        {SUITES.map(s => <option key={s.id} value={s.id}>{s.name} — From ${s.price}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest block mb-2">Check In</label>
                        <input type="date" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500" onChange={e => setBookingData({...bookingData, checkIn: e.target.value})} />
                      </div>
                      <div>
                        <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest block mb-2">Check Out</label>
                        <input type="date" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500" onChange={e => setBookingData({...bookingData, checkOut: e.target.value})} />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest block mb-2">Number of Guests</label>
                      <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500" value={bookingData.guests} onChange={e => setBookingData({...bookingData, guests: e.target.value})}>
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4+ Guests</option>
                      </select>
                    </div>
                  </div>
                  <button onClick={() => setStep(2)} className="w-full bg-amber-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-amber-700 transition-all flex items-center justify-center gap-3">
                    Continue to Details <ChevronRight />
                  </button>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleConfirm} className="space-y-8 animate-in fade-in slide-in-from-right">
                  <div className="space-y-6">
                    
                    <div>
                      <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest block mb-2">Full Name</label>
                      <input type="text" required className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500" placeholder="John Doe" value={bookingData.name} onChange={e => setBookingData({...bookingData, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest block mb-2">Email Address</label>
                      <input type="email" required className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500" placeholder="john@email.com" value={bookingData.email} onChange={e => setBookingData({...bookingData, email: e.target.value})} />
                    </div>
                    <div className="p-6 bg-amber-50 border border-amber-100 rounded-[2rem]">
                      <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2"><Bed size={16}/> Summary</h4>
                      <p className="text-xs text-amber-700 font-medium tracking-wide">
                        You've selected the <span className="font-black underline">{SUITES.find(s => s.id === bookingData.suite)?.name}</span>. 
                        Upon clicking confirm, our system will generate a booking request and notify our concierge via email.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="w-1/3 py-5 rounded-2xl font-bold border-2 border-slate-100 text-slate-400">Back</button>
                    <button type="submit" className="w-2/3 bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-amber-600 transition-all">Confirm Booking</button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="text-center py-10 animate-in zoom-in">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Request Received!</h3>
                  <p className="text-slate-500 mb-10 leading-relaxed max-w-xs mx-auto">
                    We've sent a detailed confirmation to <span className="font-bold text-slate-900">{bookingData.email}</span>. One of our specialists will confirm your arrival within 30 minutes.
                  </p>
                  <Link href={'/'} className="bg-amber-600 text-white px-12 py-4 rounded-2xl font-black shadow-xl shadow-amber-100">Back to Home</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  };

  export default BookingView