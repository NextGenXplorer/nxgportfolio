"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === "Escape") onClose();
            };
            window.addEventListener("keydown", handleEsc);
            return () => {
                document.body.style.overflow = "unset";
                window.removeEventListener("keydown", handleEsc);
            };
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Portal to body (basic impl)
    // In Next.js App Router, portals need to target document.body which is available in client components
    // Just returning regular structure here for simplicity or using createPortal if document is defined

    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-3xl glass rounded-2xl p-6 md:p-10 max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 p-2 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
