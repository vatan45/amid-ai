import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | AMID AI",
  description: "Privacy Policy for AMID AI Lab & Founders Fellowship",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-black min-h-screen">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container-amid">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Last Updated: January 1, 2024
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              AMID AI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>Personal data: Name, email address, phone number, and other contact details provided when you sign up for our newsletter, apply to our programs, or contact us.</li>
              <li>Usage data: Information on how you use our website, including IP address, browser type, pages visited, and time spent on the site.</li>
              <li>Application data: Information provided in your application for our fellowship program, including your background, project details, and team information.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We may use the information we collect about you for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To process applications for our programs</li>
              <li>To send you marketing and promotional communications (you can opt-out at any time)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-300 mb-8">
              AMID AI<br />
              945 Market St<br />
              San Francisco, CA<br />
              Email: privacy@amid.ai
            </p>

            <div className="mt-12">
              <Link href="/" className="text-red-600 hover:text-red-500 font-medium">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
