import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function OurHistoryPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/" className="inline-flex items-center gap-2 text-accent-500 font-bold mb-8 hover:text-accent-600 transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <h1 className="text-4xl lg:text-5xl font-black text-navy-900 mb-8">
                    Our History
                </h1>

                <div className="prose prose-lg text-navy-700/80 max-w-none space-y-6">
                    <p>
                        Huban Accountants is a professional firm of accountants and tax advisors established by experienced finance professionals with extensive expertise in accounting, taxation, audit, and business advisory services across multiple sectors. Our depth of knowledge and practical experience enables us to deliver high-quality financial and tax solutions tailored to the unique needs of each client, whether they are focused on business growth, regulatory compliance, or effective tax planning.
                    </p>
                    <p>
                        At Huban, we adopt a proactive and client-focused approach, ensuring that every engagement is supported by customised strategies designed to help our clients remain compliant, efficient, and financially strong. Our team works closely with businesses, entrepreneurs, and individuals to provide reliable insights that support informed decision-making and sustainable long-term success.
                    </p>
                    <p>
                        Operating across the UK and serving international clients, Huban offers a comprehensive range of services including accounting, bookkeeping, payroll, tax compliance, tax advisory, and business consultancy. By delivering integrated solutions under one umbrella, we provide clients with convenience, consistency, and trusted professional support at every stage of their business journey.
                    </p>
                    <p>
                        We are committed to handling your accounting and tax matters in a professional, timely, and cost-effective manner, allowing you to focus on growing your business with confidence while we manage the financial and compliance responsibilities.
                    </p>
                </div>
            </div>
        </div>
    )
}
