import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, MessageCircle, Mail } from 'lucide-react'

import { servicesData } from '../data/servicesData'

const aboutLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our History', href: '/our-history' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
]

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

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
                className={`fixed w-full z-[100] transition-all duration-300 ${scrolled || mobileOpen || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                    } ${!scrolled && !mobileOpen && isHome ? 'lg:top-10' : 'top-0'}`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform group">
                            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl overflow-hidden shadow-2xl border border-white/20 group-hover:border-accent-400 transition-colors">
                                <img src="/logo.jpeg" alt="HUBAN Logo" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col items-start leading-none">
                                <span className={`text-xl lg:text-2xl font-black tracking-widest uppercase transition-colors ${scrolled || !isHome ? 'text-navy-900' : 'text-white'}`}>HUBAN</span>
                                <span className={`text-[8px] font-black uppercase tracking-[0.3em] mt-1 transition-colors ${scrolled || !isHome ? 'text-accent-600' : 'text-accent-400'}`}>Chartered Accountants</span>
                            </div>
                        </Link>

                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.slice(0, 1).map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-[11px] font-black uppercase tracking-widest transition-all hover:text-accent-500 ${scrolled || !isHome ? 'text-navy-900' : 'text-white/70 hover:text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="relative group">
                                <Link
                                    to="/about"
                                    className={`text-[11px] font-black uppercase tracking-widest transition-all hover:text-accent-500 py-4 flex items-center gap-1 ${scrolled || !isHome ? 'text-navy-900' : 'text-white/70 hover:text-white'}`}
                                >
                                    About <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                </Link>

                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[220px] bg-white rounded-2xl shadow-xl border border-navy-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-navy-100" />
                                    <div className="relative space-y-1">
                                        {aboutLinks.slice(1).map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.href}
                                                className="block px-4 py-2.5 text-sm font-bold text-navy-800 hover:text-accent-500 hover:bg-navy-50 rounded-xl transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <Link
                                    to="/services"
                                    className={`text-[11px] font-black uppercase tracking-widest transition-all hover:text-accent-500 py-4 flex items-center gap-1 ${scrolled || !isHome ? 'text-navy-900' : 'text-white/70 hover:text-white'}`}
                                >
                                    Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                </Link>

                                {/* Dropdown Menu */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[300px] bg-white rounded-2xl shadow-xl border border-navy-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-navy-100" />
                                    <div className="relative p-2">
                                        {servicesData.map((category) => (
                                            <div key={category.title} className="group/cat relative">
                                                <div className="flex items-center justify-between px-4 py-3 text-sm font-bold text-navy-800 hover:text-accent-500 hover:bg-navy-50 rounded-xl cursor-pointer transition-colors">
                                                    {category.title}
                                                    <ChevronDown size={14} className="-rotate-90 text-navy-400 group-hover/cat:text-accent-500" />
                                                </div>

                                                {/* Nested Menu */}
                                                <div className="absolute top-0 right-full mr-2 w-[280px] bg-white rounded-2xl shadow-xl border border-navy-100 p-2 opacity-0 invisible group-hover/cat:opacity-100 group-hover/cat:visible transition-all duration-200 transform translate-x-4 group-hover/cat:translate-x-0">
                                                    {category.services.map(service => (
                                                        <Link
                                                            key={service.slug}
                                                            to={`/services/${service.slug}`}
                                                            className="block px-4 py-2.5 text-xs font-bold text-navy-700 hover:text-accent-500 hover:bg-navy-50 rounded-xl transition-colors"
                                                        >
                                                            {service.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {navLinks.slice(1).map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-[11px] font-black uppercase tracking-widest transition-all hover:text-accent-500 ${scrolled || !isHome ? 'text-navy-900' : 'text-white/70 hover:text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Link
                                to="/contact"
                                className={`px-8 py-3.5 text-[11px] font-black uppercase tracking-widest rounded-full transition-all hover:-translate-y-1 active:scale-95 border ${scrolled || !isHome
                                    ? 'bg-navy-900 text-white hover:bg-accent-600 border-navy-900'
                                    : 'bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-md'}`}
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className={`lg:hidden p-2 ${scrolled || !isHome ? 'text-navy-900' : 'text-white'}`}
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
                            <Link
                                to="/"
                                onClick={() => setMobileOpen(false)}
                                className="block p-5 text-lg text-white font-black uppercase tracking-widest bg-white/5 rounded-2xl"
                            >
                                Home
                            </Link>

                            <div className="block p-5 bg-white/5 rounded-2xl">
                                <span className="text-lg text-white font-black uppercase tracking-widest block mb-4">About</span>
                                <div className="space-y-3 pl-4 border-l border-white/10">
                                    {aboutLinks.map(link => (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block text-sm text-white/70 hover:text-white"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="block p-5 bg-white/5 rounded-2xl">
                                <span className="text-lg text-white font-black uppercase tracking-widest block mb-4">Services</span>
                                <div className="space-y-4 pl-4 border-l border-white/10">
                                    {servicesData.map(category => (
                                        <div key={category.title}>
                                            <span className="text-sm font-bold text-white/50 uppercase tracking-wider block mb-2">{category.title}</span>
                                            <div className="pl-4 space-y-2 border-l border-white/5">
                                                {category.services.map(s => (
                                                    <Link
                                                        key={s.slug}
                                                        to={`/services/${s.slug}`}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block text-sm text-white/80 hover:text-white transition-colors"
                                                    >
                                                        {s.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <Link
                                        to="/services"
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-sm text-accent-400 font-bold mt-4"
                                    >
                                        View All Servicess
                                    </Link>
                                </div>
                            </div>

                            {navLinks.slice(1).map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block p-5 text-lg text-white font-black uppercase tracking-widest bg-white/5 rounded-2xl"
                                >
                                    {link.name}
                                </Link>
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
