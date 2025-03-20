import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="bg-black min-h-screen">
      <Header />

      <div className="pt-40 pb-20 flex flex-col items-center justify-center">
        <div className="container-amid text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="h-5 w-5 mr-2 bg-red-600 rounded-full"></div>
            <span className="font-bold uppercase text-sm text-white">AMID</span>
            <span className="text-gray-400 text-xs ml-1">AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8">Page Not Found</h2>

          <p className="text-gray-400 max-w-lg mx-auto mb-12">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            href="/"
            className="btn-red inline-flex items-center justify-center px-8 py-3 rounded-md"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
