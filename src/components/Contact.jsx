import { useState, useEffect, useRef } from 'react'
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react'

export default function Contact({ preselectedPlan }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        if (preselectedPlan) {
            setFormData(prev => ({
                ...prev,
                service: preselectedPlan,
                message: `I am interested in the ${preselectedPlan} package. Please provide more details.`
            }))
        }
    }, [preselectedPlan])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const handleSubmit = (e, method) => {
        if (e) e.preventDefault()

        if (method === 'whatsapp') {
            const message = `Hello HUBAN Team,\n\nI'm interested in your services.\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage: ${formData.message}`
            const encodedMessage = encodeURIComponent(message)
            const whatsappUrl = `https://wa.me/447575853636?text=${encodedMessage}`
            window.open(whatsappUrl, '_blank')
        } else {
            const subject = encodeURIComponent(`New Inquiry: ${formData.service || 'General Inquiry'}`)
            const body = encodeURIComponent(`Hello HUBAN Team,\n\nI'm interested in your services.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage: ${formData.message}`)
            window.location.href = `mailto:admin@huban.co.uk?subject=${subject}&body=${body}`
        }

        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        }, 5000)
    }

    return (
        <section id="contact" ref={ref} className="py-24 lg:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Content & Form */}
                    <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-600 text-sm font-semibold mb-4 tracking-wide">
                            Book a Consultation
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
                            Ready to handle <br />
                            <span className="text-accent-600">the numbers?</span>
                        </h2>
                        <p className="text-lg text-navy-600/70 mb-10 leading-relaxed">
                            Complete the form and choose your preferred contact method. We will get back to you within 2 business hours.
                        </p>

                        <form onSubmit={(e) => handleSubmit(e, 'email')} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-navy-50/50 border border-navy-100 focus:outline-none focus:border-accent-400 focus:ring-4 focus:ring-accent-400/10 transition-all"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-navy-50/50 border border-navy-100 focus:outline-none focus:border-accent-400 focus:ring-4 focus:ring-accent-400/10 transition-all"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-6 py-4 rounded-2xl bg-navy-50/50 border border-navy-100 focus:outline-none focus:border-accent-400 focus:ring-4 focus:ring-accent-400/10 transition-all"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                                <select
                                    className="w-full px-6 py-4 rounded-2xl bg-navy-50/50 border border-navy-100 focus:outline-none focus:border-accent-400 focus:ring-4 focus:ring-accent-400/10 transition-all appearance-none"
                                    value={formData.service}
                                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option value="">Select Service</option>
                                    <option value="Sole Trader">Sole Trader Package</option>
                                    <option value="Partnership">Partnership Package</option>
                                    <option value="Limited Company">Limited Company Package</option>
                                    <option value="Enterprise">Enterprise / Custom</option>
                                    <option value="Tax Advisory">Tax Advisory</option>
                                    <option value="VAT/Payroll">VAT & Payroll</option>
                                </select>
                            </div>
                            <textarea
                                placeholder="How can we help you?"
                                rows="4"
                                className="w-full px-6 py-4 rounded-3xl bg-navy-50/50 border border-navy-100 focus:outline-none focus:border-accent-400 focus:ring-4 focus:ring-accent-400/10 transition-all resize-none"
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={(e) => handleSubmit(null, 'whatsapp')}
                                    disabled={submitted || !formData.name || !formData.email}
                                    className={`py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl ${submitted
                                        ? 'bg-navy-100 text-navy-400 cursor-not-allowed'
                                        : 'bg-[#25D366] text-white shadow-emerald-500/10 hover:bg-[#20bd5a] hover:-translate-y-0.5'
                                        }`}
                                >
                                    <MessageCircle size={20} /> WhatsApp
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitted}
                                    className={`py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl ${submitted
                                        ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                        : 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-accent-500/20 hover:from-accent-400 hover:to-accent-500 hover:-translate-y-0.5'
                                        }`}
                                >
                                    {submitted ? (
                                        <><CheckCircle size={20} /> Sent</>
                                    ) : (
                                        <><Mail size={20} /> Email Us</>
                                    )}
                                </button>
                            </div>
                            <p className="text-center text-xs text-navy-400 mt-2">
                                * Choose your preferred method to send your inquiry.
                            </p>
                        </form>
                    </div>

                    {/* Right: Info Cards */}
                    <div className={`space-y-6 lg:pt-12 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="bg-navy-950 p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-accent-500/20 transition-all" />
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-accent-500/20 flex items-center justify-center shrink-0 border border-accent-500/30">
                                        <Phone size={20} className="text-accent-400" />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">Call Us</p>
                                        <a href="tel:+442081783270" className="text-lg font-bold hover:text-accent-400 transition-colors">020 8178 3270</a>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-accent-500/20 flex items-center justify-center shrink-0 border border-accent-500/30">
                                        <Mail size={20} className="text-accent-400" />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">Email Us</p>
                                        <a href="mailto:admin@huban.co.uk" className="text-lg font-bold hover:text-accent-400 transition-colors">admin@huban.co.uk</a>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-accent-500/20 flex items-center justify-center shrink-0 border border-accent-500/30">
                                        <MapPin size={20} className="text-accent-400" />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">Head Office</p>
                                        <p className="text-lg font-bold leading-tight">516 Holloway Rd<br />London, N7 6JD, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-accent-50 border border-accent-100 p-8 rounded-[2.5rem]">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-accent-500 flex items-center justify-center text-white">
                                    <Clock size={20} />
                                </div>
                                <h4 className="text-lg font-bold text-navy-900">Working Hours</h4>
                            </div>
                            <ul className="space-y-2 text-navy-700">
                                <li className="flex justify-between"><span>Mon — Fri:</span> <span className="font-bold">9:00 AM — 5:30 PM</span></li>
                                <li className="flex justify-between"><span>Saturday:</span> <span className="font-bold text-navy-400">Closed</span></li>
                                <li className="flex justify-between"><span>Sunday:</span> <span className="font-bold text-navy-400">Closed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
