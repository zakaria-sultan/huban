import { X } from 'lucide-react'
import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, title, children }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-navy-100">
                    <h3 className="text-xl font-bold text-navy-900">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl hover:bg-navy-50 text-navy-400 hover:text-navy-900 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    )
}
