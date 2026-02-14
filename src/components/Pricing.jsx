import { useEffect, useRef, useState } from 'react'
import { Check, ArrowRight, Zap, Star } from 'lucide-react'

const plans = [
    {
        title: 'Sole Trader',
        price: '49',
        features: [
            'Accounts preparation',
            'Personal tax return',
            'Basic tax planning',
            'Email support',
            'Xero/QuickBooks setup'
        ],
        popular: false,
    },
    {
        title: 'Partnership',
        price: '89',
        features: [
            'Partnership tax return',
            'Individual tax returns',
            'Quarterly reviews',
            'Priority email support',
            'VAT return support'
        ],
        popular: false,
    },
    {
        title: 'Limited Company',
        price: '149',
        features: [
            'Statutory accounts',
            'Corporation tax return',
            'Payroll (up to 5 staff)',
            'Quarterly bookkeeping',
            'Personal tax advice'
        ],
        popular: true,
    },
    {
        title: 'Enterprise',
        price: 'Custom',
        features: [
            'Dedicated manager',
            'Monthly bookkeeping',
            'Strategic tax planning',
            'R&D tax credits',
            'Unlimited advisory'
        ],
        popular: false,
    },
]

export default function Pricing({ onSelectPlan }) {
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const handleSelect = (planTitle) => {
        onSelectPlan(planTitle)
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="pricing" ref={ref} className="py-24 lg:py-32 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-600 text-sm font-semibold mb-4 tracking-wide">
                        Flexible Pricing
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight">
                        Transparent, Fixed-Fee Packages
                    </h2>
                    <p className="mt-4 text-lg text-navy-600/70 leading-relaxed">
                        No hidden costs. Choose the plan that fits your business stage.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, i) => (
                        <div
                            key={plan.title}
                            className={`group relative bg-white rounded-3xl p-8 border border-navy-100/50 hover:border-accent-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-navy-900 mb-2">{plan.title}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-extrabold text-navy-900">{plan.price === 'Custom' ? '' : '£'}{plan.price}</span>
                                    {plan.price !== 'Custom' && <span className="text-navy-400 text-sm font-medium">/mo + VAT</span>}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-navy-600/80">
                                        <Check size={16} className="text-accent-500 mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleSelect(plan.title)}
                                className={`w-full py-3.5 rounded-2xl font-bold transition-all ${plan.popular
                                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/20 hover:from-accent-400 hover:to-accent-500'
                                    : 'bg-navy-50 text-navy-900 hover:bg-navy-100'
                                    }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
                <p className="text-center text-navy-600/40 text-sm mt-12 flex items-center justify-center gap-1.5">
                    <Star size={14} className="text-amber-400" />
                    All packages include HMRC-approved software and dedicated support.
                </p>
            </div>
        </section>
    )
}
