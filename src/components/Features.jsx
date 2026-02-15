import { ArrowRight, CheckCircle2, TrendingUp, Shield, BarChart3 } from 'lucide-react'

const features = [
    {
        title: 'Precision Accounting for Growing Enterprises',
        desc: 'We go beyond basic bookkeeping. Our chartered accountants provide the financial clarity required to navigate complex market conditions and scale your business with confidence.',
        points: ['Statutory compliance guaranteed', 'Real-time financial visibility', 'Dedicated account manager'],
        image: '/premium_accounting_hero_1_1771093985107.png',
        reverse: false,
        icon: Shield,
        accent: 'Compliance Excellence'
    },
    {
        title: 'Data-Driven Strategic Advisory',
        desc: 'Leverage our business intelligence tools to unlock hidden growth opportunities. We transform your financial data into actionable strategies that fuel sustainable success.',
        points: ['Cash flow forecasting', 'Market-leading BI tools', 'Tax optimization strategies'],
        image: '/premium_accounting_hero_2_1771093999608.png',
        reverse: true,
        icon: BarChart3,
        accent: 'Strategic Intelligence'
    }
]

export default function Features() {
    return (
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 space-y-24 lg:space-y-40">
                {features.map((f, i) => (
                    <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${f.reverse ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Text */}
                        <div className="lg:w-1/2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/5 text-accent-500 text-sm font-black tracking-widest uppercase">
                                <f.icon size={16} /> {f.accent}
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-navy-900 leading-[1.1]">
                                {f.title}
                            </h2>
                            <p className="text-lg text-navy-500 leading-relaxed">
                                {f.desc}
                            </p>
                            <ul className="space-y-4">
                                {f.points.map((p, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-navy-900 font-bold">
                                        <div className="w-6 h-6 rounded-full bg-accent-500/10 flex items-center justify-center">
                                            <CheckCircle2 size={14} className="text-accent-500" />
                                        </div>
                                        {p}
                                    </li>
                                ))}
                            </ul>
                            <button className="px-8 py-4 bg-navy-900 text-white font-black rounded-2xl hover:bg-accent-500 transition-all hover:-translate-y-1 flex items-center gap-2 shadow-2xl shadow-navy-900/20 active:scale-95">
                                Learn More <ArrowRight size={20} strokeWidth={3} />
                            </button>
                        </div>

                        {/* Visual */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-navy-100/50 group">
                                <img src={f.image} alt={f.title} className="w-full h-auto grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                            </div>

                            {/* Decorative element */}
                            <div className={`absolute -bottom-10 ${f.reverse ? '-right-10' : '-left-10'} w-48 h-48 bg-accent-500/5 rounded-full blur-3xl -z-10`} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
