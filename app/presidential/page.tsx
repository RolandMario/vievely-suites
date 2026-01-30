  "use client"
  import { 
    Menu, X, Bed, Users, Square, Coffee, Wifi, Tv, Wind, 
    MapPin, Phone, Mail, Instagram, Facebook, Twitter, 
    ChevronRight, Star, CheckCircle, Calendar, ShieldCheck,
    ArrowRight, Waves, Utensils
  } from 'lucide-react';


  //import logo from 'logo'
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/navbar';
import Footer from '../components/footer';
  // --- DATA CONSTANTS ---
export const SUITES = [
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
     '/assets/presidential-suites-7.jpeg',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    ]
  },
    {
    id: 'presidential',
    name: 'Presidential Suite',
    price: '260,800',
    tagline: 'Unrivaled Grandeur',
    description: 'Our Presidential Suite offers an exceptional blend of luxury, space, and comfort. Featuring a spacious living room, two elegant bedrooms, and a private balcony, this suite is ideal for VIP guests, executives, or families seeking premium hotel accommodation.',
    features: ['2 Masters Bedroom','Separate living room', 'Private balcony', 'Kitchenette', 'Walk-in Wardrobe', 'High-Security Access', 'En-suite Steam Room'],
    size: '120m²',
    images: [
      '/assets/presidential-suites-9.jpeg',
      '/assets/presidential-suites-7.jpeg',
      '/assets/presidential-suites-5.jpeg'
 
    ]
  },
];
  
  
  
  const SuiteDetailsView = ({ suite}: { suite: any}) => (
    <div className="pt-32 pb-24 bg-white animate-in slide-in-from-bottom duration-500">
        <Header/>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Visuals */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
              <img src={SUITES[1].images[0]} className="w-full h-full object-cover" alt={SUITES[1].name} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden h-64 shadow-xl">
                <img src={SUITES[1].images[1]} className="w-full h-full object-cover" alt="Detail 1" />
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden h-64 shadow-xl bg-slate-900 flex items-center justify-center text-white p-10 text-center">
                <div className="relative z-10">
                  <Waves className="mx-auto mb-4 text-amber-500" size={40} />
                  <h4 className="font-bold text-lg mb-2">Kitchen</h4>
                  <p className="text-xs text-slate-400">All {SUITES[1].name}</p>
                </div>
                  <Image 
                      src={`${SUITES[1].images[2]}`} 
                      fill
                      style={{ objectFit: 'cover' }} 
                      alt='vievely family suites'
                      className={`absolute inset-0   `}
                    />
              </div>
            </div>
          </div>

          {/* Text Info */}
          <div className="lg:col-span-5 py-6">
            <div className="sticky top-32">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">{SUITES[1].tagline}</span>
              <h1 className="text-5xl font-black text-slate-900 mt-2 mb-6">{SUITES[1].name}</h1>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-slate-900">N{SUITES[1].price}</span>
                <span className="text-slate-400 font-medium">/ night average</span>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                {SUITES[1].description}
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10 border-y border-slate-100 py-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900"><Square size={20}/></div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Suite Size</p>
                    <p className="font-bold">{SUITES[1].size}</p>
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
                {SUITES[1].features.map((f:any) => (
                  <div key={f} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle size={18} className="text-green-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <Link 
                href={'/booking'}
               
                className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-lg hover:bg-amber-600 transition-all shadow-2xl shadow-slate-200 flex items-center justify-center gap-3"
              >
                Check Availability <Calendar size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );

  export default SuiteDetailsView;