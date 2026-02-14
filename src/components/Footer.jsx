import { Shield, ArrowUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const serviceLinks = [
    'Annual Accounts', 'VAT Returns', 'Payroll', 'Bookkeeping',
    'Corporation Tax', 'Tax Advice', 'Capital Gains Tax', 'Self-Assessment', 'Company Formation'
]

const quickLinks = [
    { name: 'Home', href: '#home' }, { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' }, { name: 'Tax Calculator', href: '#calculator' },
    { name: 'Pricing', href: '#pricing' }, { name: 'Contact', href: '#contact' },
]

const legalLinks = ['Terms of Use', 'Privacy Policy', 'Cookie Policy']

export default function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <footer className="bg-navy-950 text-white/60 relative">
            {/* CTA Band */}
            <div className="bg-gradient-to-r from-accent-700 to-accent-600">
                <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white">Ready to get started?</h3>
                        <p className="text-accent-100/80 mt-1">Book a free consultation and let us handle the numbers.</p>
                    </div>
                    <a href="#contact" className="px-8 py-3.5 bg-white text-accent-700 font-bold rounded-full hover:bg-accent-50 transition-colors shadow-lg whitespace-nowrap">
                        Book Free Consultation
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="space-y-5">
                        <a href="#home" className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                                <img src="/logo.jpeg" alt="HUBAN Logo" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <span className="text-xl font-bold text-white">HUBAN</span>
                            </div>
                        </a>
                        <p className="text-sm leading-relaxed">Your trusted partner in business solutions and financial advisory. Expert services for the modern enterprise.</p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-accent-500 flex items-center justify-center transition-all hover:-translate-y-0.5">
                                    <Icon size={16} className="text-white/60 hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Quick Links</h4>
                        <ul className="space-y-3">{quickLinks.map(l => <li key={l.name}><a href={l.href} className="text-sm hover:text-accent-400 transition-colors">{l.name}</a></li>)}</ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Services</h4>
                        <ul className="space-y-3">{serviceLinks.map(s => <li key={s}><a href="#services" className="text-sm hover:text-accent-400 transition-colors">{s}</a></li>)}</ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Contact</h4>
                        <div className="space-y-3 text-sm">
                            <p>516 Holloway Rd<br />London, N7 6JD, UK</p>
                            <p><a href="tel:02081783270" className="hover:text-accent-400 transition-colors">020 8178 3270</a></p>
                            <p><a href="mailto:admin@huban.co.uk" className="hover:text-accent-400 transition-colors">admin@huban.co.uk</a></p>
                            <p>Mon – Fri: 9:00 AM – 5:30 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs">© 2026 HUBAN. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                    </div>
                </div>
            </div>

            {/* Scroll to top */}
            <button onClick={scrollTop} className="fixed bottom-8 right-8 w-12 h-12 bg-accent-500 hover:bg-accent-400 text-white rounded-full shadow-2xl shadow-accent-500/30 flex items-center justify-center transition-all hover:-translate-y-1 z-50" aria-label="Scroll to top">
                <ArrowUp size={20} />
            </button>
        </footer>
    )
}
