"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import * as animations from "@/lib/animation";

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-16 bg-black fullscreen-section">
      <div className="container-amid">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.fadeInUp}
        >
          <p className="text-gray-400 mb-4">Our mission is to accelerate innovation by bringing global founders and builders together IRL, in the heart of cerebral valley.</p>
          <p className="text-gray-300 text-sm italic">Our name CU TBI says it all, <br />meaning "surrounded by; in the middle of"</p>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">We believe proximity leads to serendipity.</h2>
          <p className="text-gray-400">A new hub for the AI community in Chandigarh University.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programData.map((program, index) => (
            <motion.div
              key={program.title}
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.fadeInUp}
              transition={{ delay: 0.1 * (index + 3) }}
              whileHover={animations.cardHover}
            >
              <div className="glass-card p-1 rounded-lg mb-6 overflow-hidden">
                <div className="aspect-video overflow-hidden rounded-lg relative">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
              <p className="text-gray-400 text-sm">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const programData = [
  {
    title: "AI Founder Fellowship",
    description: "Three (3) months of membership for founders to build in our CU TBI office, at the center of AI innovation",
    image: "https://ext.same-assets.com/1491773170/2525419465.png"
  },
  {
    title: "Events Program & Space",
    description: "With room for 150 guests, join our regular event series, or host yours in our space. Our house is your house.",
    image: "https://ext.same-assets.com/3705707608/1407522704.png"
  },
  {
    title: "AI Industry Media",
    description: "Stay informed or amplify your story through our leading podcasts, newsletters, and publisher network.",
    image: "https://ext.same-assets.com/3962151048/3621449709.png"
  }
];
