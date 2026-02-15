import React, { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { servicesData } from '../data/servicesData'

export default function ServiceDetailPage() {
    const { slug } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    // Find the service in the nested structure
    let service = null
    let category = null

    for (const cat of servicesData) {
        const found = cat.services.find(s => s.slug === slug)
        if (found) {
            service = found
            category = cat.title
            break
        }
    }

    if (!service) {
        return <Navigate to="/services" replace />
    }

    const Icon = service.icon || CheckCircle2

    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/services" className="inline-flex items-center gap-2 text-accent-500 font-bold mb-8 hover:text-accent-600 transition-colors">
                    <ArrowLeft size={20} /> Back to Services
                </Link>

                <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-600 text-sm font-semibold tracking-wide">
                        {category}
                    </span>
                </div>

                <div className="flex items-start gap-6 mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                        <Icon size={32} className="text-accent-600" />
                    </div>
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-black text-navy-900 mb-6">
                            {service.title}
                        </h1>
                        <p className="text-xl text-navy-700/80 leading-relaxed max-w-2xl">
                            {service.description}
                        </p>
                    </div>
                </div>

                <div className="bg-navy-50 rounded-3xl p-8 lg:p-12 border border-navy-100">
                    <h2 className="text-2xl font-bold text-navy-900 mb-8">Clients should expect:</h2>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        {service.expectations.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 className="text-accent-500 w-5 h-5" />
                                </div>
                                <p className="text-navy-700 font-medium leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to get started?</h2>
                            <p className="text-white/70 mb-8 max-w-xl mx-auto">
                                Contact us today to discuss how our {service.title} services can help your business grow.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-all hover:-translate-y-1 shadow-lg shadow-accent-500/25"
                            >
                                Enquire Now
                            </Link>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] group-hover:bg-accent-500/20 transition-all duration-700" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700" />
                    </div>
                </div>
            </div>
        </div>
    )
}
