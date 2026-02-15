import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Star } from "lucide-react";

const plans = [
  {
    title: "Sole Trader",
    price: "49",
    features: [
      "Accounts preparation",
      "Personal tax return",
      "Basic tax planning",
      "Email support",
      "Xero/QuickBooks setup",
    ],
    popular: false,
  },
  {
    title: "Partnership",
    price: "89",
    features: [
      "Partnership tax return",
      "Individual tax returns",
      "Quarterly reviews",
      "Priority email support",
      "VAT return support",
    ],
    popular: false,
  },
  {
    title: "Limited Company",
    price: "149",
    features: [
      "Statutory accounts",
      "Corporation tax return",
      "Payroll (up to 5 staff)",
      "Quarterly bookkeeping",
      "Personal tax advice",
    ],
    popular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Dedicated manager",
      "Monthly bookkeeping",
      "Strategic tax planning",
      "R&D tax credits",
      "Unlimited advisory",
    ],
    popular: false,
  },
];

export default function Pricing({ onSelectPlan }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={ref} className="py-12 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-navy-600/70">
            Monthly fixed-fee packages designed for your business stage Starts
            From £49.
          </p>
        </div>

        {/* List Layout */}
        <div className="space-y-4">
          {plans.map((plan, i) => (
            <div
              key={plan.title}
              className={`group bg-[#F8FAFC] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between border border-navy-100/50 hover:border-accent-500/30 transition-all duration-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-4 sm:mb-0">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-navy-100 group-hover:scale-110 transition-transform">
                  <Star size={20} className="text-accent-500" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-navy-900">
                    {plan.title}
                  </h3>
                  <p className="text-navy-500 text-sm">
                    {plan.features.slice(0, 3).join(", ")}...
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <Link
                  to="/contact"
                  className="px-6 py-2.5 bg-navy-900 text-white text-sm font-bold rounded-xl hover:bg-accent-600 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 delay-500">
          <div>
            <h4 className="text-xl font-bold mb-2">
              Need a custom enterprise solution?
            </h4>
            <p className="text-white/60 text-sm">
              We provide tailored packages for large corporations and
              non-profits.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-navy-900 font-bold rounded-xl hover:bg-accent-400 hover:text-white transition-all whitespace-nowrap"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
