"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as animations from "@/lib/animation";

type FaqItemProps = {
  question: string;
  answer: React.ReactNode;
  index: number;
};

const FaqItem = ({ question, answer, index }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="glass-card border-0 border-b border-gray-800/30 py-5 mb-2 px-4 rounded-lg overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animations.fadeInUp}
      custom={index}
      transition={{
        delay: 0.1 * (index + 2),
        duration: 0.5
      }}
    >
      <motion.button
        className="flex w-full items-center justify-between text-left font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <span>{question}</span>
        <motion.span
          className="ml-6 flex-shrink-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-3 text-gray-400 text-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", transition: { duration: 0.3 } }}
            exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FaqsSection() {
  const faqs = [
    {
      question: "Where is the CU TBI AI Lab?",
      answer: "The CU TBI AI Lab is located at Chandigarh University, inside the new  Workshop with Industrious."
    },
    {
      question: "How can I attend AI events hosted at the space?",
      answer: "AMID hosts regular events that are open to the public. Follow our social media or join our newsletter to stay informed about upcoming events. Some events may require registration in advance."
    },
    {
      question: "Can I host my event at the AMID AI Lab?",
      answer: "Yes, our space is available for AI-focused events and gatherings. Please reach out to us with details about your event, and our team will get back to you regarding availability and pricing."
    },
    {
      question: "How can I apply as a Founder Fellow?",
      answer: "Applications for the AMID AI Founder Fellowship are available through our website. Click the 'Apply Here' button in the Fellowship section to submit your application."
    },
    {
      question: "What is the selection process for Founders?",
      answer: "Our selection process includes an initial application review, followed by interviews with selected candidates. We evaluate based on the innovative potential of your AI project, team composition, and alignment with our community values."
    },
    {
      question: "How many Fellows are accepted?",
      answer: "Each cohort typically includes 10-15 founder teams, though this may vary depending on the quality of applications and available space."
    },
    {
      question: "How often are new Fellowship cohorts?",
      answer: "We run Fellowship cohorts quarterly. If you miss the current application deadline, you can apply for the next cohort."
    },
    {
      question: "Does AMID take equity in our startup?",
      answer: "No, AMID does not take equity in exchange for participation in the Fellowship program. Our goal is to support the AI ecosystem and foster innovation."
    },
    {
      question: "How can my startup participate in an interview or panel discussion?",
      answer: "We're always looking for interesting AI companies to feature in our media content. Please reach out to us with information about your startup and why you'd be a good fit for our audience."
    },
    {
      question: "I am interested in becoming a sponsor / advertiser",
      answer: "We offer various sponsorship and advertising opportunities. Please contact our partnerships team for more information on how to get involved with AMID."
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-black fullscreen-section">
      <div className="container-amid">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">FAQs</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-12">
            We appreciate that we do things differently than what you've seen before, so we know you have questions.
            We've done our best to answer the most common ones here.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto red-gradient-bg p-6 rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.fadeInUp}
          transition={{ delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
