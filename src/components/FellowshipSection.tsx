"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as animations from "@/lib/animation";

export default function FellowshipSection() {
  return (
    <section id="fellowship" className="py-16 bg-black/90 fullscreen-section">
      <div className="container-amid">
        <motion.div
          className="red-gradient-bg glass-card rounded-xl p-8 md:p-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.fadeIn}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-3xl">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-4"
              variants={animations.fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Calling global AI startup founders
            </motion.h2>

            <motion.p
              className="text-gray-300 mb-8"
              variants={animations.fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Apply now for the inaugural cohort of the  CU TBI Founder Fellowship, officially kicking off in February '24.
            </motion.p>

            <motion.div
              className="glass-card bg-black/30 rounded-lg p-6 mb-8"
              variants={animations.fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">AI Founder Fellowship</h3>
              <p className="text-gray-400 mb-6">
                Selected founders will participate in a twelve (12) week program where you'll work alongside fellow engineers,
                designers, and product managers building the companies of the future. Learn from AI/ML thought leaders and
                researchers, and meet industry investors.
              </p>
              <p className="text-gray-400 mb-6">
                Fellows will also be granted desk space and community membership at our brand new "lab" on Market Street
                in San Francisco. Front row access to our founder cohorts, weekly events and speaker series, investor pitch days,
                corporate perks, with the rest of Chandigarh University's "cerebral valley" at your fingertips.
              </p>

              <Link href="https://forms.gle/example-application-link" target="_blank">
                <motion.div
                  whileHover={animations.buttonHover}
                  whileTap={animations.buttonTap}
                >
                  <Button className="btn-glass font-semibold">
                    Apply Here
                  </Button>
                </motion.div>
              </Link>
              <div className="text-xs text-gray-500 mt-3">Start your submission - 5 min</div>
            </motion.div>

            <motion.div
              className="flex items-center"
              variants={animations.fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="italic text-gray-300 text-sm">
                CU TBI has been one of our most valuable partners during our AI startup journey.
              </div>
              <motion.div
                className="ml-4 h-8 w-8 relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Image
                  src="https://ext.same-assets.com/1838652651/1680709591.png"
                  alt="Client Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
