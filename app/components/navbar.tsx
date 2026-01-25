"use client"
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, ArrowRight 
} from 'lucide-react';

import Link from 'next/link';

/**
 * Global navigation links for the application.
 * Note: Using standard <a> tags for the preview environment 
 * to resolve compilation issues with Next.js specific imports.
 */
export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Get Involved', href: '/join' },
];

/**
 * Suite Data for the dropdown menu
 */
export const SUITES = [
  {
    id: 'standard',
    name: 'Standard Suite',
    route: '/standard',
    price: '88,704',
    tagline: 'Refined Simplicity',
    description: 'Our Standard Suite offers a harmonious balance of comfort and style.',
    features: ['King Bed', 'Rain Shower', 'Work Desk', 'City View', 'Smart Lighting'],
    size: '35m²',
    images: ['/assets/standard-2.jpeg']
  },
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    route: '/deluxe',
    price: '99,099',
    tagline: 'Panoramic Luxury',
    description: 'The Deluxe Suite elevates your stay with floor-to-ceiling windows.',
    features: ['Private Balcony', 'Nespresso Machine', 'Soaking Tub'],
    size: '50m²',
    images: ['/assets/presidential-2.jpeg']
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    route: '/executive',
    price: '147,610',
    tagline: 'The Professional Choice',
    description: 'Perfect for business leaders, featuring a distinct separation of spaces.',
    features: ['Separate Living Area', 'Executive Lounge Access'],
    size: '75m²',
    images: ['/assets/executive.jpeg']
  },
  {
    id: 'diplomatic',
    name: 'Diplomatic Suite',
    route: '/diplomatic',
    price: '145,299',
    tagline: 'Unrivaled Grandeur',
    description: 'A masterpiece of design offering unmatched privacy and security.',
    features: ['Dining Room', 'Kitchenette', 'Walk-in Wardrobe'],
    size: '120m²',
    images: ['/assets/diplomatic_room.jpg']
  },
  {
    id: 'family',
    name: 'Family Suite',
    route: '/family',
    price: '358,974',
    tagline: 'Home Collective',
    description: 'Thoughtfully designed for families, providing interconnected bedrooms.',
    features: ['2 Master Bedrooms', 'Kids Activity Zone', 'Full Kitchen'],
    size: '100m²',
    images: ['/assets/family-2.jpg']
  }
];

/**
 * Reusable Header/Navbar Component
 * @param {Object} props
 * @param {Function} props.navigateTo - Navigation handler function
 * @param {string} props.currentView - The current active view ID
 */
export default function Header({ navigateTo = (route:any, suite = null) => {}, currentView = 'home' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInternalNavigate = (route:any, suite = null) => {
    // Check if navigateTo is a function before calling it to prevent "type never" errors
    if (typeof navigateTo === 'function') {
      navigateTo(route, suite);
    }
    setMobileMenu(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          // onClick={() => handleInternalNavigate('home')}
          href={'/'}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all overflow-hidden ${isScrolled ? 'bg-slate-900' : 'bg-white/20 backdrop-blur-md'}`}>
            <div className="w-10 h-10 flex items-center justify-center">
               <span className="text-amber-500 font-bold text-xl">V</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-black tracking-widest leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>VIEVELY</span>
            <span className={`text-[10px] font-bold tracking-[0.4em] ${isScrolled ? 'text-amber-600' : 'text-amber-400'}`}>SUITES & APARTMENT</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex items-center gap-10 font-medium ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
          <Link 
            // onClick={() => handleInternalNavigate('home')}
            href={'/'} 
            className={`transition-colors hover:text-amber-500 ${currentView === 'home' ? 'text-amber-500' : ''}`}
          >
            Home
          </Link>
          
          {/* Suites Dropdown */}
          <div className="relative group py-2">
            <button className={`flex items-center gap-1 transition-colors hover:text-amber-500 ${currentView === 'suite-details' ? 'text-amber-500' : ''}`}>
              Our Suites <ChevronRight size={14} className="group-hover:rotate-90 transition-transform" />
            </button>
            <div className="absolute top-full -left-4 w-64 bg-white shadow-2xl rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-100 p-2 transform translate-y-2 group-hover:translate-y-0">
              {SUITES.map((s:any) => (
                <Link 
                  key={s.id}
                  // onClick={() => handleInternalNavigate(`${s.route}`)}
                  href={`${s.route}`}
                  className="w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-amber-600 rounded-xl transition-colors text-sm font-semibold flex justify-between items-center"
                >
                  {s.name} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>

          <Link 
            // onClick={() => handleInternalNavigate('about')} 
            href={'/about'}
            className={`transition-colors hover:text-amber-500 ${currentView === 'about' ? 'text-amber-500' : ''}`}
          >
            About
          </Link>
          <Link 
            // onClick={() => handleInternalNavigate('contact')} 
            href={'/contact'}
            className={`transition-colors hover:text-amber-500 ${currentView === 'contact' ? 'text-amber-500' : ''}`}
          >
            Contact
          </Link>
          
          <Link 
            // onClick={() => handleInternalNavigate('booking')}
            href={'/booking'}
            className={`px-8 py-3 rounded-full font-bold transition-all transform active:scale-95 ${isScrolled ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-white text-slate-900 hover:bg-amber-50 shadow-lg'}`}
          >
            Book Now
          </Link>
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
            <button onClick={() => handleInternalNavigate('home')} className="text-3xl font-black text-slate-900 text-left">Home</button>
            
            <div className="space-y-4">
              <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Select Suite</span>
              <div className="grid gap-3">
                {SUITES.map((s:any) => (
                  <button 
                    key={s.id} 
                    onClick={() => handleInternalNavigate('suite-details', s)} 
                    className="text-xl font-semibold text-slate-600 text-left pl-4 border-l-2 border-slate-100"
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            <Link href={'/about'} onClick={() => handleInternalNavigate('about')} className="text-3xl font-black text-slate-900 text-left">About</Link>
            <Link href={'/contact'} onClick={() => handleInternalNavigate('contact')} className="text-3xl font-black text-slate-900 text-left">Contact</Link>
            <Link 
              // onClick={() => handleInternalNavigate('booking')} 
              href={'/booking'}
              className="w-full bg-amber-600 text-white py-5 rounded-2xl text-xl font-bold mt-4 shadow-xl shadow-amber-200 text-center"
            >
              Book A Stay
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}