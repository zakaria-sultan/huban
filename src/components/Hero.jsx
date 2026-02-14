import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

const phrases = [
    'Accounting & Tax',
    'Business Growth',
    'Financial Clarity',
    'HMRC Compliance',
]

export default function Hero() {
    const [phraseIdx, setPhraseIdx] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [typing, setTyping] = useState(true)

    useEffect(() => {
        const phrase = phrases[phraseIdx]
        let timeout

        if (typing) {
            if (displayed.length < phrase.length) {
                timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 80)
            } else {
                timeout = setTimeout(() => setTyping(false), 2000)
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
            } else {
                setPhraseIdx((phraseIdx + 1) % phrases.length)
                setTyping(true)
            }
        }

        return () => clearTimeout(timeout)
    }, [displayed, typing, phraseIdx])

    return (
        <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

            {/* Animated dots grid */}
            <div className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #1B998B 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-float" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent-300 text-sm font-medium">
                            <Sparkles size={14} />
                            Business Development & Strategy · 15+ Years of Expertise
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                            Your Trusted Partner in{' '}
                            <span className="gradient-text">
                                {displayed}
                                <span className="animate-pulse text-accent-400">|</span>
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed">
                            Fixed-fee packages covering VAT, Payroll, Bookkeeping, Corporation Tax,
                            Self-Assessment and full HMRC compliance. Keeping you compliant, saving you money.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-bold rounded-full shadow-2xl shadow-accent-500/30 hover:shadow-accent-500/50 transition-all hover:-translate-y-1 text-lg"
                            >
                                Book Free Consultation
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-full border border-white/15 hover:border-white/25 transition-all text-lg"
                            >
                                Explore Services
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            {['ACCA Certified', 'HMRC Approved', '500+ Happy Clients'].map(badge => (
                                <div key={badge} className="flex items-center gap-2 text-white/50 text-sm">
                                    <CheckCircle2 size={16} className="text-accent-400" />
                                    {badge}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right visual */}
                    <div className="hidden lg:block relative">
                        <div className="relative">
                            {/* Floating cards */}
                            <div className="glass rounded-3xl p-8 space-y-6 animate-float">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-500/30">
                                        <span className="text-2xl font-bold text-white">£</span>
                                    </div>
                                    <div>
                                        <p className="text-white/50 text-sm">Tax Saved This Year</p>
                                        <p className="text-3xl font-bold text-white">£2.4M+</p>
                                    </div>
                                </div>
                                <div className="h-px bg-white/10" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 rounded-2xl p-4">
                                        <p className="text-white/40 text-xs">Returns Filed</p>
                                        <p className="text-xl font-bold text-white mt-1">1,200+</p>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl p-4">
                                        <p className="text-white/40 text-xs">Satisfaction</p>
                                        <p className="text-xl font-bold text-accent-400 mt-1">98%</p>
                                    </div>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full w-[98%] bg-gradient-to-r from-accent-400 to-accent-500 rounded-full" />
                                </div>
                            </div>

                            {/* Small floating badge */}
                            <div className="absolute -top-6 -right-6 glass rounded-2xl px-6 py-4 animate-float" style={{ animationDelay: '1s' }}>
                                <p className="text-amber-400 text-sm font-semibold">⭐ 4.9/5 Rating</p>
                                <p className="text-white/40 text-xs">500+ Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
        </section>
    )
}
