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
        <section id="about" ref={ref} className="py-12 lg:py-20 bg-white relative overflow-hidden">
            {/* Main about section */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
                    <div className={`space-y-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-600 text-sm font-semibold tracking-wide">
                            About Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight">
                            Your Trusted <span className="gradient-text">Chartered</span> Partner
                        </h2>
                        <p className="text-lg text-navy-600/70 leading-relaxed">
                            Huban Accountants is a professional firm led by experienced finance professionals, offering expert accounting, taxation, and business advisory services. We deliver high-quality, tailored financial solutions to help businesses and individuals achieve sustainable success.
                        </p>
                        <p className="text-navy-600/60 leading-relaxed">
                            We adopt a proactive, client-focused approach to ensure you remain compliant, efficient, and financially strong. Whether you are an entrepreneur or an established business, we are dedicated to handling your financial matters with professionalism and care.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 pt-8">
                            {pillars.map((p, i) => (
                                <div
                                    key={p.title}
                                    className={`flex flex-col items-center gap-3 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-accent-50 flex items-center justify-center">
                                        <CheckCircle size={20} className="text-accent-500" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-navy-900 text-base">{p.title}</h4>
                                        <p className="text-navy-600/50 text-sm mt-1 leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
