export default function PartnerStrip() {
    const partners = [
        'Mastercard', 'HMRC', 'Companies House', 'Xero', 'QuickBooks', 'Sage', 'Dext'
    ]

    return (
        <div className="py-16 bg-white border-t border-navy-100/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10">
                    <span className="text-[10px] text-navy-300 font-bold uppercase tracking-[0.3em]">Authorized Partner & Service Provider</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                    {partners.map((p, i) => (
                        <div key={i} className="text-2xl font-black text-navy-900 tracking-tighter">
                            {p}<span className="text-accent-500">.</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
