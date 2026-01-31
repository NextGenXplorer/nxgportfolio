export const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { 
        duration: 0.4, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
    }
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

export const slideUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
    }
};

export const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
    }
};

export const textReveal = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: "0%", opacity: 1 },
    transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
    }
};

// Professional animation variants
export const professionalFloat = {
    initial: { y: 0 },
    animate: {
        y: [-5, 5, -5],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "linear"
        }
    }
};

export const subtlePulse = {
    initial: { opacity: 0.7 },
    animate: {
        opacity: [0.7, 1, 0.7],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "linear"
        }
    }
};

export const serviceCardHover = {
    initial: { y: 0, scale: 1 },
    animate: { 
        y: -5,
        scale: 1.02,
        transition: { 
            duration: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "tween"
        }
    }
};