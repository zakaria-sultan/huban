import { useState, useRef, useEffect } from 'react'
import { Calculator, PoundSterling, ArrowRight, Info } from 'lucide-react'

// UK 2025/26 tax rates
const PERSONAL_ALLOWANCE = 12570
const BASIC_RATE_LIMIT = 50270
const HIGHER_RATE_LIMIT = 125140
const BASIC_RATE = 0.20
const HIGHER_RATE = 0.40
const ADDITIONAL_RATE = 0.45

// NI thresholds (Class 1 employed)
const NI_PRIMARY_THRESHOLD = 12570
const NI_UPPER_EARNINGS_LIMIT = 50270
const NI_RATE_MAIN = 0.08
const NI_RATE_UPPER = 0.02

// Class 4 NI (self-employed)
const NI_CLASS4_LOWER = 12570
const NI_CLASS4_UPPER = 50270
const NI_CLASS4_RATE_MAIN = 0.06
const NI_CLASS4_RATE_UPPER = 0.02
const NI_CLASS2_WEEKLY = 3.45
const NI_CLASS2_ANNUAL = NI_CLASS2_WEEKLY * 52

function calculateTax(income) {
    let tax = 0
    let allowance = PERSONAL_ALLOWANCE

    // Taper personal allowance for income > 100k
    if (income > 100000) {
        allowance = Math.max(0, PERSONAL_ALLOWANCE - (income - 100000) / 2)
    }

    const taxable = Math.max(0, income - allowance)

    if (taxable <= BASIC_RATE_LIMIT - PERSONAL_ALLOWANCE) {
        tax = taxable * BASIC_RATE
    } else if (taxable <= HIGHER_RATE_LIMIT - allowance) {
        tax = (BASIC_RATE_LIMIT - PERSONAL_ALLOWANCE) * BASIC_RATE +
            (taxable - (BASIC_RATE_LIMIT - PERSONAL_ALLOWANCE)) * HIGHER_RATE
    } else {
        tax = (BASIC_RATE_LIMIT - PERSONAL_ALLOWANCE) * BASIC_RATE +
            (HIGHER_RATE_LIMIT - BASIC_RATE_LIMIT) * HIGHER_RATE +
            (taxable - (HIGHER_RATE_LIMIT - allowance)) * ADDITIONAL_RATE
    }

    return Math.max(0, tax)
}

function calculateEmployedNI(income) {
    let ni = 0
    if (income > NI_PRIMARY_THRESHOLD) {
        const mainBand = Math.min(income, NI_UPPER_EARNINGS_LIMIT) - NI_PRIMARY_THRESHOLD
        ni += mainBand * NI_RATE_MAIN
        if (income > NI_UPPER_EARNINGS_LIMIT) {
            ni += (income - NI_UPPER_EARNINGS_LIMIT) * NI_RATE_UPPER
        }
    }
    return Math.max(0, ni)
}

function calculateSelfEmployedNI(income) {
    let ni = 0
    if (income > NI_CLASS4_LOWER) {
        ni += NI_CLASS2_ANNUAL
        const mainBand = Math.min(income, NI_CLASS4_UPPER) - NI_CLASS4_LOWER
        ni += mainBand * NI_CLASS4_RATE_MAIN
        if (income > NI_CLASS4_UPPER) {
            ni += (income - NI_CLASS4_UPPER) * NI_CLASS4_RATE_UPPER
        }
    }
    return Math.max(0, ni)
}

