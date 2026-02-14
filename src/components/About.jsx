import { useEffect, useRef, useState } from 'react'
import { Award, Users, Target, Heart, CheckCircle } from 'lucide-react'

const stats = [
    { label: 'Happy Clients', value: 500, suffix: '+', icon: Users },
    { label: 'Years Experience', value: 15, suffix: '+', icon: Award },
    { label: 'Returns Filed', value: 1200, suffix: '+', icon: Target },
    { label: 'Client Retention', value: 99, suffix: '%', icon: Heart },
]

const pillars = [
    { title: 'Trusted Tax Expertise', desc: 'Our team stays ahead of changing laws and regulations to ensure full compliance.' },
    { title: 'Tailored to Your Needs', desc: 'Whether you\'re an individual or a business, we customize our approach.' },
    { title: 'On-Time and Error-Free', desc: 'Precision filing and timely submissions — every single time.' },
    { title: 'Client-First Service', desc: 'Your goals drive our strategy. We put your financial success first.' },
]

function AnimatedCounter({ value, suffix, started }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!started) return
        let start = 0
        const duration = 2000
        const step = Math.ceil(value / (duration / 16))
        const timer = setInterval(() => {
            start += step
            if (start >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(start)
            }
        }, 16)
        return () => clearInterval(timer)
    }, [started, value])

    return <span>{count.toLocaleString()}{suffix}</span>
}

export default function About() {
    const [visible, setVisible] = useState(false)
    const [statsVisible, setStatsVisible] = useState(false)
    const ref = useRef(null)
    const statsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.15 }
        )
        const statsObserver = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        if (statsRef.current) statsObserver.observe(statsRef.current)
        return () => { observer.disconnect(); statsObserver.disconnect() }
    }, [])

    return (
        <section id="about" className="relative overflow-hidden">
            {/* Main about section */}
            <div ref={ref} className="py-24 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Text */}
                        <div className={`space-y-8 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-600 text-sm font-semibold tracking-wide">
                                About Us
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight">
                                Your Trusted <span className="gradient-text">Chartered</span> Partner
                            </h2>
                            <p className="text-lg text-navy-600/70 leading-relaxed">
                                At our firm, we do more than just crunch numbers — we deliver clarity, confidence, and results.
                                Our team of experienced tax professionals stays ahead of changing laws and regulations to ensure
                                you're always compliant and protected.
                            </p>
                            <p className="text-navy-600/60 leading-relaxed">
                                Whether you're an individual, entrepreneur, or established business, we help you legally
                                minimize tax liabilities and maximize financial efficiency. Focus on running and growing
                                your business — leave the financial management to us.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                {pillars.map((p, i) => (
                                    <div
                                        key={p.title}
                                        className={`flex gap-3 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                        style={{ transitionDelay: `${300 + i * 100}ms` }}
                                    >
                                        <CheckCircle size={20} className="text-accent-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-navy-900 text-sm">{p.title}</h4>
                                            <p className="text-navy-600/50 text-xs mt-0.5 leading-relaxed">{p.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Visual */}
                        <div className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950 p-10 lg:p-14">
                                {/* Pattern overlay */}
                                <div className="absolute inset-0 opacity-[0.03]"
                                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                                />

                                <div className="relative space-y-8">
                                    <div className="glass rounded-2xl p-6 space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-white/50 text-sm">Annual Revenue Growth</span>
                                            <span className="text-accent-400 text-sm font-semibold">+24%</span>
                                        </div>
                                        <div className="flex items-end gap-1 h-20">
                                            {[35, 45, 30, 55, 42, 60, 48, 72, 58, 80, 65, 85].map((h, i) => (
                                                <div key={i} className="flex-1 bg-gradient-to-t from-accent-500 to-accent-400 rounded-sm opacity-70" style={{ height: `${h}%` }} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="glass rounded-2xl p-5">
                                            <p className="text-white/40 text-xs">Tax Saved</p>
                                            <p className="text-2xl font-bold text-white mt-1">£2.4M</p>
                                            <p className="text-accent-400 text-xs mt-1">↑ 18% vs last year</p>
                                        </div>
                                        <div className="glass rounded-2xl p-5">
                                            <p className="text-white/40 text-xs">Filing Accuracy</p>
                                            <p className="text-2xl font-bold text-white mt-1">99.9%</p>
                                            <p className="text-amber-400 text-xs mt-1">Zero penalties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats bar */}
            <div ref={statsRef} className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon
                            return (
                                <div
                                    key={stat.label}
                                    className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                                    style={{ transitionDelay: `${i * 150}ms` }}
                                >
                                    <div className="w-14 h-14 mx-auto rounded-2xl bg-accent-500/10 flex items-center justify-center mb-4">
                                        <Icon size={24} className="text-accent-400" />
                                    </div>
                                    <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} started={statsVisible} />
                                    </p>
                                    <p className="text-white/40 text-sm font-medium tracking-wide">{stat.label}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
