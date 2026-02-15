import { useEffect, useRef, useState } from 'react'
import {
    FileText, Receipt, CreditCard, BookOpen, Building2,
    Lightbulb, TrendingUp, User, Landmark, ArrowRight, CheckCircle2, Shield
} from 'lucide-react'
import Modal from './Modal'

const services = [
    {
        category: 'Accountancy',
        icon: Building2,
        title: 'Company Accounts',
        description: 'Comprehensive annual accounts preparation for limited companies to ensure full compliance with Companies House.',
        fullContent: <div className="space-y-4">
            <p>We handle everything for your limited company, from statutory accounts to year-end filings.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Statutory accounts preparation</li>
                <li>Filing with Companies House</li>
                <li>HMRC compliance</li>
                <li>Director's report</li>
            </ul>
        </div>,
        color: 'from-accent-400 to-accent-600',
        shadow: 'shadow-accent-500/20',
    },
    {
        category: 'Accountancy',
        icon: User,
        title: 'Sole Trader Accounts',
        description: 'Dedicated accounting services for the self-employed, managing your business records and tax efficiency.',
        fullContent: <div className="space-y-4">
            <p>Perfect for freelancers and small business owners who need clear financial tracking.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Annual profit and loss accounts</li>
                <li>Expense tracking & advice</li>
                <li>Tax efficiency planning</li>
            </ul>
        </div>,
        color: 'from-blue-400 to-blue-600',
        shadow: 'shadow-blue-500/20',
    },
    {
        category: 'Accountancy',
        icon: Landmark,
        title: 'Property Rental Accounts',
        description: 'Specialized accounting for landlords to manage rental income and optimize deductible expenses.',
        fullContent: <div className="space-y-4">
            <p>Ensure your property portfolio is managed efficiently with expert tax advice for landlords.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Rental income statements</li>
                <li>Allowable expense tracking</li>
                <li>Multiple property management</li>
            </ul>
        </div>,
        color: 'from-violet-400 to-violet-600',
        shadow: 'shadow-violet-500/20',
    },
    {
        category: 'Accountancy',
        icon: CreditCard,
        title: 'Payroll and Pension',
        description: 'Full-service payroll management, including RTI submissions and workplace pension compliance.',
        fullContent: <div className="space-y-4">
            <p>Automate your payroll and stay compliant with ever-changing pension regulations.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Payslip generation</li>
                <li>RTI filing with HMRC</li>
                <li>Pension auto-enrolment</li>
            </ul>
        </div>,
        color: 'from-emerald-400 to-emerald-600',
        shadow: 'shadow-emerald-500/20',
    },
    {
        category: 'Accountancy',
        icon: FileText,
        title: 'Company Formation & Closure',
        description: 'Expert guidance through the process of setting up or closing a limited company legally and efficiently.',
        fullContent: <div className="space-y-4">
            <p>From day one through the end of your business journey, we handle the complex paperwork.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>New company registration</li>
                <li>Dissolution and strike-off</li>
                <li>Members' Voluntary Liquidation</li>
            </ul>
        </div>,
        color: 'from-amber-400 to-amber-600',
        shadow: 'shadow-amber-500/20',
    },
    {
        category: 'Taxation',
        icon: Lightbulb,
        title: 'Tax Planning & Advice',
        description: 'Strategic tax advisory to legally minimize your liability and protect your wealth.',
        fullContent: <div className="space-y-4">
            <p>Proactive strategies to help you and your business keep more of your hard-earned money.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Bespoke tax structuring</li>
                <li>Capital Gains Tax planning</li>
                <li>Inheritance tax advice</li>
            </ul>
        </div>,
        color: 'from-rose-400 to-rose-600',
        shadow: 'shadow-rose-500/20',
    },
    {
        category: 'Taxation',
        icon: Building2,
        title: 'Corporation Tax',
        description: 'Preparation and filing of CT600 returns while identifying all eligible reliefs.',
        fullContent: <div className="space-y-4">
            <p>Maximizing tax efficiency for your company through expert corporate tax management.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>CT600 preparation</li>
                <li>Tax incentive identification</li>
                <li>R&D tax credits</li>
            </ul>
        </div>,
        color: 'from-accent-500 to-accent-700',
        shadow: 'shadow-accent-600/20',
    },
    {
        category: 'Taxation',
        icon: User,
        title: 'Self-Assessment',
        description: 'Accurate and timely personal tax return filing to avoid penalties and ensure peace of mind.',
        fullContent: <div className="space-y-4">
            <p>Stress-free tax season with our comprehensive self-assessment service.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Personal tax return filing</li>
                <li>Payment reminders</li>
                <li>Tax calculation & review</li>
            </ul>
        </div>,
        color: 'from-sky-400 to-sky-600',
        shadow: 'shadow-sky-500/20',
    },
    {
        category: 'Taxation',
        icon: Receipt,
        title: 'VAT',
        description: 'Full VAT management, from registration to MTD-compliant quarterly returns.',
        fullContent: <div className="space-y-4">
            <p>Expert handling of VAT to ensure accuracy and compliance with HMRC digital standards.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>VAT Registration</li>
                <li>MTD return filing</li>
                <li>VAT scheme advice</li>
            </ul>
        </div>,
        color: 'from-blue-500 to-blue-700',
        shadow: 'shadow-blue-600/20',
    },
    {
        category: 'Taxation',
        icon: CreditCard,
        title: 'PAYE',
        description: 'Managing pay-as-you-earn tax systems for your employees with precision.',
        fullContent: <div className="space-y-4">
            <p>Ensuring correct tax and NI deductions for your entire workforce.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Employee tax codes</li>
                <li>P60/P45 generation</li>
                <li>HMRC reporting</li>
            </ul>
        </div>,
        color: 'from-indigo-400 to-indigo-600',
        shadow: 'shadow-indigo-500/20',
    },
    {
        category: 'Taxation',
        icon: Shield,
        title: 'CIS - Construction Industry Scheme',
        description: 'Accounting for construction industry professionals, managing monthly returns and sub-contractors.',
        fullContent: <div className="space-y-4">
            <p> especializados support for contractors and sub-contractors in the building trade.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>CIS monthly returns</li>
                <li>Sub-contractor verification</li>
                <li>Deduction statements</li>
            </ul>
        </div>,
        color: 'from-cyan-400 to-cyan-600',
        shadow: 'shadow-cyan-500/20',
    },
    {
        category: 'Consultancy',
        icon: BookOpen,
        title: 'Cloud System Solutions',
        description: 'Implementing modern accounting software (Xero, QuickBooks) to streamline your finance.',
        fullContent: <div className="space-y-4">
            <p>Modernize your business with real-time financial tracking and digital tools.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Software setup & training</li>
                <li>App integrations</li>
                <li>Digital record keeping</li>
            </ul>
        </div>,
        color: 'from-teal-400 to-teal-600',
        shadow: 'shadow-teal-500/20',
    },
    {
        category: 'Consultancy',
        icon: TrendingUp,
        title: 'Financial Forecasting & Planning',
        description: 'Projection and strategy services to help you predict growth and manage cash flow.',
        fullContent: <div className="space-y-4">
            <p>Plan for the future with data-driven financial modeling and strategic planning.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Cash flow forecasting</li>
                <li>Business plan support</li>
                <li>Budget tracking</li>
            </ul>
        </div>,
        color: 'from-green-400 to-green-600',
        shadow: 'shadow-green-500/20',
    },
    {
        category: 'Consultancy',
        icon: Lightbulb,
        title: 'Start up consultancy & advice',
        description: 'Comprehensive support for new entrepreneurs, from legal structure to first tax filings.',
        fullContent: <div className="space-y-4">
            <p>The expert advice you need to launch your business on a solid foundation.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Entity selection advice</li>
                <li>Initial tax registrations</li>
                <li>Strategic growth planning</li>
            </ul>
        </div>,
        color: 'from-lime-400 to-lime-600',
        shadow: 'shadow-lime-500/20',
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
                <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-500 text-sm font-black mb-4 tracking-widest uppercase">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black text-navy-900 leading-tight mb-6">
                        Full Suite of Professional <br /> Accounting Services
                    </h2>
                    <div className="w-20 h-1.5 bg-accent-500 mx-auto rounded-full" />
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, i) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.title}
                                className={`group relative bg-white rounded-2xl p-10 border border-navy-100/50 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-900/10 cursor-pointer text-center ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
                                onClick={() => setSelectedService(service)}
                            >
                                {/* Icon */}
                                <div className={`w-20 h-20 mx-auto rounded-full bg-accent-500/5 flex items-center justify-center mb-8 shadow-sm group-hover:bg-accent-500 transition-colors duration-500`}>
                                    <Icon size={32} className="text-accent-500 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-2xl font-black text-navy-900 mb-4 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-navy-500 leading-relaxed text-sm mb-8 line-clamp-2">
                                    {service.description}
                                </p>

                                <button
                                    className="inline-flex items-center gap-2 text-accent-500 text-sm font-black tracking-widest uppercase hover:gap-4 transition-all"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setSelectedService(service)
                                    }}
                                >
                                    Explore <ArrowRight size={16} strokeWidth={3} />
                                </button>
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
