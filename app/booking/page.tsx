"use client"
import React, { useState } from 'react';
import { 
  CheckCircle, Calendar, ChevronRight, Bed, 
  ShieldCheck, ArrowRight, Loader2, AlertCircle
} from 'lucide-react';
import Header from '../components/navbar';
import Footer from '../components/footer';

// Mocked SUITES data for the self-contained component
const SUITES = [
  { id: 'standard', name: 'Standard Suite', price: '88,704' },
  { id: 'deluxe', name: 'Deluxe Suite', price: '99,099' },
  { id: 'executive', name: 'Executive Suite', price: '147,610' },
  { id: 'diplomatic', name: 'Diplomatic Suite', price: '145,299' },
  { id: 'family', name: 'Family Suite', price: '358,974' }
];

const BookingView = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({ 
    suite: 'standard', 
    checkIn: '', 
    checkOut: '', 
    guests: '2 Guests',
    name: '',
    email: ''
  });

  const handleConfirm = async (e:any) => {
    e.preventDefault();
    setStatus('loading');

    // Exponential backoff retry logic for the API call
    const submitWithRetry = async (retries = 5, delay = 1000) => {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxb4q1xoFX-xNGBQZM1GH7LBzixO6IMmLp_1rIxMP-Rnr4PGvbVWpxKswrX6WWZM6mV/exec';
      
      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors', // Essential for Google Apps Script redirects
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...bookingData,
            timestamp: new Date().toISOString(),
            totalPrice: SUITES.find(s => s.id === bookingData.suite)?.price
          }),
        });
        
        // With no-cors, we won't see response status, but success is implied if no exception is thrown
        setStatus('success');
        setStep(3);
      } catch (error) {
        if (retries > 0) {
          await new Promise(resolve => setTimeout(resolve, delay));
          return submitWithRetry(retries - 1, delay * 2);
        }
        throw error;
      }
    };

    try {
      await submitWithRetry();
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  };

  const updateField = (field:any, value:any) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-12 pb-24 bg-slate-50 min-h-screen px-6 font-sans">
      <Header/>
      <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="grid md:grid-cols-12">
          {/* Sidebar Info */}
          <div className="md:col-span-4 bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden min-h-[400px]">
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-8 leading-tight">Book Your <br/><span className="text-amber-500 italic font-serif">Sanctuary</span></h2>
              
              <div className="space-y-8">
                {[
                  { s: 1, l: 'Schedule', d: 'Dates & Guests' },
                  { s: 2, l: 'Details', d: 'Contact Information' },
                  { s: 3, l: 'Confirm', d: 'Instant Reservation' }
                ].map((item) => (
                  <div key={item.s} className={`flex items-start gap-4 transition-all duration-500 ${step >= item.s ? 'opacity-100' : 'opacity-30'}`}>
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs mt-1 transition-colors ${step >= item.s ? 'border-amber-500 bg-amber-500 text-slate-900' : 'border-slate-700'}`}>
                      {item.s}
                    </div>
                    <div>
                      <span className="font-bold tracking-widest uppercase text-[10px] block mb-1">{item.l}</span>
                      <span className="text-xs text-slate-400 font-medium">{item.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-12">
              <div className="flex items-center gap-3 text-amber-500 mb-2">
                <ShieldCheck size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Secure Reservation</span>
              </div>
              <p className="text-xs text-slate-500 italic">Best price guaranteed when booking directly with Lumina.</p>
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Form Content */}
          <div className="md:col-span-8 p-10 md:p-20">
            {step === 1 && (
              <div className="space-y-10 animate-in fade-in slide-in-from-right duration-500">
                <div className="space-y-8">
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-[0.2em] block mb-3">Accommodation Type</label>
                    <select 
                      className="w-full bg-slate-50 border-2 border-transparent rounded-3xl px-8 py-5 focus:border-amber-500 focus:bg-white transition-all appearance-none font-bold text-slate-800"
                      value={bookingData.suite}
                      onChange={e => updateField('suite', e.target.value)}
                    >
                      {SUITES.map(s => <option key={s.id} value={s.id}>{s.name} — ₦{s.price}/night</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-[0.2em] block mb-3">Check In</label>
                      <input 
                        type="date" 
                        required
                        className="w-full bg-slate-50 border-2 border-transparent rounded-3xl px-8 py-5 focus:border-amber-500 focus:bg-white transition-all font-bold text-slate-800" 
                        onChange={e => updateField('checkIn', e.target.value)} 
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-[0.2em] block mb-3">Check Out</label>
                      <input 
                        type="date" 
                        required
                        className="w-full bg-slate-50 border-2 border-transparent rounded-3xl px-8 py-5 focus:border-amber-500 focus:bg-white transition-all font-bold text-slate-800" 
                        onChange={e => updateField('checkOut', e.target.value)} 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-[0.2em] block mb-3">Guest Count</label>
                    <select 
                      className="w-full bg-slate-50 border-2 border-transparent rounded-3xl px-8 py-5 focus:border-amber-500 focus:bg-white transition-all appearance-none font-bold text-slate-800"
                      value={bookingData.guests}
                      onChange={e => updateField('guests', e.target.value)}
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)} 
                  className="w-full bg-amber-600 text-white py-6 rounded-[2.5rem] font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-amber-900/10 flex items-center justify-center gap-4 group"
                >
                  Continue to Details <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleConfirm} className="space-y-10 animate-in fade-in slide-in-from-right duration-500">
                <div className="space-y-8">
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-[0.2em] block mb-3">Full Legal Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-slate-50 border-2 border-transparent rounded-3xl px-8 py-5 focus:border-amber-500 focus:bg-white transition-all font-bold" 
                      placeholder="e.g. Alexander Pierce" 
                      value={bookingData.name} 
                      onChange={e => updateField('name', e.target.value)} 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-[0.2em] block mb-3">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full bg-slate-50 border-2 border-transparent rounded-3xl px-8 py-5 focus:border-amber-500 focus:bg-white transition-all font-bold" 
                      placeholder="alexander@luxury.com" 
                      value={bookingData.email} 
                      onChange={e => updateField('email', e.target.value)} 
                    />
                  </div>

                  <div className="p-8 bg-amber-50 border border-amber-100 rounded-[2.5rem] flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                      <Bed size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900 mb-1">Reservation Summary</h4>
                      <p className="text-xs text-amber-700/80 leading-relaxed">
                        Booking <span className="font-black underline">{SUITES.find(s => s.id === bookingData.suite)?.name}</span>. 
                        Upon confirmation, a concierge specialist will reach out to finalize your check-in preferences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    type="button" 
                    onClick={() => setStep(1)} 
                    className="w-full sm:w-1/3 py-6 rounded-[2.5rem] font-bold border-2 border-slate-100 text-slate-400 hover:bg-slate-50 transition-all"
                  >
                    Modify Dates
                  </button>
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full sm:w-2/3 bg-slate-900 text-white py-6 rounded-[2.5rem] font-black text-lg hover:bg-amber-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="animate-spin" /> Processing...</>
                    ) : 'Complete Reservation'}
                  </button>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 text-red-500 text-xs font-bold justify-center">
                    <AlertCircle size={16} /> Connection error. Please check your internet and try again.
                  </div>
                )}
              </form>
            )}

            {step === 3 && (
              <div className="text-center py-10 animate-in zoom-in duration-700">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-100/50">
                  <CheckCircle size={48} className="animate-in fade-in zoom-in duration-1000" />
                </div>
                <h3 className="text-4xl font-black text-slate-900 mb-6">Reservation Received!</h3>
                <p className="text-slate-500 mb-12 leading-relaxed max-w-sm mx-auto font-medium">
                  We've logged your request for the {SUITES.find(s => s.id === bookingData.suite)?.name}. 
                  A detailed itinerary has been sent to <span className="font-black text-slate-900">{bookingData.email}</span>.
                </p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="inline-block bg-amber-600 text-white px-16 py-5 rounded-[2rem] font-black shadow-2xl shadow-amber-900/20 hover:bg-slate-900 transition-all"
                >
                  Return to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BookingView;