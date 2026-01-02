import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  MessageSquare, 
  ArrowRight,
  Menu,
  X,
  LayoutGrid,
  Settings,
  Package,
  Code2,
  Smartphone,
  Video,
  Palette,
  Megaphone,
  GraduationCap,
  ExternalLink,
  Layers,
  Award
} from 'lucide-react';

// --- Portfolio Data (Descriptive) ---
const portfolioProjects = [
  {
    id: 1,
    title: "Global Eco-Store SaaS",
    category: "Web Development",
    stack: "React, Node.js, Shopify Plus",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    desc: "A headless commerce solution built for a sustainable retail giant, handling over 10k transactions daily with 99.9% uptime."
  },
  {
    id: 2,
    title: "Pulse Fitness Mobile",
    category: "Mobile App",
    stack: "React Native, Firebase, AI",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    desc: "A cross-platform fitness ecosystem featuring real-time biometric tracking, AI workout suggestions, and social community integration."
  },
  {
    id: 3,
    title: "Azure Real Estate Portal",
    category: "Framer / Wix",
    stack: "Framer, Advanced SEO, CMS",
    image: "https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&q=80&w=800",
    desc: "A visually stunning property platform with interactive 3D floor plans and high-speed search functionality for luxury listings."
  },
  {
    id: 4,
    title: "Vanguard Brand Identity",
    category: "Graphic Design",
    stack: "Figma, Adobe Suite",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
    desc: "A complete visual overhaul for a Fintech startup, including logo design, color theory application, and 50+ unique UI components."
  },
  {
    id: 5,
    title: "Hyper-Growth Video Ad",
    category: "Video Editing",
    stack: "After Effects, DaVinci",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    desc: "High-conversion motion graphics and cinematic editing for a SaaS product launch that generated 1M+ views across social channels."
  },
  {
    id: 6,
    title: "Organic Scale Strategy",
    category: "Digital Marketing",
    stack: "Content Strategy, SEM",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d8?auto=format&fit=crop&q=80&w=800",
    desc: "Data-driven organic content roadmap that increased inbound leads by 300% without spending a single rupee on paid advertisements."
  }
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === filter);

  const pricingPlans = [
    {
      name: "Starter Support",
      label: "Perfect for boutique Shopify stores",
      price: "₹5,999",
      hours: "10 Dedicated Hours / Month",
      features: [
        "Immediate bug & error resolution",
        "Minor CSS/Liquid layout tweaks",
        "Bulk product & inventory uploads",
        "Home-page banner & text updates",
        "Performance & security audit"
      ],
      support: "Turnaround: 48 Business Hours",
      channels: "Email & WhatsApp Ticketing",
      cta: "Activate Plan",
      highlight: false
    },
    {
      name: "Business Growth",
      label: "Accelerated care for scaling brands",
      price: "₹11,999",
      hours: "20 Dedicated Hours / Month",
      features: [
        "Everything in Starter Support",
        "Full Speed Optimization (Lighthouse)",
        "Advanced App configuration",
        "CRO (Conversion Rate) adjustments",
        "Monthly strategy consultation",
        "Priority Developer access"
      ],
      support: "Turnaround: 24 Business Hours",
      channels: "Dedicated WhatsApp Group",
      cta: "Choose Business",
      highlight: true
    },
    {
      name: "Enterprise Prime",
      label: "High-volume, multi-store management",
      price: "₹19,999",
      hours: "35 Dedicated Hours / Month",
      features: [
        "Everything in Business Growth",
        "Custom App development logic",
        "Integration with ERP/CRM",
        "Weekend emergency support",
        "Weekly performance reporting",
        "Full-time Lead Developer"
      ],
      support: "Turnaround: Same-Day Critical",
      channels: "VIP Direct Call Access",
      cta: "Go Enterprise",
      highlight: false
    }
  ];

  const mainServices = [
    { icon: <Code2 className="w-6 h-6" />, title: "Full-Stack Development", desc: "We engineer robust, scalable web architectures using modern JavaScript frameworks like React, Next.js, and Node.js." },
    { icon: <Package className="w-6 h-6" />, title: "Shopify & CMS Mastery", desc: "Expert Shopify Plus, Wix, and Framer development. We build high-conversion storefronts that merge speed with style." },
    { icon: <Smartphone className="w-6 h-6" />, title: "Native Mobile Apps", desc: "High-performance iOS and Android applications built with React Native for seamless user experiences and fast deployment." },
    { icon: <Layers className="w-6 h-6" />, title: "Enterprise SaaS", desc: "Turning complex business problems into intuitive software solutions. We handle everything from database design to UI implementation." },
    { icon: <Video className="w-6 h-6" />, title: "Creative Video Production", desc: "Cinematic video editing and motion graphics that tell your brand's story and capture attention in milliseconds." },
    { icon: <Palette className="w-6 h-6" />, title: "UI/UX & Brand Design", desc: "User-centric design thinking applied to branding, web interfaces, and marketing collateral for a cohesive brand identity." },
    { icon: <Megaphone className="w-6 h-6" />, title: "Digital Marketing", desc: "Driving organic growth through strategic content creation, SEO, and social engagement—zero reliance on ad-spend." },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Online Trainings", desc: "Industry-leading internship programs and virtual modules where trainees build live projects and earn official certification." },
  ];

  const whatsappNumber = "8555971257";

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-red-100 selection:text-red-900 scroll-smooth">
      
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
                <Link key={link} to="/work" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
                  {link}
                </Link>
              ) : link === 'Contact' ? (
                <Link key={link} to="/contact" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
                  {link}
                </Link>
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
                <Link key={link} to="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-600">
                  {link}
                </Link>
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

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-red-50 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-red-100 rounded-full blur-[100px] -z-10 opacity-30"></div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 mb-8">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-red-700">Web & App Development Studio</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.95]">
                We Don't Just Design. <br /> We <span className="text-red-600">Develop.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              From high-conversion websites to scalable web & mobile apps, we engineer digital products that grow businesses. Shopify maintenance and training solutions come next.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto px-10 py-5 bg-red-600 text-white rounded-2xl font-black text-lg hover:bg-slate-900 shadow-xl shadow-red-200 transition-all flex items-center justify-center gap-2">
                  Discuss a Project<ArrowRight className="w-6 h-6" />
                </button>
                <a href="#trainings" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-black text-lg hover:bg-slate-50 text-center transition-all">
                  Join Our Trainings
                </a>
              </div>
            </div>
            
            <div className="flex-1 relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                 <div className="absolute inset-0 bg-red-600 rounded-[4rem] rotate-6 opacity-10"></div>
                 <div className="absolute inset-0 bg-white border border-slate-100 shadow-2xl rounded-[3rem] overflow-hidden flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-6 w-full h-full">
                       <div className="bg-red-50 rounded-3xl flex flex-col items-center justify-center p-6 border border-red-100 group hover:bg-red-600 transition-all cursor-default">
                          <Code2 className="w-12 h-12 text-red-600 mb-2 group-hover:text-white" />
                          <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-white">Build</span>
                       </div>
                       <div className="bg-slate-900 rounded-3xl flex flex-col items-center justify-center p-6 group hover:bg-red-600 transition-all cursor-default">
                          <LayoutGrid className="w-12 h-12 text-red-500 mb-2 group-hover:text-white" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-white">Design</span>
                       </div>
                       <div className="bg-red-600 rounded-3xl flex flex-col items-center justify-center p-6 shadow-xl shadow-red-200 group hover:bg-slate-900 transition-all cursor-default">
                          <TrendingUp className="w-12 h-12 text-white mb-2" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-white">Scale</span>
                       </div>
                       <div className="bg-white rounded-3xl flex flex-col items-center justify-center p-6 border border-slate-100 group hover:bg-red-600 transition-all cursor-default">
                          <Award className="w-12 h-12 text-red-600 mb-2 group-hover:text-white" />
                          <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-white">Certify</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="services" className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Our Services</h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg font-medium">We don't just provide services; we provide competitive advantages. Our multidisciplinary team ensures your digital footprint is powerful, modern, and high-performing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service, idx) => (
              <div key={idx} className="group p-8 bg-white border border-slate-100 rounded-[3rem] hover:shadow-2xl hover:shadow-red-100 transition-all duration-500">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-red-600 transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Our Engineering <span className="text-red-600">Legacy</span></h2>
              <p className="text-slate-500 text-lg font-medium">A showcase of complex builds, high-conversion designs, and organic marketing success.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["All", "Web Development", "Mobile App", "Framer / Wix", "Digital Marketing"].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 rounded-2xl text-sm font-black tracking-tight transition-all ${filter === cat ? 'bg-red-600 text-white shadow-lg shadow-red-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {project.category}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black mb-4 group-hover:text-red-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">{project.desc}</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-8">
                    <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{project.stack}</span>
                    <button className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-red-600 transition-all shadow-lg">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainings Section */}
      <section id="trainings" className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.1),transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 mb-8">
                <GraduationCap className="w-5 h-5 text-red-500" />
                <span className="text-xs font-black uppercase tracking-widest text-red-500">Professional Online Trainings</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">
                Build Skill. <br /> <span className="text-red-500">Get Certified.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                Our Online Trainings are where theory meets reality. We offer intensive internship programs in Web Development, Shopify Management, and Digital Marketing. Learn from senior developers and graduate with an industry-recognized certificate.
              </p>
              
              <div className="grid gap-8 mb-12">
                {[
                  { title: "Live Client Projects", desc: "Don't just code tutorials. Work on real Shopify themes, SaaS backends, and creative marketing campaigns." },
                  { title: "Standardized Certification", desc: "Receive a verified digital certificate upon completion of your internship to boost your career prospects." },
                  { title: "Full-Stack Mentorship", desc: "Weekly code reviews and architecture discussions with our core technical leads." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="mt-1 w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="px-12 py-6 bg-red-600 text-white rounded-2xl font-black text-xl hover:bg-red-500 shadow-2xl shadow-red-900/40 transition-all flex items-center justify-center gap-3">
                Apply for Training <Award className="w-6 h-6" />
              </button>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-6 pt-12">
               <div className="space-y-6">
                  <div className="p-8 bg-red-600 rounded-[3rem] text-center shadow-2xl shadow-red-900/20">
                     <span className="text-5xl font-black block mb-2">100+</span>
                     <span className="text-xs uppercase font-black tracking-widest text-red-100">Certified Interns</span>
                  </div>
                  <div className="p-8 bg-slate-900 rounded-[3rem] border border-slate-800">
                     <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(s => <Zap key={s} className="w-4 h-4 text-red-500 fill-red-500" />)}
                     </div>
                     <p className="text-sm italic text-slate-300 font-medium">"Texnoid gave me the confidence to handle Shopify Liquid and React in a production environment. The certificate opened so many doors."</p>
                     <p className="text-xs mt-6 font-black text-red-500 uppercase tracking-widest">— Sneha R., Frontend Intern</p>
                  </div>
               </div>
               <div className="pt-12 space-y-6">
                  <div className="h-64 bg-slate-800 rounded-[3rem] overflow-hidden border border-slate-700 group">
                     <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500" alt="Team Training" />
                  </div>
                  <div className="p-8 bg-white rounded-[3rem] text-slate-950 flex flex-col items-center justify-center text-center">
                     <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
                        <Award className="w-10 h-10 text-red-600" />
                     </div>
                     <span className="text-xs font-black uppercase tracking-tighter">Gold Standard Certification</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Care Section */}
      <section id="shopify-care" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 mb-8">
               <Package className="w-5 h-5 text-red-600" />
               <span className="text-xs font-black uppercase tracking-widest text-red-700">Dedicated E-commerce Maintenance</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Expert Shopify Maintenance</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Don't let technical debt slow down your sales. Our monthly plans provide guaranteed hours for growth, speed, and stability.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-stretch">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`relative p-10 rounded-[3.5rem] flex flex-col transition-all duration-500 ${plan.highlight ? 'bg-slate-950 text-white shadow-3xl shadow-red-200 lg:-mt-6 lg:-mb-6 border-4 border-red-600' : 'bg-white border-2 border-slate-100 hover:border-red-200 hover:shadow-2xl'}`}>
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                    Recommended Choice
                  </div>
                )}
                
                <div className="mb-10">
                  <span className={`text-sm font-black uppercase tracking-[0.2em] ${plan.highlight ? 'text-red-500' : 'text-slate-400'}`}>{plan.name}</span>
                  <p className={`text-base mt-2 font-medium ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>{plan.label}</p>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className={`text-sm font-bold uppercase ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>/ Month</span>
                  </div>
                  <div className={`mt-6 py-2.5 px-5 rounded-2xl text-[10px] font-black uppercase tracking-widest inline-block ${plan.highlight ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-red-50 text-red-700'}`}>
                    {plan.hours}
                  </div>
                </div>

                <div className="flex-1 space-y-5 mb-12">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-4">
                      <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-red-600' : 'bg-red-100'}`}>
                        <CheckCircle2 className={`w-3 h-3 ${plan.highlight ? 'text-white' : 'text-red-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all duration-300 ${plan.highlight ? 'bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/30' : 'bg-slate-900 text-white hover:bg-red-600'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 px-6 mb-12">
        <div className="max-w-6xl mx-auto bg-red-600 rounded-[4rem] p-16 md:p-28 text-center relative overflow-hidden shadow-3xl shadow-red-200">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
                Your Next Big Project <br /> Starts Here.
              </h2>
              <p className="text-red-100 mb-12 max-w-2xl mx-auto text-xl font-medium">
                Agency experts or certified trainees—we are all builders. Join the Texnoid ecosystem today and let's create something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-12 py-6 bg-white text-red-700 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-transform">
                    Start Agency Project
                 </button>
                 <button className="px-12 py-6 bg-slate-950 text-white rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-transform">
                    Apply for Trainings
                 </button>
              </div>
           </div>
           {/* Background graphics */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.1),transparent)]"></div>
           <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full -ml-40 -mb-40 blur-3xl"></div>
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

export default App;
