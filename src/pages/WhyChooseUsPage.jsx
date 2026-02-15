import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function WhyChooseUsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const reasons = [
        {
            title: "Experienced Professionals",
            description: "Our firm is led by qualified and highly experienced finance and tax professionals who understand both local UK regulations and international business environments."
        },
        {
            title: "Tailored Client Solutions",
            description: "We recognise that every business is unique. Our services are customised to match the specific needs, size, and growth plans of each client."
        },
        {
            title: "Proactive Tax and Business Advice",
            description: "We go beyond compliance by identifying tax-saving opportunities, financial efficiencies, and strategic improvements that enhance profitability."
        },
        {
            title: "One-Stop Financial Service Provider",
            description: "From bookkeeping and payroll to tax advisory and business consulting, we provide complete financial solutions under one roof, saving clients time and administrative effort."
        },
        {
            title: "Reliability and Timeliness",
            description: "We are committed to delivering accurate, timely, and dependable services, ensuring that our clients meet all statutory deadlines and regulatory requirements."
        },
        {
            title: "Client-Focused Approach",
            description: "We build long-term partnerships with our clients, offering responsive support, clear communication, and practical guidance to help them succeed in a competitive business environment."
        }
    ]

    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/" className="inline-flex items-center gap-2 text-accent-500 font-bold mb-8 hover:text-accent-600 transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <h1 className="text-4xl lg:text-5xl font-black text-navy-900 mb-12">
                    Why Choose Us
                </h1>

                <div className="grid gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex gap-4 p-6 bg-navy-50 rounded-2xl border border-navy-100 hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 mt-1">
                                <CheckCircle2 className="text-accent-500 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy-900 mb-2">{reason.title}</h3>
                                <p className="text-navy-700/80 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
