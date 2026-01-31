"use client";
import siteData from "@/data/site.json";
import { Container, Section } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function Socials() {

    return (
        <Section id="contact" className="relative bg-black border-t border-orange-600/30 overflow-hidden py-16 md:py-24">
            {/* Premium Animated Background */}
            <div className="absolute inset-0">
                {/* Deep orange radial gradients */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-red-500/8 rounded-full blur-[100px] animate-pulse delay-1000" />
                
                {/* Animated geometric patterns */}
                <div className="absolute top-1/3 left-10 w-16 h-16 border border-orange-500/20 rotate-45 animate-spin" 
                     style={{ animationDuration: '20s' }} />
                <div className="absolute bottom-1/4 right-20 w-12 h-12 rounded-full border-2 border-orange-400/30 animate-ping" />
                
                {/* Subtle grid overlay */}
                <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
                            linear-gradient(45deg, transparent 49%, rgba(255,140,0,0.1) 50%, transparent 51%),
                            linear-gradient(135deg, transparent 49%, rgba(255,165,0,0.08) 50%, transparent 51%)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <Container>
                <div className="relative z-10">


                </div>
            </Container>
        </Section>
    )
}
