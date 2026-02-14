import { useEffect, useState } from 'react'
import { ArrowRight, TrendingUp, Shield } from 'lucide-react'


export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-20 bg-navy-950 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-500/20 rounded-full blur-[120px] -mr-96 -mt-96" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-600/10 rounded-full blur-[100px] -ml-40 -mb-40" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-400 text-sm font-semibold mb-8 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                            </span>
                            Smart Business Intelligence
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                            Expert Accounting. <br />
                            One Strategic <br />
                            <span className="text-accent-500">Solution.</span>
                        </h1>

                        <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
                            Unlock your business potential with HUBAN. We provide chartered expertise to streamline your finances and fuel sustainable growth.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="px-10 py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-2xl shadow-xl shadow-accent-500/30 transition-all hover:-translate-y-1 flex items-center gap-2"
                            >
                                Get Started Now <ArrowRight size={20} />
                            </a>
                            <a
                                href="#services"
                                className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all backdrop-blur-sm"
                            >
                                Our Services
                            </a>
                        </div>

                        {/* Stats mini */}
                        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">15+</div>
                                <div className="text-sm text-white/40 uppercase tracking-widest font-semibold">Years Exp</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">500+</div>
                                <div className="text-sm text-white/40 uppercase tracking-widest font-semibold">Clients</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">99%</div>
                                <div className="text-sm text-white/40 uppercase tracking-widest font-semibold">Retention</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual aspect */}
                    <div className="hidden lg:block relative animate-float">
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src="/media__1771061941074.jpg"
                                alt="Modern Business Strategy"
                                className="w-full h-auto grayscale-[0.2] contrast-[1.1]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                        </div>

                        {/* Floating card */}
                        <div className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl animate-fade-in delay-500">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center">
                                    <TrendingUp size={24} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">Business Growth</div>
                                    <div className="text-white/50 text-xs tracking-widest uppercase">Analysis Active</div>
                                </div>
                            </div>
                            <div className="h-2 w-48 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-accent-500 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
