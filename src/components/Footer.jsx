import { Link } from 'react-router-dom'
import { ArrowUp, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react'
import { servicesData } from '../data/servicesData'

const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our History', href: '/our-history' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Contact', href: '/contact' },
]

// Removed legal links as per user request

export default function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    // Flatten services for footer usage or split by category
    const accountancyServices = servicesData.find(c => c.slug === 'accountancy')?.services || []
    const taxServices = servicesData.find(c => c.slug === 'tax-advisory')?.services || []

    return (
        <footer className="bg-navy-950 text-white/50 pt-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 active:scale-95 transition-transform">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                                <img src="/logo.jpeg" alt="HUBAN Logo" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-2xl font-black text-white tracking-tighter">HUBAN</span>
                                <span className="text-[10px] font-bold text-accent-500 uppercase tracking-[0.2em] mt-0.5">Chartered Accountants</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs block">
                            Huban Accountants is a professional firm led by experienced finance professionals. We provide comprehensive accounting, tax advisory, and business consultancy services tailored to help businesses grow and stay compliant.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-accent-500 flex items-center justify-center transition-all hover:-translate-y-1">
                                    <Icon size={18} className="text-white/60 hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Accountancy Services Column */}
                    <div>
                        <h4 className="text-white font-black mb-8 text-sm tracking-widest uppercase">Accountancy</h4>
                        <ul className="space-y-3">
                            {accountancyServices.slice(0, 6).map(s => (
                                <li key={s.slug}>
                                    <Link to={`/services/${s.slug}`} onClick={() => window.scrollTo(0, 0)} className="text-sm hover:text-accent-500 transition-colors flex items-center gap-2 group">
                                        <div className="w-1 h-1 rounded-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {s.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/services" className="text-xs font-bold text-accent-500 hover:text-white mt-2 inline-block">View All Services →</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Tax & Advisory Column */}
                    <div>
                        <h4 className="text-white font-black mb-8 text-sm tracking-widest uppercase">Tax & Advisory</h4>
                        <ul className="space-y-3">
                            {taxServices.slice(0, 6).map(s => (
                                <li key={s.slug}>
                                    <Link to={`/services/${s.slug}`} onClick={() => window.scrollTo(0, 0)} className="text-sm hover:text-accent-500 transition-colors flex items-center gap-2 group">
                                        <div className="w-1 h-1 rounded-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {s.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Access / Contact Column */}
                    <div className="space-y-10">
                        <div>
                            <h4 className="text-white font-black mb-6 text-sm tracking-widest uppercase">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map(l => (
                                    <li key={l.name}>
                                        <Link to={l.href} onClick={() => window.scrollTo(0, 0)} className="text-sm hover:text-accent-500 transition-colors flex items-center gap-2 group">
                                            <div className="w-1 h-1 rounded-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {l.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-black mb-6 text-sm tracking-widest uppercase">Contact</h4>
                            <div className="space-y-4 text-sm">
                                <a href="mailto:admin@huban.co.uk" className="flex items-center gap-3 hover:text-white transition-colors">
                                    <Mail size={14} className="text-accent-500" /> admin@huban.co.uk
                                </a>
                                <a href="tel:+447947128542" className="flex items-center gap-3 hover:text-white transition-colors">
                                    <Phone size={14} className="text-accent-500" /> +44 7947 128542
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 text-xs font-bold tracking-widest uppercase">
                    <p>© 2026 HUBAN. All rights reserved.</p>
                </div>
            </div>

            {/* Scroll to Top */}
            <button
                onClick={scrollTop}
                className="fixed bottom-10 right-10 w-14 h-14 bg-accent-500 hover:bg-accent-600 text-white rounded-2xl shadow-2xl shadow-accent-500/40 flex items-center justify-center transition-all hover:-translate-y-2 z-50 group active:scale-95"
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} strokeWidth={3} className="group-hover:-translate-y-1 transition-transform" />
            </button>
        </footer>
    )
}
