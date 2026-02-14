import { useEffect, useRef, useState } from 'react'
import {
    FileText, Receipt, CreditCard, BookOpen, Building2,
    Lightbulb, TrendingUp, User, Landmark, ArrowRight, CheckCircle2
} from 'lucide-react'
import Modal from './Modal'

const services = [
    {
        icon: FileText,
        title: 'Annual Accounts',
        description: 'Comprehensive annual accounts preparation to ensure compliance and give you clear insight into your business performance.',
        fullContent: (
            <div className="space-y-4">
                <p>Our Annual Accounts service is designed to take the stress out of year-end reporting. We handle everything from data collection to final filing with Companies House and HMRC.</p>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {[
                        'Statutory accounts preparation',
                        'Filing with Companies House',
                        'CT600 Corporation Tax return',
                        'Detailed financial analysis',
                        'Dividend planning advice',
                        'iXBRL tagging'
                    ].map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-navy-600">
                            <CheckCircle2 size={16} className="text-accent-500" /> {item}
                        </div>
                    ))}
                </div>
            </div>
        ),
        color: 'from-accent-400 to-accent-600',
        shadow: 'shadow-accent-500/20',
    },
    {
        icon: Receipt,
        title: 'VAT Returns',
        description: 'Expert VAT management, ensuring your returns are accurate, compliant, and submitted on time to avoid costly penalties.',
        fullContent: (
            <div className="space-y-4">
                <p>Navigating VAT regulations can be complex. We provide a full-service VAT management solution using MTD-compliant software.</p>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {[
                        'VAT registration support',
                        'Digital record keeping (MTD)',
                        'Quarterly return preparation',
                        'VAT scheme optimization',
                        'EU/International VAT advice',
                        'HMRC enquiry support'
                    ].map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-navy-600">
                            <CheckCircle2 size={16} className="text-accent-500" /> {item}
                        </div>
                    ))}
                </div>
            </div>
        ),
        color: 'from-blue-400 to-blue-600',
        shadow: 'shadow-blue-500/20',
    },
    {
        icon: CreditCard,
        title: 'Payroll Services',
        description: 'Accurate and timely payroll processing for businesses of all sizes, including RTI submissions and pension compliance.',
        fullContent: (
            <div className="space-y-4">
                <p>We provide a fully managed payroll service that scales with your business, ensuring your employees are paid correctly and on time.</p>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {[
                        'Weekly/Monthly processing',
                        'RTI filing with HMRC',
                        'Auto-enrolment pensions',
                        'P11D & P60 generation',
                        'CIS support for contractors',
                        'Director-only payroll setup'
                    ].map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-navy-600">
                            <CheckCircle2 size={16} className="text-accent-500" /> {item}
                        </div>
                    ))}
                </div>
            </div>
        ),
        color: 'from-violet-400 to-violet-600',
        shadow: 'shadow-violet-500/20',
    },
    {
        icon: BookOpen,
        title: 'Bookkeeping',
        description: 'Precision bookkeeping that keeps your records organized, up-to-date, and ready for reporting at any moment.',
        fullContent: (
            <div className="space-y-4">
                <p>Reliable bookkeeping is the foundation of good business. We use cloud-based tools to keep your finances transparent and accessible.</p>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {[
                        'Bank reconciliation',
                        'Accounts payable/receivable',
                        'Cloud software setup',
                        'Receipt/Expense tracking',
                        'Management reporting',
                        'Fixed asset register'
                    ].map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-navy-600">
                            <CheckCircle2 size={16} className="text-accent-500" /> {item}
                        </div>
                    ))}
                </div>
            </div>
        ),
        color: 'from-emerald-400 to-emerald-600',
        shadow: 'shadow-emerald-500/20',
    },
    {
        icon: Building2,
        title: 'Corporation Tax',
        description: 'Strategic tax planning and compliance to minimize your corporate tax liability while ensuring full legality.',
        fullContent: (
            <div className="space-y-4">
                <p>Every business is unique. We help you navigate corporation tax while identifying opportunities for legitimate tax savings.</p>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {[
                        'Tax efficient structuring',
                        'CT600 preparation',
                        'R&D tax credits',
                        'Capital allowances review',
                        'Group relief planning',
                        'HMRC dispute resolution'
                    ].map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-navy-600">
                            <CheckCircle2 size={16} className="text-accent-500" /> {item}
                        </div>
                    ))}
                </div>
            </div>
        ),
        color: 'from-amber-400 to-amber-600',
        shadow: 'shadow-amber-500/20',
    },
    {
        icon: Lightbulb,
        title: 'Tax Advice',
        description: 'Bespoke advisory services to help you make informed decisions about your personal and business tax strategy.',
        fullContent: (
            <div className="space-y-4">
                <p>Our tax advisory service goes beyond filing. We provide forward-looking strategies to protect your wealth and business assets.</p>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {[
                        'Personal tax planning',
                        'Inheritance tax (IHT)',
                        'Stamp Duty (SDLT)',
                        'Trusts & Estates',
                        'Business exit strategy',
                        'Offshore tax advice'
                    ].map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-navy-600">
                            <CheckCircle2 size={16} className="text-accent-500" /> {item}
                        </div>
                    ))}
                </div>
            </div>
        ),
        color: 'from-rose-400 to-rose-600',
        shadow: 'shadow-rose-500/20',
    },
]

export default function Services() {
    const [visible, setVisible] = useState(false)
    const [selectedService, setSelectedService] = useState(null)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="services" ref={ref} className="py-24 lg:py-32 bg-[#F8FAFC] relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-600 text-sm font-semibold mb-4 tracking-wide">
                        Our Services
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight">
                        Comprehensive Financial Solutions
                    </h2>
                    <p className="mt-4 text-lg text-navy-600/70 leading-relaxed">
                        From day-to-day bookkeeping to strategic tax planning — everything you need to stay compliant and grow your business.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.title}
                                className={`group relative bg-white rounded-3xl p-8 border border-navy-100/50 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${service.shadow} cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
                                onClick={() => setSelectedService(service)}
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg ${service.shadow} group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={24} className="text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-accent-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-navy-600/60 leading-relaxed text-sm mb-6">
                                    {service.description}
                                </p>

                                <button
                                    className="inline-flex items-center gap-1.5 text-accent-600 text-sm font-semibold group-hover:gap-3 transition-all"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setSelectedService(service)
                                    }}
                                >
                                    Read More <ArrowRight size={14} />
                                </button>

                                {/* Hover gradient border */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.05] transition-opacity -z-10`} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <Modal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                title={selectedService?.title}
            >
                <div className="space-y-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService?.color} flex items-center justify-center shadow-lg mb-4`}>
                        {selectedService && <selectedService.icon size={28} className="text-white" />}
                    </div>
                    {selectedService?.fullContent}
                    <div className="pt-6 border-t border-navy-50">
                        <a
                            href="#contact"
                            onClick={() => setSelectedService(null)}
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-2xl shadow-lg shadow-accent-500/20 hover:from-accent-400 hover:to-accent-500 transition-all hover:-translate-y-0.5"
                        >
                            Enquire About This Service
                        </a>
                    </div>
                </div>
            </Modal>
        </section>
    )
}
