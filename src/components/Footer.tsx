"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="container-amid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <AnimatedSection delay={0.1} direction="up">
            <div>
              <h3 className="text-lg font-semibold mb-4">About AMID</h3>
              <p className="text-gray-400 text-sm">
                CU TBI is a trusted media and events company, focused entirely on artificial intelligence;
                on the innovators, researchers, investors, and technologies, as well as the downstream
                impacts on careers, industries, society, and politics. We are techno-optimists, and believe
                in checks and balances through information and curiosity.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="up">
            <div>
              <h3 className="text-lg font-semibold mb-4">News & Media</h3>
              <p className="text-gray-400 text-sm">
                Over 40k professionals are getting a jumpstart on the era of AI through our podcasts and newsletters.
                Founders, investors, academics get in touch for a chance to be interviewed or featured.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} direction="up">
            <div>
              <h3 className="text-lg font-semibold mb-4">Community & Events</h3>
              <p className="text-gray-400 text-sm">
                The best work happens when we collaborate. We foster a community of AI companies and
                professionals with digital and in-person events in SF and NYC for those looking to
                learn, network, and grow their AI expertise.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.div
            className="flex items-center mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="h-6 w-6 mr-2 bg-red-600 rounded-full"></div>
            <span className="font-bold uppercase text-sm text-white">CU TBI</span>
            <span className="text-gray-400 text-xs ml-1">AI</span>
          </motion.div>

          <div className="text-xs text-gray-500">
            © 2023 Heart Department LLC. All rights reserved.
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
