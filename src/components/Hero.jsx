import { ArrowRight, TrendingUp, Shield, PieChart, Users, Zap } from 'lucide-react'

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 lg:pt-40 overflow-hidden bg-[#020617]">
            {/* MyBank-style Background Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-[#0ea5e9]/10 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-[#6366f1]/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.08)_0%,rgba(2,6,23,0)_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0)_0%,rgba(2,6,23,1)_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Premium Content (TaxSol/NextInTax inspired) */}
                    <div className="z-10">
                        {/* Animated Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-10 animate-fade-in-down">
                            <Zap size={12} className="text-[#0ea5e9]" />
                            UK Leading Advisors
                        </div>

                        <h1 className="text-4xl sm:text-6xl lg:text-[85px] font-black text-white leading-[1] tracking-[-0.04em] mb-10 animate-fade-in-up">
                            Your Trusted <br />
                            Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#6366f1]">Accounting,</span> <br />
                            & Tax Advisory.
                        </h1>

                        <p className="text-lg lg:text-xl text-white/50 leading-relaxed mb-12 max-w-xl font-medium animate-fade-in-up [animation-delay:200ms]">
                            Chartered Accountant-led fixed-fee packages covering VAT, Payroll, Bookkeeping, Corporation Tax, Self-Assessment and full HMRC compliance. We support your business growth while keeping you compliant.
                        </p>

                        <div className="flex flex-wrap gap-5 animate-fade-in-up [animation-delay:400ms]">
                            <a
                                href="#contact"
                                className="group px-10 py-5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-black rounded-full shadow-[0_20px_50px_rgba(14,165,233,0.3)] transition-all flex items-center gap-3 hover:-translate-y-1 active:scale-95"
                            >
                                Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#services"
                                className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-full border border-white/10 transition-all hover:bg-white/10 hover:-translate-y-1 active:scale-95 text-center"
                            >
                                Browse Services
                            </a>
                        </div>

                        {/* Social Proof / Stats Strip (Entry Animation) */}
                        <div className="mt-20 mb-4  pt-12 border-t border-white/5 grid grid-cols-3 gap-8 animate-fade-in-up [animation-delay:600ms]">
                            <div className="space-y-1">
                                <span className="block text-2xl font-black text-white tracking-tighter">100%</span>
                                <span className="block text-[9px] uppercase font-bold tracking-widest text-white/30">HMRC Compliance</span>
                            </div>
                            <div className="space-y-1">
                                <span className="block text-2xl font-black text-white tracking-tighter">Fixed</span>
                                <span className="block text-[9px] uppercase font-bold tracking-widest text-white/30">Fee Packages</span>
                            </div>
                            <div className="space-y-1">
                                <span className="block text-2xl font-black text-white tracking-tighter">24/7</span>
                                <span className="block text-[9px] uppercase font-bold tracking-widest text-white/30">Expert Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Dynamic Visual (MyBank Structure) */}
                    <div className="relative z-10 hidden lg:block perspective-2000">
                        <div className="relative animate-float transition-all duration-1000">
                            {/* Main Card Graphic */}
                            <div className="relative w-[540px] h-[680px] ml-auto p-4 lg:p-1.5 bg-white/5 rounded-[3.5rem] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-3xl group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative w-full h-full bg-[#020617] rounded-[3rem] overflow-hidden border border-white/5 shadow-inner">
                                    <img
                                        src="/premium_accounting_hero_1_1771093985107.png"
                                        alt="HUBAN Analytics Dashboard"
                                        className="w-full h-full object-cover grayscale-[0.3] brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/40" />

                                    {/* Floating UI Badges */}
                                    <div className="absolute top-12 right-10 space-y-4">
                                        <div className="bg-white/95 backdrop-blur-md p-5 rounded-[2rem] shadow-2xl animate-float-slow border border-white/20">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                                                    <TrendingUp size={20} className="text-emerald-500" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[14px] font-black text-navy-950 uppercase tracking-tight">Revenue +32%</span>
                                                    <span className="text-[9px] text-navy-600/60 font-medium font-inter">PRO-ACTIVE ADVISORY</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#0ea5e9] p-5 rounded-[2rem] shadow-2xl animate-float-slow [animation-delay:1.5s] border border-white/20">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                                                    <Shield size={20} className="text-white" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[14px] font-black text-white uppercase tracking-tight">Protected</span>
                                                    <span className="text-[9px] text-white/50 font-medium font-inter">FULL HMRC COMPLIANCE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Info Bar */}
                                    <div className="absolute bottom-10 left-10 right-10 p-8 glass-dark rounded-[2.5rem] border border-white/10 backdrop-blur-3xl">
                                        <div className="flex items-center justify-between gap-6">
                                            <div>
                                                <div className="text-white font-black text-2xl mb-1 tracking-tighter italic">HUBAN</div>
                                                <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Chartered Accountants</div>
                                            </div>
                                            <div className="flex -space-x-3">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-navy-900 overflow-hidden bg-navy-800">
                                                        <div className="w-full h-full flex items-center justify-center">
                                                            <Users size={16} className="text-white/20" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Outer Decorative Elements */}
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#0ea5e9]/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#6366f1]/20 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
}
