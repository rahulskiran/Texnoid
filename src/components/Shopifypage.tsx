import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Clock, 
  Users, 
  ArrowRight, 
  User, 
  Globe, 
  Mail, 
  Settings, 
  Palette, 
  Layers, 
  Monitor, 
  Pencil, 
  Image as ImageIcon, 
  Package, 
  Menu, 
  X,
  FileText, 
  Star, 
  Truck, 
  CreditCard, 
  TestTube, 
  BarChart3, 
  UserCheck,
  CheckCircle2,
  MessageSquare,
  Loader2
} from "lucide-react";

// --- Custom Styles for Red & White Theme ---
const styleTag = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(220, 38, 38, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .glass-card:hover {
    background: #ffffff;
    border-color: rgba(220, 38, 38, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(220, 38, 38, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .gradient-text {
    background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .red-glow-subtle {
    box-shadow: 0 0 20px rgba(220, 38, 38, 0.05);
  }
  .red-shadow-strong {
    box-shadow: 0 10px 30px -10px rgba(220, 38, 38, 0.4);
  }
`;

// --- Data ---
const services = [
  { number: 1, title: "Shopify Account Creation", icon: User, description: "Set up your Shopify account with all necessary details, including store name, address, and mail id." },
  { number: 2, title: "Domain Integration", icon: Globe, description: "Connect your new/existing domain to your store by updating your domain's DNS settings." },
  { number: 3, title: "Business Gmail Setup", icon: Mail, description: "Configure Gmail settings to send and receive emails from your customers and vendors." },
  { number: 4, title: "Backend Configuration", icon: Settings, description: "Configure your store's backend general settings, payment providers, and other options." },
  { number: 5, title: "Design Mockups", icon: Palette, description: "Present 3 unique website design mockups with different styles and layouts for your selection." },
  { number: 6, title: "Theme Customization", icon: Layers, description: "Modify the theme's layout and structure to create a unique and engaging user experience." },
  { number: 7, title: "Responsive Design", icon: Monitor, description: "Optimize your store's design for responsiveness across all devices." },
  { number: 8, title: "Content Creation", icon: Pencil, description: "Create compelling and witty content for your homepage that highlights your brand." },
  { number: 9, title: "Banner Design", icon: ImageIcon, description: "Use AI-powered tools to create stunning banner designs for your store." },
  { number: 10, title: "Product Setup", icon: Package, description: "Import your product catalog into Shopify and organize products into collections." },
  { number: 11, title: "Navigation Setup", icon: Menu, description: "Organize your menu into logical categories and subcategories to improve browsing." },
  { number: 12, title: "Legal Pages", icon: FileText, description: "Create essential legal pages including privacy policy, terms of service, and refund policy." },
  { number: 13, title: "Plugin Integration", icon: Star, description: "Identify and integrate relevant e-commerce apps and plugins to enhance functionality." },
  { number: 14, title: "Shipping Setup", icon: Truck, description: "Set up shipping zones, rates, and carriers to offer accurate shipping options." },
  { number: 15, title: "Payment Gateway", icon: CreditCard, description: "Configure payment gateway settings to accept payments securely from customers." },
  { number: 16, title: "Quality Testing", icon: TestTube, description: "Conduct thorough testing of your store to ensure performance across different devices." },
  { number: 17, title: "Training Session", icon: BarChart3, description: "Provide training on how to manage your store, including managing orders and content." },
  { number: 18, title: "Ownership Transfer", icon: UserCheck, description: "Finalize the transfer of ownership to ensure you have complete control of the site." },
];

const checkboxServicesList = [
  "Shopify Website Creation",
  "Shopify Website Redesign",
  "Website Marketing",
];

// --- Components ---

const ServiceCard = ({ number, title, description, icon: Icon }: { number: number; title: string; description: string; icon: any }) => (
  <div className="group glass-card rounded-2xl p-6 cursor-default bg-white">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold text-white bg-red-600 px-2 py-0.5 rounded-full uppercase tracking-wider">
            Step {String(number).padStart(2, "0")}
          </span>
          <h3 className="text-base font-bold text-slate-900 truncate group-hover:text-red-600 transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    details: '',
    selectedServices: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', details: '', selectedServices: [] });
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
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
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
          </Link>

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
              ) : link === 'Home' ? (
                <Link key={link} to="/" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
                  {link}
                </Link>
              ) : link === 'Contact' ? (
                <Link key={link} to="/contact" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
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
                <Link key={link} to="/work" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-600">
                  {link}
                </Link>
              ) : link === 'Home' ? (
                <Link key={link} to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-600">
                  {link}
                </Link>
              ) : link === 'Contact' ? (
                <Link key={link} to="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-600">
                  {link}
                </Link>
              ) : (
                <Link key={link} to={`/#${link.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-600">
                  {link}
                </Link>
              )
            ))}
            <button className="bg-red-600 text-white w-full py-4 rounded-xl font-bold">Talk to an Expert</button>
          </div>
        )}
      </nav>
      
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-16 px-6">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-100 rounded-full mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Premium Shopify Agency</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
            <span className="gradient-text">Everything You Get</span>
            <br />
            <span className="text-slate-900">When We Build Your</span>
            <br />
            <span className="text-slate-700">Dream Website</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From initial setup to final ownership transfer, we handle every technical and creative detail so you can focus on scaling your vision.
          </p>

          <div className="mt-12 flex justify-center items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 42}`} alt="Client" />
                </div>
              ))}
            </div>
            <div className="text-left border-l border-slate-200 pl-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />)}
              </div>
              <p className="text-sm text-slate-600 font-bold mt-1 tracking-tight">Trusted by 150+ Store Owners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-24 px-6 relative bg-white border-y border-slate-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <div className="lg:sticky lg:top-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full mb-6">
                <Clock className="w-4 h-4 text-red-600" />
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Efficiency Guaranteed</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                Ready in <span className="text-red-600 underline decoration-red-100 underline-offset-8">1.5 - 2 Months</span>
                <br />
                To Dominate Your Market
              </h2>

              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                We don't just build sites; we build conversion machines. Quality engineering requires precision, and our rigorous process ensures every pixel works for your bottom line.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-red-200 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                    <Users className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg group-hover:text-red-600 transition-colors">Limited Intake</p>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">We only take 2 new clients per month to maintain our high standards of quality and support.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-red-600 rounded-2xl text-white red-shadow-strong animate-pulse hover:animate-none transition-all cursor-default">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-lg font-black">!</span>
                  </div>
                  <div>
                    <p className="font-black text-xl tracking-tight">Status: High Demand</p>
                    <p className="text-sm opacity-90 font-bold">Only 1 slot remaining for this quarter.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact" className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden">
              {isSuccess && (
                <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 font-medium">Our team will reach out to you on WhatsApp within 24 hours.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-sm font-bold text-red-600 hover:text-red-700 underline decoration-red-200"
                  >
                    Send another request
                  </button>
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-3xl font-black text-slate-900 mb-2">Claim Your Slot</h3>
                <p className="text-slate-500 mb-10 font-bold">Tell us about your project and we'll get back to you with a custom strategy.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Alex Johnson"
                        className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl px-5 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 text-slate-900 placeholder:text-slate-400 transition-all font-medium"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">WhatsApp Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl px-5 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 text-slate-900 placeholder:text-slate-400 transition-all font-medium"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">What do you need help with?</label>
                    <div className="grid grid-cols-1 gap-2">
                      {checkboxServicesList.map((service) => (
                        <div 
                          key={service}
                          onClick={() => toggleService(service)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.selectedServices.includes(service) 
                              ? 'bg-red-50 border-red-600 text-red-600' 
                              : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                            formData.selectedServices.includes(service)
                              ? 'bg-red-600 border-red-600'
                              : 'border-slate-300'
                          }`}>
                            {formData.selectedServices.includes(service) && <CheckCircle2 className="w-3 h-3 text-white" />}
                          </div>
                          <span className="text-sm font-bold">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Project Details</label>
                    <textarea
                      placeholder="Share your goals, timeline, or current website URL..."
                      className="w-full h-32 bg-slate-50 border border-slate-200 rounded-xl p-5 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 text-slate-900 placeholder:text-slate-400 transition-all resize-none font-medium"
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full h-16 bg-red-600 hover:bg-red-700 disabled:bg-slate-300 text-white rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-600/20"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        Request Free Quote
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
                    Premium Quality • 100% Secure
                  </p>
                </form>
              </div>
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
                <li><Link to="/shopify" className="hover:text-red-600">Shopify Care</Link></li>
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