import { useEffect, useRef, useState } from 'react'
import { Calendar, User, ArrowRight, Tag, Clock, Share2 } from 'lucide-react'
import Modal from './Modal'

const articles = [
    {
        category: 'Business Growth',
        date: 'Feb 12, 2026',
        title: 'Scaling Your Enterprise in a Digital Economy',
        excerpt: 'Strategies for modern businesses to leverage technology for sustainable growth and market dominance.',
        content: (
            <div className="space-y-4 text-navy-600">
                <p className="font-semibold text-navy-900">Modern Scaling Strategies</p>
                <p>Growth in the current economic landscape requires more than just capital; it requires a lean, digital-first approach to operations and customer engagement.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Automation of core administrative tasks.</li>
                    <li>Data-driven decision making at every level.</li>
                    <li>Agile workforce management.</li>
                </ul>
                <p>HUBAN provides the tools and advisory needed to navigate these complexities smoothly.</p>
            </div>
        ),
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
        color: 'bg-accent-500',
    },
    {
        category: 'Finance',
        date: 'Feb 05, 2026',
        title: 'Optimizing Capital Structure for Mid-Market Firms',
        excerpt: 'How to balance debt and equity to minimize cost of capital and maximize shareholder value.',
        content: (
            <div className="space-y-4 text-navy-600">
                <p className="font-semibold text-navy-900">Capital Optimization</p>
                <p>Mid-market firms often struggle with inefficient capital structures that hinder their ability to pivot or invest in new opportunities.</p>
                <div className="bg-navy-50 p-4 rounded-2xl border border-navy-100">
                    <p className="text-sm italic">"The right mix of financing can be the difference between stagnation and a successful exit."</p>
                </div>
                <p>Our financial advisory team specializes in restructuring and capital raising for growing enterprises.</p>
            </div>
        ),
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        color: 'bg-blue-600',
    },
    {
        category: 'Innovation',
        date: 'Jan 28, 2026',
        title: 'The Future of AI in Business Operations',
        excerpt: 'Beyond the hype: practical applications of artificial intelligence that drive real efficiency.',
        content: (
            <div className="space-y-4 text-navy-600">
                <p className="font-semibold text-navy-900">Practical AI Integration</p>
                <p>AI is no longer just for big tech. Small and medium enterprises are finding high ROI in specific, targeted AI implementations.</p>
                <p>From predictive maintenance in manufacturing to automated customer service in retail, the applications are vast.</p>
                <p>HUBAN helps you identify the highest-impact areas for AI adoption in your specific industry.</p>
            </div>
        ),
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
        color: 'bg-indigo-500',
    },
    {
        category: 'Strategy',
        date: 'Jan 15, 2026',
        title: 'Navigating Global Market Volatility',
        excerpt: 'How resilient businesses are preparing for shift in international trade and economic policy.',
        content: (
            <div className="space-y-4 text-navy-600">
                <p className="font-semibold text-navy-900">Resilient Business Models</p>
                <p>Volatility is the new normal. To thrive, businesses must build flexibility into their supply chains and financial planning.</p>
                <p>Diversification of revenue streams and geography is key to mitigating local economic shocks.</p>
            </div>
        ),
        image: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&q=80&w=800',
        color: 'bg-accent-600',
    },
    {
        category: 'Governance',
        date: 'Jan 10, 2026',
        title: 'ESG Reporting: More Than Just a Compliance Check',
        excerpt: 'Why transparency in environmental and social governance is becoming a competitive advantage.',
        content: (
            <div className="space-y-4 text-navy-600">
                <p className="font-semibold text-navy-900">The Power of ESG</p>
                <p>Investors and customers alike are demanding higher standards of corporate responsibility. ESG reporting is the primary tool for demonstrating this commitment.</p>
                <p>Early adopters are seeing better access to capital and higher brand loyalty.</p>
            </div>
        ),
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        color: 'bg-emerald-500',
    },
]

export default function News() {
    const [visible, setVisible] = useState(false)
    const [selectedArticle, setSelectedArticle] = useState(null)
    const [showAll, setShowAll] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const displayedArticles = showAll ? articles : articles.slice(0, 3)

    return (
        <section id="news" ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-600 text-sm font-semibold mb-4 tracking-wide">
                            HUBAN Insights
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight">
                            Business Intelligence & Strategy
                        </h2>
                    </div>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="mt-6 md:mt-0 inline-flex items-center gap-2 text-accent-600 font-bold hover:gap-3 transition-all"
                    >
                        {showAll ? 'Show Fewer Articles' : 'View All Articles'} <ArrowRight size={20} />
                    </button>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedArticles.map((article, i) => (
                        <div
                            key={article.title}
                            className={`group bg-white rounded-[2rem] overflow-hidden border border-navy-100/50 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-900/10 cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
                            onClick={() => setSelectedArticle(article)}
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-4 py-1.5 rounded-full ${article.color} text-white text-xs font-bold shadow-lg`}>
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs text-navy-400 mb-4">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={14} className="text-accent-500" /> {article.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <User size={14} className="text-accent-500" /> By HUBAN Team
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-accent-600 transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-navy-600/70 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <button
                                    className="flex items-center gap-2 text-navy-900 text-sm font-bold group-hover:text-accent-600 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setSelectedArticle(article)
                                    }}
                                >
                                    Read Full Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedArticle}
                onClose={() => setSelectedArticle(null)}
                title={selectedArticle?.category}
            >
                <div className="space-y-6">
                    <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                        <img
                            src={selectedArticle?.image}
                            alt={selectedArticle?.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-navy-400 border-b border-navy-50 pb-4">
                        <span className="flex items-center gap-1.5"><Calendar size={16} /> {selectedArticle?.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={16} /> 5 min read</span>
                        <span className="flex items-center gap-1.5"><Share2 size={16} className="cursor-pointer hover:text-accent-600" /></span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-navy-900 leading-tight">
                        {selectedArticle?.title}
                    </h2>
                    <div className="prose prose-navy max-w-none">
                        {selectedArticle?.content}
                    </div>
                    <div className="pt-6 border-t border-navy-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 font-bold">
                                HB
                            </div>
                            <div>
                                <p className="text-sm font-bold text-navy-900">HUBAN Advisory Team</p>
                                <p className="text-xs text-navy-500">Subject Matter Experts</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="text-sm font-bold text-accent-600 hover:text-accent-700"
                        >
                            Close Article
                        </button>
                    </div>
                </div>
            </Modal>
        </section>
    )
}
