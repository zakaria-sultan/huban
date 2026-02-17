import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, BarChart2, PieChart, ShieldCheck } from 'lucide-react'

const slides = [
    {
        id: 0,
        label: "Cash flow forecasting",
        icon: BarChart2,
        image: "/hero-cashflow.jpg",
        desc: "Predict future financial positions with accuracy."
    },
    {
        id: 1,
        label: "Market-leading BI tools",
        icon: PieChart,
        image: "/hero-bi.jpg",
        desc: "Interactive dashboards that drive decision making."
    },
    {
        id: 2,
        label: "Tax optimization strategies",
        icon: ShieldCheck,
        image: "/hero-tax.jpg",
        desc: "Minimize liabilities and maximize efficiency."
    }
]

export default function Hero() {
    const [activeTab, setActiveTab] = useState(0)

    // Auto-rotate tabs
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center bg-navy-950 pt-32 lg:pt-48 pb-10 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent-500/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                                Data-Driven <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">
                                    Strategic Advisory
                                </span>
                            </h1>
                            <p className="text-lg text-navy-100/80 leading-relaxed max-w-xl">
                                Leverage our business intelligence tools to unlock hidden growth opportunities. We transform your financial data into actionable strategies that fuel sustainable success.
                            </p>
                        </div>

                        {/* Interactive List / Tabs */}
                        <div className="space-y-3">
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`group cursor-pointer p-4 rounded-2xl transition-all duration-500 border relative overflow-hidden ${activeTab === index
                                        ? 'bg-white/10 border-accent-500/50 shadow-lg shadow-accent-500/10'
                                        : 'bg-transparent border-transparent hover:bg-white/5'
                                        }`}
                                >
                                    {/* Progress Bar Background for Active Tab */}
                                    {activeTab === index && (
                                        <div className="absolute bottom-0 left-0 h-1 bg-accent-500 transition-all duration-[5000ms] ease-linear w-full opacity-30" />
                                    )}

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2.5 rounded-xl transition-colors duration-300 ${activeTab === index ? 'bg-accent-500 text-white' : 'bg-white/10 text-white/50 group-hover:bg-white/20 group-hover:text-white'}`}>
                                                <slide.icon size={20} />
                                            </div>
                                            <div>
                                                <h3 className={`font-bold text-lg transition-colors ${activeTab === index ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                                                    {slide.label}
                                                </h3>
                                                <div className={`overflow-hidden transition-all duration-500 ${activeTab === index ? 'max-h-20 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                                                    <p className="text-sm text-accent-100/80">{slide.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRight size={18} className={`transition-all duration-300 ${activeTab === index ? 'text-accent-400 rotate-90 opacity-100' : 'text-white/20 opacity-0 -translate-x-2'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-accent-500/25"
                            >
                                Learn More <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Image Slider */}
                    <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-all duration-1000 transform ${activeTab === index
                                    ? 'opacity-100 scale-100 translate-x-0'
                                    : 'opacity-0 scale-110 translate-x-10'
                                    }`}
                            >
                                <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply z-10" />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-950/80 to-transparent z-10" />
                                <img
                                    src={slide.image}
                                    alt={slide.label}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 right-8 z-20">
                            <div className="inline-flex flex-col p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl transform transition-all duration-500 hover:scale-105">
                                <span className="text-accent-300 text-xs font-bold uppercase tracking-wider mb-1">Active Feature</span>
                                <span className="text-white font-bold text-xl">{slides[activeTab].label}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
