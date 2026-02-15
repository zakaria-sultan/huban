import {
    Cloud, BookOpen, FileText, TrendingUp, DollarSign,
    Users, Shield, PieChart, Briefcase, Globe, Layout,
    Award, BarChart2, Layers, CheckCircle2 // Added valid imports
} from 'lucide-react'

export const servicesData = [
    {
        title: "Accountancy Services",
        slug: "accountancy",
        services: [
            {
                title: "Cloud Accounting",
                slug: "cloud-accounting",
                icon: Cloud,
                description: "We implement and manage modern cloud-based accounting systems (such as Xero, QuickBooks, or Odoo), enabling clients to access real-time financial information anytime and anywhere. Clients can expect system setup, migration from existing systems, training, and ongoing support.",
                expectations: [
                    "System setup and migration from existing accounting records",
                    "Secure, real-time access to financial data from anywhere",
                    "Integration with bank feeds, payroll, and invoicing systems",
                    "Ongoing technical support and system maintenance",
                    "Training and guidance for staff using the accounting software"
                ]
            },
            {
                title: "Bookkeeping",
                slug: "bookkeeping",
                icon: BookOpen,
                description: "Accurate recording of daily financial transactions including sales, purchases, expenses, and bank reconciliations. Clients receive up-to-date records that support compliance and provide a clear financial picture.",
                expectations: [
                    "Accurate recording of all financial transactions",
                    "Monthly reconciliation of bank and control accounts",
                    "Proper categorisation of expenses and income",
                    "Timely updating of accounting records",
                    "Regular reporting of financial summaries"
                ]
            },
            {
                title: "Final Accounts Preparation",
                slug: "final-accounts",
                icon: FileText,
                description: "Preparation of annual financial statements in compliance with UK accounting standards. Clients can expect professionally prepared accounts ready for Companies House and HMRC submission.",
                expectations: [
                    "Preparation of statutory financial statements",
                    "Compliance with UK accounting standards",
                    "Submission-ready reports for HMRC and Companies House",
                    "Professional review to ensure accuracy",
                    "Explanation of financial results and performance"
                ]
            },
            {
                title: "Management Accounts",
                slug: "management-accounts",
                icon: BarChart2,
                description: "Monthly or quarterly performance reports including profit and loss statements, balance sheets, and KPI analysis. These help business owners track performance and make informed strategic decisions.",
                expectations: [
                    "Monthly or quarterly financial performance reports",
                    "Profitability analysis and key performance indicators",
                    "Budget vs actual performance comparison",
                    "Cash flow performance insights",
                    "Strategic recommendations based on results"
                ]
            },
            {
                title: "Cash Flow Forecasting",
                slug: "cash-flow-forecasting",
                icon: TrendingUp,
                description: "Preparation of forward-looking cash flow projections to help businesses plan for future funding needs, expansion, or cost management.",
                expectations: [
                    "Forward-looking cash flow projections",
                    "Identification of funding gaps or surpluses",
                    "Planning support for growth or expansion",
                    "Scenario modelling for different business situations",
                    "Recommendations to improve cash flow stability"
                ]
            },
            {
                title: "Payroll & CIS Returns",
                slug: "payroll-cis",
                icon: Users,
                description: "Processing employee payroll, pension compliance, RTI submissions to HMRC, and Construction Industry Scheme (CIS) reporting where applicable.",
                expectations: [
                    "Accurate payroll calculations and payslip preparation",
                    "RTI submissions to HMRC on time",
                    "Pension contribution processing",
                    "CIS subcontractor verification and reporting",
                    "Compliance with UK payroll regulations"
                ]
            },
            {
                title: "Workplace Pension Support",
                slug: "workplace-pension",
                icon: Shield,
                description: "Auto-enrolment compliance, pension scheme setup, and ongoing reporting support.",
                expectations: [
                    "Auto-enrolment compliance setup",
                    "Pension provider registration assistance",
                    "Employee enrolment and contribution calculations",
                    "Regulatory reporting support",
                    "Ongoing compliance monitoring"
                ]
            },
            {
                title: "Budgeting & Financial Projections",
                slug: "budgeting-projections",
                icon: PieChart,
                description: "Preparation of annual budgets, financial modelling, and performance tracking against planned targets.",
                expectations: [
                    "Annual budgeting preparation",
                    "Financial forecasting and modelling",
                    "Performance tracking against targets",
                    "Cost control recommendations",
                    "Strategic financial planning insights"
                ]
            }
        ]
    },
    {
        title: "Tax Advisory & Compliance",
        slug: "tax-advisory",
        services: [
            {
                title: "Business Tax (Corporation Tax)",
                slug: "business-tax",
                icon: Briefcase,
                description: "Preparation and filing of corporation tax returns, tax computations, and advisory on tax-efficient business structuring.",
                expectations: [
                    "Accurate corporation tax calculations",
                    "Timely filing of corporation tax returns",
                    "Tax-efficient structuring advice",
                    "Identification of allowable deductions",
                    "Compliance with HMRC requirements"
                ]
            },
            {
                title: "Personal Tax",
                slug: "personal-tax",
                icon: Users,
                description: "Tax return preparation for individuals, directors, landlords, and high-net-worth individuals.",
                expectations: [
                    "Complete personal tax return preparation",
                    "Identification of available tax reliefs",
                    "Advice on tax-efficient income structuring",
                    "Timely HMRC submissions",
                    "Ongoing tax planning guidance"
                ]
            },
            {
                title: "Self-Assessment Returns",
                slug: "self-assessment",
                icon: FileText,
                description: "Preparation and submission of HMRC self-assessment returns including income from employment, self-employment, property, and investments.",
                expectations: [
                    "Collection and review of income documentation",
                    "Accurate self-assessment tax return submission",
                    "Calculation of tax liabilities",
                    "Deadline compliance support",
                    "HMRC correspondence assistance"
                ]
            },
            {
                title: "VAT Services",
                slug: "vat-services",
                icon: DollarSign,
                description: "VAT registration, VAT return preparation, Making Tax Digital (MTD) compliance, VAT advisory, and error corrections.",
                expectations: [
                    "VAT registration and setup",
                    "Preparation and submission of VAT returns",
                    "VAT advisory on transactions",
                    "Error corrections and HMRC liaison"
                ]
            },
            {
                title: "Capital Gains Tax",
                slug: "capital-gains-tax",
                icon: TrendingUp,
                description: "Advice and reporting on asset disposals including property, shares, and business sales.",
                expectations: [
                    "Gain calculation on asset disposals",
                    "Identification of exemptions and reliefs",
                    "Filing of CGT returns",
                    "Tax-efficient disposal planning",
                    "Compliance with reporting deadlines"
                ]
            },
            {
                title: "Inheritance Tax Planning",
                slug: "inheritance-tax",
                icon: Shield,
                description: "Estate planning strategies designed to minimise inheritance tax exposure.",
                expectations: [
                    "Estate planning guidance",
                    "Tax minimisation strategies",
                    "Trust and succession planning advice",
                    "Asset transfer planning",
                    "Long-term wealth protection strategies"
                ]
            },
            {
                title: "R&D Tax Relief",
                slug: "rd-tax-relief",
                icon: Award,
                description: "Identification and preparation of qualifying R&D claims to maximise available tax incentives.",
                expectations: [
                    "Eligibility assessment for R&D claims",
                    "Claim preparation and documentation support",
                    "Maximisation of tax relief benefits",
                    "Submission assistance",
                    "HMRC enquiry support if required"
                ]
            },
            {
                title: "International Tax Advisory",
                slug: "international-tax",
                icon: Globe,
                description: "Cross-border tax planning, residency considerations, and double taxation guidance.",
                expectations: [
                    "Cross-border tax planning guidance",
                    "Double taxation treaty advice",
                    "Residency and domicile tax support",
                    "Structuring international income",
                    "Compliance with international tax regulations"
                ]
            }
        ]
    },
    {
        title: "Business Advisory & Planning",
        slug: "business-advisory",
        services: [
            {
                title: "Company Formation",
                slug: "company-formation",
                icon: Layers,
                description: "Assistance with company registration, share structure planning, and Companies House compliance.",
                expectations: [
                    "Company registration handling",
                    "Advice on share structure",
                    "Companies House filing support",
                    "Business setup guidance",
                    "Post-registration compliance advice"
                ]
            },
            {
                title: "Strategic Business Planning",
                slug: "strategic-planning",
                icon: Target, // Imported Target manually below if needed, or re-use others
                description: "Business plans, financial modelling, growth strategies, and performance improvement planning.",
                expectations: [
                    "Business growth strategy development",
                    "Financial planning and modelling",
                    "Market expansion advisory",
                    "Risk assessment support",
                    "Long-term performance planning"
                ]
            },
            {
                title: "EIS / SEIS Advisory",
                slug: "eis-seis",
                icon: Award,
                description: "Guidance on Enterprise Investment Scheme (EIS) and Seed Enterprise Investment Scheme (SEIS) eligibility and structuring.",
                expectations: [
                    "Eligibility assessment",
                    "Structuring advice for investors",
                    "HMRC advance assurance support",
                    "Compliance documentation preparation",
                    "Investor tax benefit guidance"
                ]
            },
            {
                title: "SSAS (Small Self-Administered Schemes)",
                slug: "ssas",
                icon: Shield,
                description: "Pension scheme advisory and structuring for business owners.",
                expectations: [
                    "Pension scheme setup guidance",
                    "Regulatory compliance support",
                    "Investment planning within the scheme",
                    "Administration assistance",
                    "Ongoing advisory support"
                ]
            },
            {
                title: "Remuneration & Dividend Planning",
                slug: "remuneration-planning",
                icon: DollarSign,
                description: "Tax-efficient salary and dividend structuring for directors and shareholders.",
                expectations: [
                    "Tax-efficient salary/dividend structuring",
                    "Director remuneration planning",
                    "Payroll and dividend documentation",
                    "Annual remuneration reviews",
                    "Tax optimisation recommendations"
                ]
            },
            {
                title: "Succession Planning",
                slug: "succession-planning",
                icon: Users,
                description: "Ownership transition planning, exit strategies, and business continuity planning.",
                expectations: [
                    "Ownership transition planning",
                    "Business continuity strategies",
                    "Share transfer structuring",
                    "Exit strategy advisory",
                    "Family business succession guidance"
                ]
            },
            {
                title: "Capital Allowances Advisory",
                slug: "capital-allowances",
                icon: BarChart2,
                description: "Identification of qualifying assets to maximise tax deductions.",
                expectations: [
                    "Identification of qualifying assets",
                    "Maximisation of tax deductions",
                    "Claim preparation support",
                    "Tax planning integration",
                    "Compliance with HMRC rules"
                ]
            }
        ]
    }
]

import { Target } from 'lucide-react' 
