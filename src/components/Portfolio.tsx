import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Trophy, 
  BarChart, 
  CheckCircle2, 
  Loader2,
  Menu,
  X,
  MessageSquare,
  Settings,
  Package
} from "lucide-react";

// --- Custom Styles ---
const styleTag = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  .portfolio-card {
    background: #ffffff;
    border: 1px solid rgba(220, 38, 38, 0.08);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .portfolio-card:hover {
    border-color: rgba(220, 38, 38, 0.3);
    transform: translateY(-8px);
    box-shadow: 0 30px 60px -12px rgba(220, 38, 38, 0.15);
  }
  .gradient-text {
    background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .red-shadow {
    box-shadow: 0 10px 30px -10px rgba(220, 38, 38, 0.4);
  }
  .image-overlay {
    background: linear-gradient(0deg, rgba(220, 38, 38, 0.8) 0%, rgba(220, 38, 38, 0) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .portfolio-card:hover .image-overlay {
    opacity: 1;
  }
  .stat-card {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .stat-card.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// --- Portfolio Data ---
const categories = ["All", "Websites", "Apps", "Videos", "Marketing"];

const projects = [
  {
    id: 1,
    title: "Vogue Essence",
    category: "Websites",
    results: "+145% Conversion",
    description: "A high-fashion luxury store featuring complex filtering and custom video integration.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    tags: ["Custom Liquid", "SEO Optimized", "Mobile First"]
  },
  {
    id: 2,
    title: "FitTrack Mobile",
    category: "Apps",
    results: "50k+ Downloads",
    description: "Seamless companion app for Shopify fitness brands to track orders and community progress.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "API Integration", "Push Notifications"]
  },
  {
    id: 3,
    title: "Cinematic Brand Story",
    category: "Videos",
    results: "2M+ Views",
    description: "High-end product launch video and social media campaign assets for a skincare giant.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    tags: ["4K Production", "Color Grading", "Social Ads"]
  },
  {
    id: 4,
    title: "Nordic Living Ads",
    category: "Marketing",
    results: "6.5x ROAS",
    description: "Omnichannel marketing strategy spanning Meta, Google, and TikTok for interior design.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["PPC Strategy", "Retargeting", "Email Flows"]
  },
  {
    id: 5,
    title: "Aura Athletics App",
    category: "Apps",
    results: "35% Retention Rate",
    description: "In-app loyalty and shopping experience integrated directly with Shopify Plus.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    tags: ["Loyalty Points", "Shopify Functions", "UX Design"]
  },
  {
    id: 6,
    title: "Urban Sounds Campaign",
    category: "Marketing",
    results: "4.9/5 Star Rating",
    description: "Complete brand identity and growth marketing launch for premium audio equipment.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    tags: ["Brand Identity", "Growth Hacking", "UGC Ads"]
  }
];

// --- Components ---

const AnimatedCounter = ({ target, duration = 2500, suffix = "", isAppeared }: { target: number; duration?: number; suffix?: string; isAppeared: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isAppeared) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    const requestID = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(requestID);
  }, [isAppeared, target, duration]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatCard = ({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) => {
  const [isAppeared, setIsAppeared] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsAppeared(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`stat-card text-center ${isAppeared ? 'is-visible' : ''}`}
    >
      <p className="text-4xl md:text-6xl font-black mb-2">
        <AnimatedCounter target={target} suffix={suffix} isAppeared={isAppeared} />
      </p>
      <p className="text-xs font-black uppercase tracking-widest opacity-80">{label}</p>
    </div>
  );
};

const ProjectCard = ({ project }: { project: any }) => (
  <div className="portfolio-card rounded-3xl overflow-hidden flex flex-col group">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
      />
      <div className="image-overlay absolute inset-0 flex items-end p-6">
        <button className="bg-white text-red-600 px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          View Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 shadow-sm">
        {project.category}
      </div>
    </div>
    
    <div className="p-8 flex flex-col flex-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-black text-slate-900 leading-tight">{project.title}</h3>
        <div className="flex items-center gap-1 text-green-600 font-bold text-sm bg-green-50 px-2 py-0.5 rounded-lg shrink-0">
          <BarChart className="w-3 h-3" />
          {project.results}
        </div>
      </div>
      
      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded-md uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [formData, setFormData] = useState({ name: '', phone: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', details: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const whatsappNumber = "8555971257";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-600/10 selection:text-red-600">
      <style dangerouslySetInnerHTML={{ __html: styleTag }} />
      
      {/* WhatsApp Floating Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`}
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
                <span key={link} className="text-sm font-semibold text-red-600 transition-colors">
                  {link}
                </span>
              ) : link === 'Home' ? (
                <Link key={link} to="/" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
                  {link}
                </Link>
              ) : (
                <Link key={link} to={`/#${link.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
                  {link}
                </Link>
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
                <span key={link} className="text-lg font-bold text-red-600">
                  {link}
                </span>
              ) : link === 'Home' ? (
                <Link key={link} to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-600">
                  {link}
                </Link>
              ) : (
                <Link key={link} to={`/#${link.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-600">
                  {link}
                </Link>
              )
            ))}
            <button className="w-full py-4 bg-red-600 text-white rounded-xl font-bold flex items-center justify-center gap-2">Launch Your Project <ArrowRight className="w-5 h-5" /></button>
            <a href="#trainings" className="w-full py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold text-center">Join Trainings</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-100 rounded-full mb-8 animate-float">
            <Trophy className="w-4 h-4 text-red-600" />
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Full-Service Digital Excellence</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8">
            <span className="text-slate-900">Websites, Apps,</span>
            <br />
            <span className="text-slate-900">Videos & </span>
            <span className="gradient-text">Marketing</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Omnichannel powerhouses. Explore our premium portfolio of high-converting digital assets across all formats.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                  ? 'bg-red-600 text-white red-shadow' 
                  : 'bg-white text-slate-400 border border-slate-200 hover:border-red-200 hover:text-red-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-red-600 text-white px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatCard target={300} suffix="+" label="Projects Completed" delay={0} />
            <StatCard target={50} suffix="+" label="Apps Launched" delay={150} />
            <StatCard target={100} suffix="M+" label="Ad Spend Managed" delay={300} />
            <StatCard target={500} suffix="+" label="Videos Produced" delay={450} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Scale Your Brand Today</h2>
              <p className="text-lg text-slate-500 font-medium">Ready to dominate? Let's talk strategy.</p>
            </div>

            <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 relative overflow-hidden shadow-2xl shadow-slate-200/50">
              {isSuccess && (
                <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-500 font-bold uppercase tracking-tight">An expert will contact you within 2 hours.</p>
                  <button onClick={() => setIsSuccess(false)} className="mt-8 text-red-600 font-black uppercase tracking-widest text-xs">Send another message</button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                    <input
                      required
                      type="text"
                      className="w-full h-16 bg-white border border-slate-200 rounded-2xl px-6 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 text-slate-900 font-bold transition-all"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">WhatsApp / Phone</label>
                    <input
                      required
                      type="tel"
                      className="w-full h-16 bg-white border border-slate-200 rounded-2xl px-6 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 text-slate-900 font-bold transition-all"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Project Details</label>
                  <textarea
                    required
                    className="w-full h-40 bg-white border border-slate-200 rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 text-slate-900 font-bold transition-all resize-none"
                    placeholder="Briefly describe your requirements..."
                    value={formData.details}
                    onChange={e => setFormData({...formData, details: e.target.value})}
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full h-20 bg-red-600 text-white rounded-2xl font-black text-xl uppercase tracking-widest red-shadow hover:bg-red-700 transition-all flex items-center justify-center gap-4"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <>Scale My Brand <ArrowRight className="w-6 h-6" /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
                    />
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
}