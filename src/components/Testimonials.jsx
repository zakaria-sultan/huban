import { useRef, useEffect, useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'Director, TechFlow Solutions',
        content: 'HUBAN transformed our R&D tax claim process. Their expertise in the tech sector is unparalleled. We saved over £45k in the first year alone.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    },
    {
        name: 'David Thompson',
        role: 'Founder, Artisan Coffee Co.',
        content: 'As a small business owner, I needed someone who could handle everything from VAT to payroll. HUBAN is that partner. Their financial advice is gold.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    },
    {
        name: 'Elena Rodriguez',
        role: 'Independent Consultant',
        content: 'Switching to HUBAN for my self-assessment was the best decision. No more last-minute stress. Their digital portal makes everything so simple.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    },
]

export default function Testimonials() {
    const [active, setActive] = useState(0)
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

    const next = () => setActive((active + 1) % testimonials.length)
    const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length)

    return (
        <section ref={ref} className="py-24 bg-navy-950 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-accent-400 text-sm font-semibold mb-4 tracking-wide border border-white/10 uppercase">
                        Testimonials
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                        What Our Clients Are Saying
                    </h2>
                    <p className="mt-4 text-lg text-white/60 leading-relaxed">
                        Trusted by hundreds of businesses across the UK, from innovative startups to established enterprises.
                    </p>
                </div>

                {/* Carousel */}
                <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl relative">
                        <Quote className="absolute top-10 right-10 text-accent-500/20" size={80} />

                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden border-4 border-accent-500/20 shadow-2xl shrink-0">
                                <img
                                    src={testimonials[active].image}
                                    alt={testimonials[active].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="space-y-6 text-center md:text-left">
                                <div className="flex justify-center md:justify-start gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
                                    "{testimonials[active].content}"
                                </p>

                                <div>
                                    <h4 className="text-lg font-bold text-white">{testimonials[active].name}</h4>
                                    <p className="text-accent-400 text-sm font-semibold">{testimonials[active].role}</p>
                                </div>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex justify-center md:justify-end gap-3 mt-10 md:absolute md:bottom-12 md:right-16 md:mt-0">
                            <button
                                onClick={prev}
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-500 hover:border-accent-500 transition-all active:scale-95"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={next}
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-500 hover:border-accent-500 transition-all active:scale-95"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${active === i ? 'w-8 bg-accent-500' : 'bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
