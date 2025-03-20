"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WavyBackground from "./WavyBackground";
import { motion } from "framer-motion";
import { ScrollIndicator } from "./PageTransition";
import * as animations from "@/lib/animation";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-20 pb-24 min-h-screen flex items-center justify-center overflow-hidden fullscreen-section"
      style={{
        backgroundSize: "cover"
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute w-full h-full object-cover"
          style={{ opacity: 0.5 }} // 50% opacity
        >
          <source src="https://framerusercontent.com/assets/3wb9q1eaWT3BX81nhEZmH4OEn8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <WavyBackground />

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      <div className="container-amid z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="flex items-center">
            
            <span className="text-white text-2xl font-bold tracking-wider">CU TBI</span>
            <span className="text-gray-400 text-xs ml-2 mt-1">
              artificial<br />intelligence
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mt-8 mb-6 text-balance"
          variants={animations.fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          AI Lab & Founders<br />Fellowship
        </motion.h1>

        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mb-12 text-xl"
          variants={animations.fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          A dedicated space for building and collaboration, in the heart of Chandigarh University
        </motion.p>

        <motion.div
          className="mt-8"
          variants={animations.scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/#programs">
            <motion.div
              whileHover={animations.buttonHover}
              whileTap={animations.buttonTap}
            >
              <Button className="btn-glass group px-8 py-6 text-lg">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 text-sm text-gray-400"
          variants={animations.fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Offering 12 weeks of office residency<br />for early stage AI founders
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
