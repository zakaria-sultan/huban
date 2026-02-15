import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react'

const slides = [
    {
        title: "Your Trusted Partner in Accounting & Tax Advisory.",
        highlight: "Accounting,",
        description: "We help you legally minimize tax liabilities and maximize financial efficiency. Focus on running your business — leave the financial management to us.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
        color: "from-[#0ea5e9] to-[#6366f1]"
    },
    {
        title: "Strategic Financial Planning for Growth.",
        highlight: "Growth.",
        description: "Data-driven insights to scale your operations. We provide the clarity you need to make confident business decisions.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        color: "from-accent-400 to-accent-600"
    },
    {
        title: "Expert Payroll & Compliance Solutions.",
        highlight: "Compliance.",
        description: "Never worry about HMRC deadlines again. Our automated systems ensure perfect accuracy and timely filings.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
        color: "from-emerald-400 to-emerald-600"
    }
]

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [isAutoPlaying])

    return (
        <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden pt-32 lg:pt-48">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left - Text Content */}
                <div className="space-y-8">
                    {/* Slide Content */}
                    <div className="relative min-h-[300px]">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-8 absolute pointer-events-none'}`}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                                    <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                                    HUBAN Chartered Accountants
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
                                    {slide.title.replace(slide.highlight, "")}
                                    
                                </h1>

                                <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                                    {slide.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-all hover:translate-x-1 flex items-center justify-center gap-2 shadow-lg shadow-accent-500/25"
                        >
                            Get Started <ArrowRight size={18} />
                        </Link>
                        <Link
                            to="/services"
                            className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 border border-white/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            Our Services
                        </Link>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex items-center gap-4 pt-8">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setCurrentSlide(i)
                                    setIsAutoPlaying(false)
                                }}
                                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-accent-500' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right - Dynamic Visual (Slider Images) */}
                <div className="relative hidden lg:block h-[600px] w-full">
                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-navy-900/50 backdrop-blur-sm">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                            >
                                <img
                                    src={slide.image}
                                    alt="Hero Visual"
                                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-tr ${slide.color} mix-blend-multiply opacity-40`} />
                            </div>
                        ))}

                        {/* Overlay Card Example */}
                        {/* <div className="absolute bottom-10 left-10 right-10 p-6 glass rounded-2xl border border-white/10 shadow-xl transition-all duration-700 delay-300 transform translate-y-0 opacity-100">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-white">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg">Chartered Excellence</p>
                                    <p className="text-white/60 text-sm">Authorized & Regulated Experts</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
