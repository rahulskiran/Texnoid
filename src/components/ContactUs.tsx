import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ArrowUpRight,
  Zap,
  Menu,
  X,
  ArrowRight,
  MessageSquare,
  Settings,
  Package
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { name: "WhatsApp", icon: <MessageCircle size={24} />, url: "https://wa.me/918555971257", color: "hover:bg-green-500", textColor: "group-hover:text-white" },
    { name: "LinkedIn", icon: <Linkedin size={24} />, url: "https://linkedin.com/company/texnoid", color: "hover:bg-blue-600", textColor: "group-hover:text-white" },
    { name: "Instagram", icon: <Instagram size={24} />, url: "https://www.instagram.com/texnoidco/", color: "hover:bg-pink-600", textColor: "group-hover:text-white" },
    { name: "YouTube", icon: <Youtube size={24} />, url: "https://youtube.com/@texnoid", color: "hover:bg-red-700", textColor: "group-hover:text-white" },
    { name: "Facebook", icon: <Facebook size={24} />, url: "https://facebook.com/texnoid", color: "hover:bg-blue-800", textColor: "group-hover:text-white" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-600/10 selection:text-red-600">
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/918555971257"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-bold text-sm">
          Chat with Us
        </span>
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/">
              <div className="h-8 w-auto sm:h-10 overflow-hidden flex items-center">
                  <img 
                      src="/texnoid-logo.png" 
                      alt="Texnoid Logo" 
                      className="h-full w-auto object-contain"
                  />
              </div>
            </Link>
            <span className="text-xl sm:text-2xl font-black uppercase tracking-widest text-slate-900">Texnoid</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'Services', 'Portfolio', 'Shopify Care', 'Trainings', 'Contact'].map(link => (
              link === 'Services' ? (
                <Link key={link} to="/shopify" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
                  {link}
                </Link>
              ) : link === 'Portfolio' ? (
                <Link key={link} to="/work" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
                  {link}
                </Link>
              ) : link === 'Contact' ? (
                <span key={link} className="text-sm font-semibold text-red-600 transition-colors">
                  {link}
                </span>
              ) : link === 'Home' ? (
                <Link key={link} to="/" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
                  {link}
                </Link>
              ) : (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
                  {link}
                </a>
              )
            ))}
            <a href="tel:8555971257" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-600 transition-all">
              Call Our Experts
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 p-6 absolute w-full flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            {['Home', 'Services', 'Portfolio', 'Shopify Care', 'Trainings', 'Contact'].map(link => (
              link === 'Services' ? (
                <Link key={link} to="/shopify" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-600">
                  {link}
                </Link>
              ) : link === 'Portfolio' ? (
                <Link key={link} to="/work" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-600">
                  {link}
                </Link>
              ) : link === 'Contact' ? (
                <span key={link} className="text-lg font-bold text-red-600">
                  {link}
                </span>
              ) : link === 'Home' ? (
                <Link key={link} to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-600">
                  {link}
                </Link>
              ) : (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-600">
                  {link}
                </a>
              )
            ))}
            <button className="bg-red-600 text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2">Launch Your Project <ArrowRight className="w-5 h-5" /></button>
            <a href="#trainings" className="bg-white text-slate-900 border-2 border-slate-200 w-full py-4 rounded-xl font-bold text-center">Join Trainings</a>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-20">
        
        {/* NEW: Animated Redirect Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.3em] mb-3">Instant Redirection</h2>
              <p className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Connect on <span className="underline decoration-red-600 underline-offset-8">Demand.</span>
              </p>
            </div>
            <p className="text-slate-500 max-w-sm text-lg font-medium">
              Choose your preferred channel for immediate technical consultation and updates.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className={`group relative flex flex-col items-center justify-center p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] transition-all duration-500 overflow-hidden ${link.color} hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-100
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`p-4 bg-white rounded-2xl text-red-600 mb-4 shadow-sm transition-transform duration-500 group-hover:scale-125 ${link.textColor}`}>
                  {link.icon}
                </div>
                <span className={`font-black uppercase tracking-widest text-xs text-slate-400 transition-colors duration-500 ${link.textColor}`}>
                  {link.name}
                </span>
                <ArrowUpRight size={16} className={`absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-1 group-hover:translate-x-1 ${link.textColor}`} />
              </a>
            ))}
          </div>
        </section>

        {/* Main Content: Split Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Form Area */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <h3 className="text-3xl font-black text-slate-900 mb-4">Initialize Project Brief</h3>
              <p className="text-slate-500 text-lg">Our engineering team reviews inquiries every morning. Describe your technical hurdles below.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    required
                    type="text" 
                    placeholder=" "
                    className="peer w-full px-0 py-4 bg-transparent border-b-2 border-slate-200 focus:border-red-600 outline-none transition-all font-bold text-xl placeholder:opacity-0"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <label className="absolute left-0 top-4 text-slate-400 font-bold transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">IDENTIFIER / NAME</label>
                </div>
                <div className="relative group">
                  <input 
                    required
                    type="email" 
                    placeholder=" "
                    className="peer w-full px-0 py-4 bg-transparent border-b-2 border-slate-200 focus:border-red-600 outline-none transition-all font-bold text-xl placeholder:opacity-0"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <label className="absolute left-0 top-4 text-slate-400 font-bold transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">COMMUNICATION / EMAIL</label>
                </div>
              </div>

              <div className="relative group">
                <textarea 
                  required
                  rows={4} 
                  placeholder=" "
                  className="peer w-full px-0 py-4 bg-transparent border-b-2 border-slate-200 focus:border-red-600 outline-none transition-all font-bold text-xl resize-none placeholder:opacity-0"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                <label className="absolute left-0 top-4 text-slate-400 font-bold transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">SPECIFICATIONS / MESSAGE</label>
              </div>

              <button 
                disabled={formStatus === 'sending'}
                type="submit" 
                className={`group relative overflow-hidden px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-red-100 ${
                  formStatus === 'sending' ? 'bg-slate-100 text-slate-400' : 'bg-red-600 text-white'
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {formStatus === 'sending' ? 'UPLOADING...' : 'TRANSMIT BRIEF'}
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              {formStatus === 'success' && (
                <div className="p-6 bg-red-50 border-l-4 border-red-600 text-red-600 font-bold flex items-center justify-between rounded-r-xl">
                  <span>Packet received. Standby for response.</span>
                  <Zap size={20} className="animate-pulse" />
                </div>
              )}
            </form>
          </div>

          {/* Right: Quick Context Area */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <h4 className="text-xl font-black mb-6 flex items-center gap-3 italic">
                <Phone size={20} className="text-red-500" /> HOTLINE
              </h4>
              <div className="space-y-2 mb-10">
                <p className="text-3xl font-black tracking-tight">+91 8555971257</p>
                <p className="text-slate-400 font-medium">Available 09:00 - 18:00 IST</p>
              </div>
              <div className="pt-8 border-t border-white/10 flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                  <Mail size={24} className="text-red-500" />
                </div>
                <div>
                  <p className="font-bold">info@texnoid.com</p>
                  <p className="text-sm text-slate-400">Email us anytime</p>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                  <MapPin size={24} className="text-red-500" />
                </div>
                <div>
                  <p className="font-bold">San Francisco, CA</p>
                  <p className="text-sm text-slate-400">Innovation District, Bld 4</p>
                </div>
              </div>
            </div>

            {/* Micro FAQ Accordion */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-6">Internal Knowledge Base</h4>
              {[
                { q: "Technical onboarding timeline?", a: "Typically 48-72 hours post-agreement." },
                { q: "Preferred communication?", a: "We prioritize WhatsApp for quick syncs and Slack for development." }
              ].map((faq, i) => (
                <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-5 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-700 text-sm">{faq.q}</span>
                    {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-slate-500 bg-white animate-in slide-in-from-top-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 sm:gap-3 mb-6">
                <div className="h-10 w-auto overflow-hidden flex items-center">
                    <img
                        src="/texnoid-logo.png"
                        alt="Texnoid Logo"
                        className="h-full w-auto object-contain"
                        onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                        }}
                    />
                    <div className="hidden h-10 w-10 bg-red-600 rounded-xl items-center justify-center">
                        <span className="text-white font-bold text-xl">T</span>
                    </div>
                </div>
                <span className="text-xl sm:text-2xl font-black uppercase tracking-widest text-slate-900">Texnoid Solutions LLP</span>
              </div>
              <p className="text-slate-500 max-sm font-medium leading-relaxed mb-4">
                A multi-disciplinary digital execution agency and training center. We specialize in Shopify Plus, SaaS development, mobile applications, and professional training modules.
              </p>
              <p className="text-xs font-black text-red-600 uppercase tracking-widest">
                Registration No: ACS-5802
              </p>
            </div>
            <div>
              <h4 className="font-black mb-6 uppercase tracking-widest text-xs text-slate-400">Services</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-600">
                <li><a href="#" className="hover:text-red-600">Shopify Care</a></li>
                <li><a href="#" className="hover:text-red-600">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-red-600">SaaS Logic</a></li>
                <li><a href="#" className="hover:text-red-600">Digital Marketing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-6 uppercase tracking-widest text-xs text-slate-400">Online Trainings</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-600">
                <li><a href="#" className="hover:text-red-600">Internships</a></li>
                <li><a href="#" className="hover:text-red-600">Certifications</a></li>
                <li><a href="#" className="hover:text-red-600">Curriculum</a></li>
                <li><a href="#" className="hover:text-red-600">Alumni</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-bold text-slate-400">© {new Date().getFullYear()} Texnoid Solutions LLP. All rights reserved. Registered Digital Agency.</p>
            <div className="flex gap-8">
               <a href="#" className="text-slate-400 hover:text-red-600 transition-colors"><MessageSquare className="w-5 h-5" /></a>
               <a href="#" className="text-slate-400 hover:text-red-600 transition-colors"><Settings className="w-5 h-5" /></a>
               <a href="#" className="text-slate-400 hover:text-red-600 transition-colors"><Package className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;