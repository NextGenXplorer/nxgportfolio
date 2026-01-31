"use client"

import { useState, useEffect, useCallback, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CommandItem {
    id: string
    icon: ReactNode
    label: string
    shortcut?: string
    onClick?: () => void
}

export interface CircularCommandMenuProps {
    items?: CommandItem[]
    trigger?: ReactNode
    className?: string
    radius?: number
    startAngle?: number
    endAngle?: number
    onSelect?: (item: CommandItem) => void
}

function Component({
    items = [],
    trigger,
    className,
    radius = 120,
    startAngle = 180,
    endAngle = 270,
    onSelect,
}: CircularCommandMenuProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    // Defensive check for items
    const safeItems = items || []
    const itemCount = safeItems.length

    const angleStep = itemCount > 1 ? (endAngle - startAngle) / (itemCount - 1) : 0;

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (!isOpen || itemCount === 0) return

            switch (e.key) {
                case "ArrowRight":
                case "ArrowDown":
                    e.preventDefault()
                    setActiveIndex((prev) => (prev + 1) % itemCount)
                    break
                case "ArrowLeft":
                case "ArrowUp":
                    e.preventDefault()
                    setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount)
                    break
                case "Enter":
                    e.preventDefault()
                    const selectedItem = safeItems[activeIndex]
                    if (selectedItem) {
                        selectedItem.onClick?.()
                        onSelect?.(selectedItem)
                    }
                    setIsOpen(false)
                    break
                case "Escape":
                    e.preventDefault()
                    setIsOpen(false)
                    break
            }
        },
        [isOpen, activeIndex, safeItems, itemCount, onSelect],
    )

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [handleKeyDown])

    const getItemPosition = (index: number) => {
        const angle = ((startAngle + index * angleStep) * Math.PI) / 180
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
        }
    }

    return (
        <div className={cn("relative inline-flex", className)}>
            {/* Trigger */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "relative z-[100] flex h-14 w-14 items-center justify-center rounded-full",
                    "bg-black border border-white/10 text-white shadow-[0_0_30px_-5px_rgba(255,140,0,0.4)]",
                    "hover:scale-110 hover:border-orange-500/50 transition-all duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black",
                )}
                whileTap={{ scale: 0.9 }}
                aria-expanded={isOpen}
                aria-haspopup="menu"
            >
                <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    {trigger || (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    )}
                </motion.div>
                {/* Pulse Ring */}
                {!isOpen && (
                    <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping pointer-events-none" />
                )}
            </motion.button>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-obsidian-950/80 backdrop-blur-md"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Menu Items */}
            <AnimatePresence>
                {isOpen && itemCount > 0 && (
                    <div className="absolute left-1/2 top-1/2 z-[100]" role="menu">
                        {safeItems.map((item, index) => {
                            const position = getItemPosition(index)
                            const isActive = activeIndex === index

                            return (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                                    animate={{
                                        opacity: 1,
                                        x: position.x - 24,
                                        y: position.y - 24,
                                        scale: 1,
                                    }}
                                    exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 25,
                                        delay: index * 0.03,
                                    }}
                                    onClick={() => {
                                        item.onClick?.()
                                        onSelect?.(item)
                                        setIsOpen(false)
                                    }}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={cn(
                                        "absolute flex h-14 w-14 items-center justify-center rounded-full",
                                        "border border-white/10 bg-black shadow-2xl shadow-black/50",
                                        "transition-all hover:bg-white/5 hover:border-orange-500/30 text-white",
                                        isActive && "ring-2 ring-orange-500 bg-white/5 scale-110 shadow-orange-500/20",
                                    )}
                                    role="menuitem"
                                    aria-label={item.label}
                                >
                                    <div className={cn("transition-transform", isActive && "scale-110")}>{item.icon}</div>

                                    {/* Tooltip */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, x: 10 }}
                                        animate={{
                                            opacity: isActive ? 1 : 0,
                                            scale: isActive ? 1 : 0.9,
                                            x: isActive ? 0 : 10,
                                        }}
                                        className="absolute right-full mr-4 whitespace-nowrap rounded-lg bg-black/90 backdrop-blur-md px-4 py-2 text-xs font-mono uppercase tracking-widest text-orange-400 shadow-xl border border-orange-500/20"
                                    >
                                        <span>{item.label}</span>
                                    </motion.div>
                                </motion.button>
                            )
                        })}
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export { Component }
