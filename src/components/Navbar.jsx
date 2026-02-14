import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Shield, Phone, LogIn, MessageCircle, Mail, Lock } from 'lucide-react'
import Modal from './Modal'

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
    const [servicesOpen, setServicesOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Top bar */}
            <div className="hidden lg:block bg-navy-950 text-white/70 text-sm py-2">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="tel:+447947128542" className="flex items-center gap-1.5 hover:text-accent-400 transition-colors">
                            <Phone size={13} /> +44 7947 128542
                        </a>
                        <span className="text-white/20">|</span>
                        <a href="https://wa.me/447947128542" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent-400 transition-colors">
                            <MessageCircle size={13} /> WhatsApp
                        </a>
                        <span className="text-white/20">|</span>
                        <a href="mailto:admin@huban.co.uk" className="flex items-center gap-1.5 hover:text-accent-400 transition-colors">
                            <Mail size={13} /> admin@huban.co.uk
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-white/50">Mon – Fri: 9:00 AM – 5:30 PM</span>
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <nav
                id="navbar"
                className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-navy-900/95 backdrop-blur-xl shadow-2xl shadow-navy-950/50'
                    : 'bg-navy-900/70 backdrop-blur-md'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <a href="#home" className="flex flex-col items-start leading-none group">
                            <span className="text-3xl font-black text-white tracking-tighter">HUBAN</span>
                            <span className="text-[10px] font-medium text-accent-400 uppercase tracking-[0.2em] mt-0.5">Chartered Accountants</span>
                        </a>

                        {/* Desktop nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.slice(0, 2).map(link => (
                                <a key={link.name} href={link.href} className="px-4 py-2 text-sm text-white/80 hover:text-accent-400 font-medium transition-colors rounded-lg hover:bg-white/5">
                                    {link.name}
                                </a>
                            ))}

                            {/* Services dropdown */}
                            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                                <button className="px-4 py-2 text-sm text-white/80 hover:text-accent-400 font-medium transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1">
                                    Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {servicesOpen && (
                                    <div className="absolute top-full left-0 mt-1 w-64 bg-navy-800/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-navy-950/50 py-2 animate-fade-in">
                                        {services.map(s => (
                                            <a key={s.name} href={s.href} className="block px-5 py-2.5 text-sm text-white/70 hover:text-accent-400 hover:bg-white/5 transition-all">
                                                {s.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {navLinks.slice(2).map(link => (
                                <a key={link.name} href={link.href} className="px-4 py-2 text-sm text-white/80 hover:text-accent-400 font-medium transition-colors rounded-lg hover:bg-white/5">
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="#contact"
                                className="px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white text-sm font-bold rounded-full shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 transition-all hover:-translate-y-0.5"
                            >
                                Book Consultation
                            </a>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            className="lg:hidden text-white p-2"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="lg:hidden bg-navy-900/98 backdrop-blur-xl border-t border-white/10 animate-fade-in">
                        <div className="px-6 py-4 space-y-1">
                            {navLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-3 text-white/80 hover:text-accent-400 hover:bg-white/5 rounded-xl transition-all font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#services"
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-3 text-white/80 hover:text-accent-400 hover:bg-white/5 rounded-xl transition-all font-medium"
                            >
                                Services
                            </a>
                            <div className="pt-3">
                                <a href="#contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl font-bold shadow-lg">
                                    Book Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
