"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { 
  Code, Cpu, Database, Globe, 
  ArrowDown, Terminal, Server, 
  Zap, Network, Layers 
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Premium tech services with black and orange theme
const SERVICES = [
  { icon: Code, title: "Full Stack Development", desc: "End-to-end web solutions", color: "from-orange-600 to-orange-400" },
  { icon: Cpu, title: "AI & Machine Learning", desc: "Intelligent systems & automation", color: "from-orange-500 to-orange-300" },
  { icon: Database, title: "Cloud Architecture", desc: "Scalable infrastructure solutions", color: "from-red-600 to-orange-500" },
  { icon: Globe, title: "Mobile Applications", desc: "Cross-platform app development", color: "from-orange-700 to-orange-500" }
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Sophisticated parallax effects
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  // Service rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % SERVICES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section 
      ref={sectionRef}
      className="min-h-[100vh] flex items-center justify-center relative overflow-hidden bg-black pt-20 smooth-scroll"
    >
      {/* Premium sophisticated background with subtle orange accents */}
      <div className="absolute inset-0 optimize-animation">
        {/* Layer 1: Deep premium black foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
              
        {/* Layer 2: Subtle orange depth accents */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 25%, rgba(255, 140, 0, 0.08) 0%, transparent 35%),
              radial-gradient(circle at 85% 75%, rgba(255, 165, 0, 0.06) 0%, transparent 30%),
              radial-gradient(ellipse at 25% 85%, rgba(255, 69, 0, 0.05) 0%, transparent 25%),
              radial-gradient(ellipse at 70% 15%, rgba(255, 99, 71, 0.04) 0%, transparent 30%)
            `,
            backgroundSize: '100% 100%, 120% 120%, 140% 140%, 110% 110%'
          }}
        ></div>
              
        {/* Layer 3: Ultra-subtle geometric texture */}
        <div 
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 49.8%, rgba(255, 140, 0, 0.02) 50%, transparent 50.2%),
              linear-gradient(135deg, transparent 49.8%, rgba(255, 165, 0, 0.015) 50%, transparent 50.2%)
            `,
            backgroundSize: '60px 60px, 80px 80px'
          }}
        ></div>
              
        {/* Layer 4: Minimal animated depth effect */}
        <motion.div 
          className="absolute inset-0 opacity-2"
          animate={{
            opacity: [0.01, 0.03, 0.01]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(255, 140, 0, 0.06) 0%, transparent 50%)'
          }}
        ></motion.div>
      </div>

      {/* Subtle premium accent elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 pointer-events-none optimize-animation"
      >
        {/* Minimal geometric accents */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-orange-400/20"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
              
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 rounded-full bg-orange-500/15"
          animate={{
            opacity: [0.15, 0.25, 0.15],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
              
        <motion.div
          className="absolute top-2/3 left-1/3 w-1 h-1 rounded-full bg-red-400/10"
          animate={{
            opacity: [0.05, 0.15, 0.05],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <Container className="relative z-50 px-6 optimize-animation">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium orange brand identity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "tween"
            }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl border border-orange-600/30 shadow-2xl"
              style={{ boxShadow: '0 0 30px rgba(255, 140, 0, 0.2)' }}
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-300 animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-300 animate-ping opacity-30" />
              </div>
              <span className="text-lg font-bold tracking-wider"
                style={{ 
                  background: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                NEXTGEN XPLORER
              </span>
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-orange-500 animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-orange-500 animate-ping opacity-30" />
              </div>
            </div>
          </motion.div>

          {/* Sophisticated headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "tween"
            }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white">Engineering</span>
              <span className="block"
                style={{ 
                  background: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Digital Excellence
              </span>
              <span className="block text-white">Solutions</span>
            </h1>
          </motion.div>

          {/* Premium value proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "tween"
            }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            We architect <span className="font-semibold"
              style={{ 
                background: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >enterprise-grade solutions</span> that transform 
            businesses through <span className="text-orange-300 font-semibold">cutting-edge technology</span> 
            and <span className="text-red-300 font-semibold">strategic innovation</span>.
          </motion.p>

          {/* Premium services showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "tween"
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                className={`group relative p-6 rounded-2xl border transition-all duration-500 overflow-hidden ${
                  activeService === index 
                    ? 'border-orange-500/50' 
                    : 'border-gray-800/50 hover:border-gray-700/70'
                }`}
                style={{
                  boxShadow: activeService === index ? '0 20px 40px rgba(255, 140, 0, 0.2)' : 'none'
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Premium black and orange gradient background */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: activeService === index 
                      ? 'linear-gradient(145deg, rgba(255, 140, 0, 0.15), rgba(0, 0, 0, 0.8))'
                      : 'linear-gradient(145deg, rgba(18, 18, 18, 0.7), rgba(0, 0, 0, 0.9))'
                  }}
                ></div>
                                
                {/* Premium orange overlay with texture */}
                <div 
                  className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    activeService === index ? 'opacity-30' : 'opacity-0 group-hover:opacity-20'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, 
                      ${index === 0 ? 'rgba(255, 140, 0, 0.4)' : index === 1 ? 'rgba(255, 165, 0, 0.35)' : index === 2 ? 'rgba(255, 69, 0, 0.3)' : 'rgba(255, 179, 71, 0.3)'} 0%, 
                      transparent 60%,
                      ${index === 0 ? 'rgba(255, 165, 0, 0.2)' : index === 1 ? 'rgba(255, 140, 0, 0.25)' : index === 2 ? 'rgba(255, 140, 0, 0.2)' : 'rgba(255, 140, 0, 0.2)'} 100%)`
                  }}
                ></div>
                                
                {/* Subtle texture overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-10"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 70% 70%, ${index === 0 ? 'rgba(255, 140, 0, 0.15)' : index === 1 ? 'rgba(255, 165, 0, 0.12)' : index === 2 ? 'rgba(255, 69, 0, 0.1)' : 'rgba(255, 179, 71, 0.1)'} 0%, transparent 50%)`
                  }}
                ></div>
                
                <div className="relative z-10">
                  <service.icon className={`w-10 h-10 mb-4 ${
                    activeService === index ? 'text-orange-400' : 'text-gray-500 group-hover:text-gray-400'
                  }`} />
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "tween"
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-xl text-black font-bold text-lg transition-all duration-300 flex items-center gap-3 group relative z-50"
              style={{
                background: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
                boxShadow: '0 20px 40px rgba(255, 140, 0, 0.4)'
              }}
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Terminal className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore Projects</span>
              <ArrowDown className="w-5 h-5 rotate-90 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-xl border-2 border-gray-700 text-white font-bold text-lg hover:border-red-500 transition-all duration-300 flex items-center gap-3 group relative z-50"
              style={{
                background: 'rgba(18, 18, 18, 0.5)'
              }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Network className="w-6 h-6 group-hover:text-red-400 transition-colors duration-300" />
              <span>Start Collaboration</span>
            </motion.button>
          </motion.div>
        </div>
      </Container>

      {/* Premium orange scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: 1.2,
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween"
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40 optimize-animation"
      >
        <div className="text-sm font-medium text-gray-500 tracking-widest">
          DISCOVER MORE
        </div>
        <div className="flex flex-col items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full will-change-transform"
              style={{
                background: 'linear-gradient(180deg, #FF8C00, #FF4500)'
              }}
              animate={{ 
                opacity: [0.4, 1, 0.4],
                y: [0, 8, 0]
              }}
              transition={{ 
                duration: 2.2, 
                repeat: Infinity, 
                delay: i * 0.3,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
