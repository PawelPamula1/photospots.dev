import Link from "next/link";
import AboutApp from "./sections/AboutApp";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import JoinCTA from "./sections/JoinCTA";
import Problem from "./sections/Problem";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <Problem />
      <AboutApp />
      <HowItWorks />
      <JoinCTA />

      <footer className="bg-gray-900 py-16 text-center border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          {/* Brand */}
          <div className="mb-8">
            <h3 className="text-3xl font-fraunces font-bold text-white mb-2">
              PhotoSpots
            </h3>
            <p className="text-gray-400 font-outfit">
              The Travel Photo Spotting App
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center justify-center gap-8 mb-8 text-sm font-outfit">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </Link>
          </div>

          {/* Creator */}
          <p className="text-gray-500 text-sm font-outfit">
            Created with <span className="text-red-500">❤️</span> by{" "}
            <Link
              href="https://paulprojects.com"
              target="_blank"
              className="text-purple-400 hover:text-purple-300 transition-colors font-semibold"
            >
              Paul Projects
            </Link>
          </p>

          {/* Copyright */}
          <p className="text-gray-600 text-xs mt-4 font-outfit">
            © {new Date().getFullYear()} PhotoSpots. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
