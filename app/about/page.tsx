"use client"
import { 
  Menu, X, Bed, Users, Square, Coffee, Wifi, Tv, Wind, 
  MapPin, Phone, Mail, Instagram, Facebook, Twitter, 
  ChevronRight, Star, CheckCircle, Calendar, ShieldCheck,
  ArrowRight, Waves, Utensils
} from 'lucide-react';
import Header from '../components/navbar';
import Footer from '../components/footer';


  const AboutView = () => {
    return(
    <div className="pt-0 animate-in fade-in duration-500">
        <Header/>
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-sm mb-6 block">Our Ethos</span>
            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight">Crafting spaces for the <span className="italic font-serif text-amber-500 underline decoration-amber-500/30 underline-offset-8">world traveler.</span></h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Vievely Suites isn't just a place to sleep; it's a testament to urban sophistication. Located in the soul of the city, we combine residential comfort with bespoke hotel services.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80')] bg-cover grayscale" />
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src="/assets/reception.jpeg" className="rounded-[4rem] shadow-2xl" alt="Lobby" />
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
      <Footer/>
    </div>
    )
};

export default AboutView