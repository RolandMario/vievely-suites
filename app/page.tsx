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



// --- DATA CONSTANTS ---
const SUITES = [
  {
    id: 'standard',
    name: 'Standard Suite',
    price: '88,704',
    tagline: 'Refined Simplicity',
    description: 'Our Standard Suite offers a harmonious balance of comfort and style. Featuring signature bedding and handcrafted furniture, it provides a sanctuary for the solo traveler or couple looking for a peaceful city retreat.',
    features: ['King Bed', 'Rain Shower', 'Work Desk', 'City View', 'Smart Lighting'],
    size: '35m²',
    images: [
      '/assets/standard-2.jpeg',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    price: '99,099',
    tagline: 'Panoramic Luxury',
    description: 'The Deluxe Suite elevates your stay with floor-to-ceiling windows and expanded living space. Wake up to breathtaking skyline views and enjoy premium amenities designed for ultimate relaxation.',
    features: ['Private Balcony', 'Nespresso Machine', 'Soaking Tub', 'Premium Mini-bar', 'Pillow Menu'],
    size: '50m²',
    images: [
      '/assets/presidential-2.jpeg',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    price: '147,610',
    tagline: 'The Professional Choice',
    description: 'Perfect for business leaders, this suite features a distinct separation between the sleeping quarters and a sophisticated lounge area, suitable for intimate meetings or focused work sessions.',
    features: ['Separate Living Area', 'Executive Lounge Access', 'Butler Service', 'Smart Home Controls', 'Daily Refreshments'],
    size: '75m²',
    images: [
      '/assets/executive.jpeg',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'diplomatic',
    name: 'Diplomatic Suite',
    price: '145,299',
    tagline: 'Unrivaled Grandeur',
    description: 'Our most prestigious accommodation. The Diplomatic Suite is a masterpiece of design, offering unmatched privacy, security, and expansive entertainment spaces for high-profile guests.',
    features: ['Dining Room', 'Kitchenette', 'Walk-in Wardrobe', 'High-Security Access', 'En-suite Steam Room'],
    size: '120m²',
    images: [
      '/assets/diplomatic_room.jpg',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'family',
    name: 'Family Suite',
    price: '358,974',
    tagline: 'Home Collective',
    description: 'Thoughtfully designed for families, this suite provides two interconnected bedrooms and a large central lounge. It combines the privacy of a home with the luxury services of a five-star hotel.',
    features: ['2 Master Bedrooms', 'Kids Activity Zone', 'Full Kitchen', 'Laundry Facilities', 'Family Dining Table'],
    size: '100m²',
    images: [
      '/assets/family-2.jpg',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export default function App() {
  const [view, setView] = useState('home');
  const [activeSuite, setActiveSuite] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);


  const [formData, setFormData] = useState({ name: '', subject:'', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (route:any, suite = null) => {
    setView(route);
    setActiveSuite(suite);
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // --- UI COMPONENTS ---

  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => navigateTo('home')}
        >
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all ${isScrolled ? 'bg-slate-900 text-white' : 'bg-white/20 backdrop-blur-md text-white'}`}>
            {/* <Bed size={24} className="group-hover:rotate-12 transition-transform" /> */}
            <Image
              src="/logo.png" 
              alt="vievely suites" 
              width={600} 
              height={400} 
              className="rounded-xl shadow-lg border border-gray-200"
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-black tracking-widest leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>VIEVELY</span>
            <span className={`text-[10px] font-bold tracking-[0.4em] ${isScrolled ? 'text-amber-600' : 'text-amber-400'}`}>SUITES & APARTMENT</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex items-center gap-10 font-medium ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
          <button onClick={() => navigateTo('home')} className="hover:text-amber-500 transition-colors">Home</button>
          
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-amber-500 transition-colors">
              Our Suites <ChevronRight size={14} className="group-hover:rotate-90 transition-transform" />
            </button>
            <div className="absolute top-full -left-4 w-64 bg-white shadow-2xl rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-100 p-2 transform translate-y-2 group-hover:translate-y-0">
              {SUITES.map((s:any) => (
                <button 
                  key={s.id}
                  onClick={() => navigateTo('suite-details', s)}
                  className="w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-amber-600 rounded-xl transition-colors text-sm font-semibold flex justify-between items-center"
                >
                  {s.name} <ArrowRight size={14} />
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => navigateTo('about')} className="hover:text-amber-500 transition-colors">About</button>
          {/* <button onClick={() => navigateTo('contact')} className="hover:text-amber-500 transition-colors">Contact</button> */}
          <Link href={'/contact'} className="hover:text-amber-500 transition-colors"> Contact</Link>
          <button 
            onClick={() => navigateTo('booking')}
            className={`px-8 py-3 rounded-full font-bold transition-all transform active:scale-95 ${isScrolled ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-white text-slate-900 hover:bg-amber-50 shadow-lg'}`}
          >
            Book Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900' : 'text-white bg-white/10'}`} 
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div className="fixed inset-0 top-[72px] bg-white z-[99] animate-in slide-in-from-right duration-300">
          <div className="flex flex-col p-8 gap-6 overflow-y-auto h-full">
            <button onClick={() => navigateTo('home')} className="text-3xl font-black text-slate-900 text-left">Home</button>
            <div className="space-y-4">
              <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Select Suite</span>
              <div className="grid gap-3">
                {SUITES.map((s:any) => (
                  <button key={s.id} onClick={() => navigateTo('suite-details', s)} className="text-xl font-semibold text-slate-600 text-left pl-4 border-l-2 border-slate-100">{s.name}</button>
                ))}
              </div>
            </div>
            <button onClick={() => navigateTo('about')} className="text-3xl font-black text-slate-900 text-left">About</button>
            <button onClick={() => navigateTo('contact')} className="text-3xl font-black text-slate-900 text-left">Contact</button>
            <button onClick={() => navigateTo('booking')} className="w-full bg-amber-600 text-white py-5 rounded-2xl text-xl font-bold mt-4 shadow-xl shadow-amber-200">Book A Stay</button>
          </div>
        </div>
      )}
    </header>
  );

  const Footer = () => (
    <footer className="bg-[#0f172a] text-slate-400 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-white"><Bed size={20}/></div>
              <span className="text-2xl font-black tracking-tighter text-white">Vievely Suites</span>
            </div>
            <p className="text-sm leading-loose">
              Setting the international standard for luxury lodging. We provide a bespoke experience for travelers who demand the best in design, comfort, and service.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <button key={idx} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-amber-600 hover:-translate-y-1 transition-all">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-1 after:bg-amber-600">Company</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Contact', 'Press Kit', 'Careers'].map(item => (
                <li key={item} className="hover:text-amber-500 transition-colors cursor-pointer text-sm">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-1 after:bg-amber-600">Explore</h4>
            <ul className="space-y-4">
              {SUITES.map((s:any) => (
                <li key={s.id} onClick={() => navigateTo('suite-details', s)} className="hover:text-amber-500 transition-colors cursor-pointer text-sm">{s.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-1 after:bg-amber-600">Contact</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <MapPin size={20} className="text-amber-500 shrink-0" />
                <span className="text-sm leading-relaxed">37, Oduduwa way, GRA Ikeja, Lagos, Nigeria</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={20} className="text-amber-500 shrink-0" />
                <span className="text-sm">+234 808 233 2432</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={20} className="text-amber-500 shrink-0" />
                <span className="text-sm">vievelysuites@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase font-semibold">
          <p>© 2026 Vievely Suites & Apartments</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );

  // --- PAGES ---

  const HomeView = () => (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay muted loop playsInline 
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="/assets/presidential.jpeg"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-hotel-room-with-panoramic-view-34748-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/60" />
        
        <div className="relative text-center text-white px-6 max-w-5xl">
          <div className="flex justify-center mb-6">
            <div className="px-4 py-1 border border-white/30 rounded-full backdrop-blur-sm text-[10px] font-bold tracking-[0.5em] uppercase">
              The Pinnacle of Lodging
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter">
            Where Modern <br/> <span className="text-amber-500 italic font-serif">Luxury</span> Resides.
          </h1>
          <p className="text-lg md:text-2xl font-light text-slate-300 max-w-2xl mx-auto mb-12">
            Discover a collection of suites designed to surpass international standards of elegance and hospitality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => navigateTo('booking')} className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-amber-600/20 flex items-center gap-3">
              Book Your Stay <ChevronRight />
            </button>
            <button onClick={() => navigateTo('about')} className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all">
              Our Story
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-1 h-12 rounded-full bg-white/30" />
        </div>
      </section>

      {/* Stats/Highlight */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Suite Types', val: '05' },
              { label: 'Guest Rating', val: '4.9/5' },
              { label: 'Room Service', val: '24/7' },
              { label: 'Global Awards', val: '12' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">{stat.val}</div>
                <div className="text-xs font-bold text-amber-600 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suites Showcase */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-sm block mb-4">Our Collection</span>
              <h2 className="text-5xl font-black text-slate-900 leading-none">Find your perfect <br/> urban sanctuary.</h2>
            </div>
            <button onClick={() => navigateTo('booking')} className="text-slate-900 font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              View All Rates <ArrowRight className="text-amber-600 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SUITES.map((suite:any, idx) => (
              <div 
                key={suite.id}
                className={`group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col ${idx === 0 ? 'lg:col-span-2 lg:flex-row h-full' : ''}`}
                onClick={() => navigateTo('suite-details', suite)}
              >
                <div className={`relative overflow-hidden ${idx === 0 ? 'lg:w-1/2 h-80 lg:h-auto' : 'h-72'}`}>
                  <img src={suite.images[0]} alt={suite.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-slate-900 shadow-xl">
                    From N{suite.price}/Night
                  </div>
                </div>
                <div className={`p-8 flex flex-col justify-between ${idx === 0 ? 'lg:w-1/2' : ''}`}>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-black text-slate-900">{suite.name}</h3>
                      <div className="flex text-amber-500"><Star size={16} fill="currentColor"/></div>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{suite.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {suite.features.slice(0, 3).map((f:any) => (
                        <span key={f} className="bg-slate-50 text-[10px] uppercase font-bold text-slate-500 px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-all flex items-center justify-center gap-2">
                    Explore Suite <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const SuiteDetailsView = ({ suite }: { suite: any}) => (
    <div className="pt-32 pb-24 bg-white animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Visuals */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
              <img src={suite.images[0]} className="w-full h-full object-cover" alt={suite.name} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden h-64 shadow-xl">
                <img src={suite.images[1]} className="w-full h-full object-cover" alt="Detail 1" />
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden h-64 shadow-xl bg-slate-900 flex items-center justify-center text-white p-10 text-center">
                <div className="relative z-10">
                  <Waves className="mx-auto mb-4 text-amber-500" size={40} />
                  <h4 className="font-bold text-lg mb-2">Pool & Spa Access</h4>
                  <p className="text-xs text-slate-400">All {suite.name} bookings include complimentary rooftop pool access.</p>
                </div>
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&q=80')] bg-cover" />
              </div>
            </div>
          </div>

          {/* Text Info */}
          <div className="lg:col-span-5 py-6">
            <div className="sticky top-32">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">{suite.tagline}</span>
              <h1 className="text-5xl font-black text-slate-900 mt-2 mb-6">{suite.name}</h1>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-slate-900">N{suite.price}</span>
                <span className="text-slate-400 font-medium">/ night average</span>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                {suite.description}
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10 border-y border-slate-100 py-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900"><Square size={20}/></div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Suite Size</p>
                    <p className="font-bold">{suite.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900"><Users size={20}/></div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Occupancy</p>
                    <p className="font-bold">Up to 4 Guests</p>
                  </div>
                </div>
              </div>

              <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="text-amber-600" size={20} />
                Suite Amenities & Services
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {suite.features.map((f:any) => (
                  <div key={f} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle size={18} className="text-green-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigateTo('booking')}
                className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-lg hover:bg-amber-600 transition-all shadow-2xl shadow-slate-200 flex items-center justify-center gap-3"
              >
                Check Availability <Calendar size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutView = () => (
    <div className="pt-24 animate-in fade-in duration-500">
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-sm mb-6 block">Our Ethos</span>
            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight">Crafting spaces for the <span className="italic font-serif text-amber-500 underline decoration-amber-500/30 underline-offset-8">world traveler.</span></h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Lumina Suites isn't just a place to sleep; it's a testament to urban sophistication. Located in the soul of the city, we combine residential comfort with bespoke hotel services.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80')] bg-cover grayscale" />
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" className="rounded-[4rem] shadow-2xl" alt="Lobby" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-600 rounded-[3rem] p-10 text-white flex flex-col justify-center shadow-2xl">
                <p className="text-5xl font-black mb-2">12+</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Service Excellence</p>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase">Vievely Suites Promise</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  Every suite we offer adheres to rigorous international hospitality standards. We believe that true luxury is found in the things you don't have to ask for.
                </p>
                <div className="grid gap-6">
                  {[
                    { icon: <Utensils />, title: 'In-Suite Dining', desc: 'World-class cuisine delivered to your door 24 hours a day.' },
                    { icon: <ShieldCheck />, title: 'Secure Enclaves', desc: 'Advanced biometric access and 24/7 security for your peace of mind.' },
                    { icon: <Waves />, title: 'Wellness Spas', desc: 'Private sessions in our rooftop wellness center for every guest.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );



  const BookingView = () => {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({ 
      suite: activeSuite ? 'deluxe' : 'standard', 
      checkIn: '', 
      checkOut: '', 
      guests: '2',
      name: '',
      email: ''
    });

    const handleConfirm = (e:any) => {
      e.preventDefault();
      // Logic for Next.js API call (e.g., fetch('/api/send-email', { method: 'POST', body: ... }))
      setStep(3);
    };

    return (
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
                Best price guaranteed when booking directly with Lumina Suites.
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
                  <button onClick={() => navigateTo('home')} className="bg-amber-600 text-white px-12 py-4 rounded-2xl font-black shadow-xl shadow-amber-100">Back to Home</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-amber-100 selection:text-amber-900">
      <Header />
      <main>
        {view === 'home' && <HomeView />}
        {view === 'suite-details' && <SuiteDetailsView suite={activeSuite} />}
        {view === 'about' && <AboutView />}
       
        {view === 'booking' && <BookingView />}
      </main>
      <Footer />
    </div>
  );
}
