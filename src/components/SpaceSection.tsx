"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import * as animations from "@/lib/animation";

export default function SpaceSection() {
  return (
    <section id="space" className="py-16 bg-black fullscreen-section">
      <div className="container-amid">
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Learn about our space
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-center mb-8">
            The CU TBI AI Lab is proud to exist inside the brand new Hej! Workshop with Industrious, a new co-working concept
            in the center of Chandigarh University, with access to the new plant forward food hall
          
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <Link href="https://www.ingka.com/newsroom/ingka-centres-and-industrious-partner-to-launch-a-new-coworking-concept-in-san-francisco/" target="_blank">
              <motion.div
                whileHover={animations.buttonHover}
                whileTap={animations.buttonTap}
              >
                <Button className="btn-glass font-medium">
                  More about  Workshop
                </Button>
              </motion.div>
            </Link>
            <Link href="https://www.ingka.com/newsroom/ingka-centres-and-industrious-partner-to-launch-a-new-coworking-concept-in-san-francisco/" target="_blank">
              <motion.div
                whileHover={animations.buttonHover}
                whileTap={animations.buttonTap}
              >
                <Button className="btn-glass font-medium">
                  More about CU TBI
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {spaceImages.map((image, index) => (
            <motion.div
              key={index}
              className="glass-card p-1 rounded-lg overflow-hidden aspect-[4/3] relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.fadeIn}
              transition={{ delay: 0.2 + (index * 0.1) }}
              whileHover={animations.cardHover}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110 rounded-md"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center glass-card p-8 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            <div className="h-5 w-5 mr-2 bg-red-600 rounded-full"></div>
            <span className="font-bold uppercase text-sm text-white">CU TBI</span>
            <span className="text-gray-400 text-xs ml-1">AI</span>
          </motion.div>

          <motion.h3
            className="text-xl font-semibold mb-6"
            variants={animations.fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Meet us in the middle of it all.
          </motion.h3>

          <motion.div
            variants={animations.fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mb-8"
          >
            <Link href="https://maps.app.goo.gl/84ZqgpsBu7hqPkXeA" target="_blank" className="text-gray-300 hover:text-white transition-colors">
             Chandigarh University
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.scaleIn}
            transition={{ delay: 1 }}
          >
            <Link href="/#programs">
              <motion.div
                whileHover={animations.buttonHover}
                whileTap={animations.buttonTap}
              >
                <Button className="btn-glass">
                  Explore Programs
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const spaceImages = [
  {
    src: "https://ext.same-assets.com/16758906/1228038308.webp",
    alt: "AMID Space - Modern Office"
  },
  {
    src: "https://ext.same-assets.com/2733938453/3981981096.webp",
    alt: "AMID Space - Collaborative Area"
  },
  {
    src: "https://ext.same-assets.com/3430150296/4294682902.webp",
    alt: "AMID Space - Conference Room"
  }
];
