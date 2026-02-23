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
    price: '162,610',
    tagline: 'The Professional Choice',
    description: 'The Executive Suite is crafted for professionals and guests who value space, functionality, and privacy. With a separate living area, visitor’s toilet, and balcony, this suite delivers premium comfort while remaining budget-conscious.',
    features: ['King-size bed', 'Visitor’s toilet', 'Private balcony', 'Kitchen/Kitchenette', 'Stable high-speed Wi-Fi'],
    size: '75m²',
    images: [
      '/assets/executive-suites-2.jpeg',
      '/assets/executive-suites-4.jpeg',
      '/assets/executive-suites-3.jpeg',
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
  
  
  
  const SuiteDetailsView = ({ suite}: { suite: any}) => (
    <div className="pt-32 pb-24 bg-white animate-in slide-in-from-bottom duration-500">
        <Header/>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Visuals */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
              <img src={SUITES[2].images[0]} className="w-full h-full object-cover" alt={SUITES[2].name} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden h-64 shadow-xl">
                <img src={SUITES[2].images[1]} className="w-full h-full object-cover" alt="Detail 1" />
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden h-64 shadow-xl bg-slate-900 flex items-center justify-center text-white p-10 text-center">
                <div className="relative z-10">
                  {/* <Waves className="mx-auto mb-4 text-amber-500" size={40} /> */}
                  <h4 className="font-bold text-lg mb-2"></h4>
                  <p className="text-xs text-slate-400">All {SUITES[2].name} </p>
                </div>
                    <Image 
                        src={`${SUITES[2].images[2]}`} 
                        // width={400} height={200} 
                        // objectFit='center' 

                        alt='vievely family suites'
                        fill
                        style={{ objectFit: 'cover' }}
                        // className={`absolute inset-0 object-fill   `}
                      />
             </div>
            </div>
          </div>

          {/* Text Info */}
          <div className="lg:col-span-5 py-6">
            <div className="sticky top-32">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">{SUITES[1].tagline}</span>
              <h1 className="text-5xl font-black text-slate-900 mt-2 mb-6">{SUITES[2].name}</h1>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-slate-900">N{SUITES[2].price}</span>
                <span className="text-slate-400 font-medium">/ night average</span>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                {SUITES[2].description}
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10 border-y border-slate-100 py-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900"><Square size={20}/></div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Suite Size</p>
                    <p className="font-bold">{SUITES[2].size}</p>
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
                {SUITES[2].features.map((f:any) => (
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