function formatCurrency(val) {
    return '£' + val.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function TaxCalculator() {
    const [income, setIncome] = useState(50000)
    const [status, setStatus] = useState('employed')
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

    const tax = calculateTax(income)
    const ni = status === 'employed' ? calculateEmployedNI(income) : calculateSelfEmployedNI(income)
    const takeHome = income - tax - ni
    const effectiveRate = income > 0 ? ((tax + ni) / income * 100).toFixed(1) : 0

    const taxPercent = income > 0 ? (tax / income * 100) : 0
    const niPercent = income > 0 ? (ni / income * 100) : 0
    const takeHomePercent = income > 0 ? (takeHome / income * 100) : 0

    return (
        <section id="calculator" ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, #1B998B 1px, transparent 1px)', backgroundSize: '25px 25px' }}
            />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[150px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-400 text-sm font-semibold mb-4">
                        <Calculator size={14} /> Tax Calculator
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                        Calculate Your <span className="gradient-text">Take-Home Pay</span>
                    </h2>
                    <p className="mt-4 text-lg text-white/50 leading-relaxed">
                        Use our live UK Income Tax & National Insurance calculator for the 2025/26 tax year.
                    </p>
                </div>

                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Input panel */}
                    <div className="glass rounded-3xl p-8 lg:p-10 space-y-8">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <PoundSterling size={20} className="text-accent-400" /> Your Details
                        </h3>

                        {/* Income */}
                        <div className="space-y-3">
                            <label className="text-white/60 text-sm font-medium">Annual Income</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-semibold">£</span>
                                <input
                                    id="income-input"
                                    type="number"
                                    value={income}
                                    onChange={e => setIncome(Math.max(0, parseInt(e.target.value) || 0))}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 pl-8 py-4 text-white text-lg font-semibold focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 transition-all"
                                />
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="200000"
                                step="1000"
                                value={income}
                                onChange={e => setIncome(parseInt(e.target.value))}
                                className="w-full accent-accent-500 h-2 bg-white/10 rounded-full appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between text-white/30 text-xs">
                                <span>£0</span>
                                <span>£200,000</span>
                            </div>
                        </div>

                        {/* Employment status */}
                        <div className="space-y-3">
                            <label className="text-white/60 text-sm font-medium">Employment Status</label>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { value: 'employed', label: 'Employed' },
                                    { value: 'self-employed', label: 'Self-Employed' },
                                ].map(opt => (
                                    <button
                                        key={opt.value}
                                        id={`status-${opt.value}`}
                                        onClick={() => setStatus(opt.value)}
                                        className={`py-3.5 rounded-2xl text-sm font-semibold transition-all ${status === opt.value
                                                ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30'
                                                : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                                            }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="flex gap-2 p-4 rounded-xl bg-amber-400/5 border border-amber-400/10">
                            <Info size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                            <p className="text-amber-300/60 text-xs leading-relaxed">
                                This calculator provides estimates based on UK 2025/26 tax rates. For personalized advice,
                                please <a href="#contact" className="text-amber-400 underline">book a consultation</a>.
                            </p>
                        </div>
                    </div>

                    {/* Results panel */}
                    <div className="glass rounded-3xl p-8 lg:p-10 space-y-8">
                        <h3 className="text-xl font-bold text-white">Your Breakdown</h3>

                        {/* Visual bar */}
                        <div className="space-y-3">
                            <div className="flex h-6 rounded-full overflow-hidden bg-white/5">
                                <div className="bg-gradient-to-r from-accent-400 to-accent-500 transition-all duration-500" style={{ width: `${takeHomePercent}%` }} />
                                <div className="bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500" style={{ width: `${taxPercent}%` }} />
                                <div className="bg-gradient-to-r from-rose-400 to-rose-500 transition-all duration-500" style={{ width: `${niPercent}%` }} />
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="flex items-center gap-1.5 text-accent-400">
                                    <span className="w-2 h-2 rounded-full bg-accent-400" /> Take Home ({takeHomePercent.toFixed(0)}%)
                                </span>
                                <span className="flex items-center gap-1.5 text-amber-400">
                                    <span className="w-2 h-2 rounded-full bg-amber-400" /> Tax ({taxPercent.toFixed(0)}%)
                                </span>
                                <span className="flex items-center gap-1.5 text-rose-400">
                                    <span className="w-2 h-2 rounded-full bg-rose-400" /> NI ({niPercent.toFixed(0)}%)
                                </span>
                            </div>
                        </div>

                        {/* Result cards */}
                        <div className="space-y-4">
                            <div className="bg-accent-500/10 rounded-2xl p-6 flex justify-between items-center border border-accent-500/10">
                                <div>
                                    <p className="text-accent-300/60 text-sm">Take-Home Pay (Annual)</p>
                                    <p className="text-3xl font-extrabold text-accent-400 mt-1">{formatCurrency(takeHome)}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-white/30 text-xs">Monthly</p>
                                    <p className="text-xl font-bold text-white">{formatCurrency(takeHome / 12)}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                                    <p className="text-white/40 text-sm">Income Tax</p>
                                    <p className="text-2xl font-bold text-amber-400 mt-1">{formatCurrency(tax)}</p>
                                    <p className="text-white/30 text-xs mt-1">{formatCurrency(tax / 12)}/mo</p>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                                    <p className="text-white/40 text-sm">National Insurance</p>
                                    <p className="text-2xl font-bold text-rose-400 mt-1">{formatCurrency(ni)}</p>
                                    <p className="text-white/30 text-xs mt-1">{formatCurrency(ni / 12)}/mo</p>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-2xl p-5 flex justify-between items-center border border-white/5">
                                <span className="text-white/50 text-sm">Effective Tax Rate</span>
                                <span className="text-2xl font-bold text-white">{effectiveRate}%</span>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="group flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-bold rounded-2xl shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 transition-all"
                        >
                            Get Expert Tax Advice
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
