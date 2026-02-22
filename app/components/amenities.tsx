"use client"

import { 
  Dumbbell,  Clock, Sparkles, Wine, ShoppingCart, Wifi, Tv, Coffee, BuildingIcon,
  Car, Plane, Mail, Instagram, Facebook, Twitter, 
  ChevronRight, Star, CheckCircle, Calendar, ShieldCheck,
  ArrowRight, Waves, Utensils, HotelIcon,
  Building2
} from 'lucide-react';
import Link from 'next/link';


const AMENITIES = [
  { icon: <Dumbbell size={20} />, title: 'Functioning Gym' },
  { icon: <Waves size={20} />, title: 'Swimming Pool' },
  { icon: <Clock size={20} />, title: '24h Front Desk' },
  { icon: <Sparkles size={20} />, title: 'Quality Housekeeping' },
  { icon: <Building2 size={20} />, title: 'Private Balcony' },
  { icon: <Wifi size={20} />, title: 'Stable Wi-Fi' },
  { icon: <Coffee size={20} />, title: 'Lively Lounge' },
  { icon: <Wine size={20} />, title: 'Pool-side Bar' },
  { icon: <Utensils size={20} />, title: 'F&B Service' },
  { icon: <ShoppingCart size={20} />, title: 'In-house Minimart' },
  { icon: <Car size={20} />, title: 'Free Parking Space' },
  { icon: <ShieldCheck size={20} />, title: 'Guaranteed Security' },
  { icon: <Plane size={20} />, title: 'Airport Transfers' },
  { icon: <HotelIcon size={20} />, title: 'Elevator Access' }
];

const Amenities = ()=>{
    return(
        <>
              {/* Two Column Amenities Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Column 1: High-end Image */}
            <div className="relative group">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="/assets/vievely_front_2.jpeg" 
                  alt="Luxury Apartment Services" 
                  className="w-full h-[700px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-slate-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
            </div>

            {/* Column 2: Content List */}
            <div className="space-y-10">
              <div>
                <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-sm block mb-4">Elite Living</span>
                <h2 className="text-5xl font-black text-slate-900 mb-6 leading-tight">Apartment Services <br/> & Amenities</h2>
                <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
                 Experience luxury living at its finest in these exquisite suites, modern apartment. With stunning views and top-of-the-line amenities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                {AMENITIES.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm">
                      {item.icon}
                    </div>
                    <span className="font-bold text-slate-800 text-sm tracking-tight group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100">
                <Link 
                  href={"/booking"}
                  className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-600 transition-all flex items-center gap-4 group shadow-xl shadow-slate-100"
                >
                  Schedule A Visit <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Amenities;