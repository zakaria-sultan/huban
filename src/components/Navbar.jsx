import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Phone, MessageCircle, Mail } from 'lucide-react'

const services = [
    { name: 'Company Accounts', href: '#services' },
    { name: 'Sole Trader Accounts', href: '#services' },
    { name: 'Property Rental Accounts', href: '#services' },
    { name: 'Payroll & Pension', href: '#services' },
    { name: 'Company Formation', href: '#services' },
    { name: 'Self-Assessment', href: '#services' },
    { name: 'VAT Returns', href: '#services' },
    { name: 'CIS Support', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' },
]

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Top Bar */}
            <div className={`hidden lg:block bg-navy-950 text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] py-2.5 transition-all duration-500 border-b border-white/5 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'opacity-100'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <a href="tel:+447947128542" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone size={11} className="text-accent-400" /> +44 7947 128542
                        </a>
                        <a href="https://wa.me/447947128542" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                            <MessageCircle size={11} className="text-emerald-400" /> WhatsApp
                        </a>
                        <a href="mailto:admin@huban.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail size={11} className="text-accent-400" /> admin@huban.co.uk
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-white/40">Mon – Fri: 9:00 AM – 5:30 PM</span>
                    </div>
                </div>
            </div>

            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled || mobileOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                    } ${!scrolled && !mobileOpen ? 'lg:top-10' : 'top-0'}`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-3 active:scale-95 transition-transform group">
                            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl overflow-hidden shadow-2xl border border-white/20 group-hover:border-accent-400 transition-colors">
                                <img src="/logo.jpeg" alt="HUBAN Logo" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col items-start leading-none">
                                <span className={`text-xl lg:text-2xl font-black tracking-widest uppercase transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}>HUBAN</span>
                                <span className={`text-[8px] font-black uppercase tracking-[0.3em] mt-1 transition-colors ${scrolled ? 'text-accent-600' : 'text-accent-400'}`}>Chartered Accountants</span>
                            </div>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.slice(0, 2).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-[11px] font-black uppercase tracking-widest transition-all hover:text-accent-500 ${scrolled ? 'text-navy-900' : 'text-white/70 hover:text-white'}`}
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* Services Dropdown */}
                            <div className="relative group/s">
                                <button className={`text-[11px] font-black uppercase tracking-widest transition-all hover:text-accent-500 flex items-center gap-1 ${scrolled ? 'text-navy-900' : 'text-white/70 hover:text-white'}`}>
                                    Services <ChevronDown size={12} className="group-hover/s:rotate-180 transition-transform" />
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white border border-navy-50 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.1)] py-4 opacity-0 invisible group-hover/s:opacity-100 group-hover/s:visible transition-all duration-300">
                                    <div className="grid grid-cols-1 divide-y divide-navy-50">
                                        {services.map((s) => (
                                            <a key={s.name} href={s.href} className="px-6 py-3 text-[10px] text-navy-600 hover:text-accent-500 hover:bg-navy-50 font-black uppercase tracking-widest transition-all">
                                                {s.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {navLinks.slice(2).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-[11px] font-black uppercase tracking-widest transition-all hover:text-accent-500 ${scrolled ? 'text-navy-900' : 'text-white/70 hover:text-white'}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="tel:+447947128542"
                                className={`px-8 py-3.5 text-[11px] font-black uppercase tracking-widest rounded-full transition-all hover:-translate-y-1 active:scale-95 border ${scrolled
                                    ? 'bg-navy-900 text-white hover:bg-accent-600 border-navy-900'
                                    : 'bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-md'}`}
                            >
                                Get Started
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden text-white p-2"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="lg:hidden fixed inset-0 top-[64px] bg-navy-950 z-40 p-6 animate-fade-in overflow-y-auto">
                        <div className="space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block p-5 text-lg text-white font-black uppercase tracking-widest bg-white/5 rounded-2xl"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-6 grid grid-cols-2 gap-3">
                                <a href="tel:+447947128542" className="flex items-center justify-center gap-2 p-5 bg-white/5 rounded-2xl text-white font-bold">
                                    <Phone size={18} /> Call
                                </a>
                                <a href="https://wa.me/447947128542" className="flex items-center justify-center gap-2 p-5 bg-white/5 rounded-2xl text-emerald-400 font-bold">
                                    <MessageCircle size={18} /> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
