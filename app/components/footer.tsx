"use client"
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Bed, Users, Square, Coffee, Wifi, Tv, Wind, 
  MapPin, Phone, Mail, Instagram, Facebook, Twitter, 
  ChevronRight, Star, CheckCircle, Calendar, ShieldCheck,
  ArrowRight, Waves, Utensils
} from 'lucide-react';
import Link from 'next/link';




export const SUITES = [
  {
    id: 'standard',
    name: 'Standard Suite',
    route: '/standard',
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
    route: '/deluxe',
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
    route: '/executive',
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
    route: '/diplomatic',
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
    route: '/family',
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



const Footer=()=>{
  const [view, setView] = useState('home');
  const [activeSuite, setActiveSuite] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

const navigateTo = (route:any, suite = null) => {
    setView(route);
    setActiveSuite(suite);
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    return(
        <>
    <footer className="bg-[#0f172a] text-slate-400 pt-24 pb-0 overflow-hidden relative">
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
                <Link href={'https://www.instagram.com/vievely_suites_and_apartments?utm_source=qr&igsh=MXd0YTBnam9jNXF5ag=='} key={idx} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-amber-600 hover:-translate-y-1 transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-1 after:bg-amber-600">Company</h4>
            <div className="space-y-4 flex flex-col">
              {[{menu:'Home', route:'/', id:0}, {menu:'About Us', route:'/about', id:1}, {menu:'Contact', route:'/contact', id:2}].map(item => (
                <Link key={item.id} href={`${item.route}`} className="hover:text-amber-500 transition-colors cursor-pointer text-sm">{item.menu}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-1 after:bg-amber-600">Explore</h4>
            <div className="flex flex-col space-y-4"> 
              {SUITES.map((s: any) => ( 
                
                <Link key={s.id} href={s.route}
                    className="hover:text-amber-500 transition-colors cursor-pointer text-sm" > 
                    {s.name} 
               </Link> 
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-1 after:bg-amber-600">Contact</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <MapPin size={20} className="text-amber-500 shrink-0" />
                <span className="text-sm leading-relaxed">34D, Oduduwa way, GRA, Ikeja, Lagos, Nigeria </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={20} className="text-amber-500 shrink-0" />
                <span className="text-sm">+234 902 212 0237 | +234 811 331 8849</span>
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
        </>
    )
}
export default Footer;