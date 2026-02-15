import { Link } from 'react-router-dom'
import { ArrowUp, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react'

const serviceLinks = [
    { name: 'Annual Accounts', href: '/services' },
    { name: 'VAT Returns', href: '/services' },
    { name: 'Payroll & Pension', href: '/services' },
    { name: 'Bookkeeping', href: '/services' },
    { name: 'Corporation Tax', href: '/services' },
    { name: 'Tax Advice', href: '/services' },
]

const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
]

// Removed legal links as per user request

export default function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <footer className="bg-navy-950 text-white/50 pt-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                                <img src="/logo.jpeg" alt="HUBAN Logo" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-2xl font-black text-white tracking-tighter">HUBAN</span>
                                <span className="text-[10px] font-bold text-accent-500 uppercase tracking-[0.2em] mt-0.5">Chartered Accountants</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs block">
                            UK leading digital financial advisors. We provide strategic accounting and tax excellence for the modern enterprise.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-accent-500 flex items-center justify-center transition-all hover:-translate-y-1">
                                    <Icon size={18} className="text-white/60 hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h4 className="text-white font-black mb-8 text-sm tracking-widest uppercase">Services</h4>
                        <ul className="space-y-4">
                            {serviceLinks.map(l => (
                                <li key={l.name}>
                                    <Link to={l.href} className="text-sm hover:text-accent-500 transition-colors flex items-center gap-2 group">
                                        <div className="w-1 h-1 rounded-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {l.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Access Column */}
                    <div>
                        <h4 className="text-white font-black mb-8 text-sm tracking-widest uppercase">Quick Links</h4>
                        <ul className="space-y-4">
                            {quickLinks.map(l => (
                                <li key={l.name}>
                                    <Link to={l.href} className="text-sm hover:text-accent-500 transition-colors flex items-center gap-2 group">
                                        <div className="w-1 h-1 rounded-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {l.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-black mb-8 text-sm tracking-widest uppercase">Contact Us</h4>
                        <div className="space-y-6 text-sm">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin size={18} className="text-accent-500" />
                                </div>
                                <span>516 Holloway Rd<br />London, N7 6JD, UK</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone size={18} className="text-accent-500" />
                                </div>
                                <a href="tel:+447947128542" className="hover:text-accent-500 transition-colors">+44 7947 128542</a>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail size={18} className="text-accent-500" />
                                </div>
                                <a href="mailto:admin@huban.co.uk" className="hover:text-accent-500 transition-colors">admin@huban.co.uk</a>
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
