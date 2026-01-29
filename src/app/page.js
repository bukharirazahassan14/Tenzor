"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const GenesisLandingPage = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const signUpRef = useRef(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));

    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Close sign up if clicked outside the card area
    const handleClickOutside = (event) => {
      if (signUpRef.current && !signUpRef.current.contains(event.target)) {
        setShowSignUp(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
  const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;

  const moveX = mounted ? (mouse.x - centerX) * 0.02 : 0;
  const moveY = mounted ? (mouse.y - centerY) * 0.02 : 0;

  const faqs = [
    {
      question: "Do I need coding or design experience to use PrebuiltUI?",
      answer:
        "Basic coding knowledge (HTML/CSS, Tailwind) helps, but advanced design skills aren't required. You can use components as-is or customize them.",
    },
    {
      question:
        "What is PrebuiltUI and how does it help developers and designers?",
      answer:
        "PrebuiltUI provides ready-to-use, customizable UI components and templates, saving time for developers and designers.",
    },
    {
      question: "Can I use PrebuiltUI components in my existing project?",
      answer:
        "Yes, components can be integrated into HTML, React, Next.js, Vue, and other projects using Tailwind CSS.",
    },
    {
      question: "How customizable are the generated components?",
      answer:
        "Components are highly customizable with Tailwind utility classes, theming, and structural adjustments.",
    },
    {
      question: "Does PrebuiltUI support team collaboration?",
      answer:
        "There's no clear documentation on built-in collaboration features. Check their support for team options.",
    },
    {
      question: "Can I try PrebuiltUI before purchasing a plan?",
      answer: "Yes, you can try PrebuiltUI with full access to features.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#020202] text-white selection:bg-orange-500/30 overflow-x-hidden font-sans">
      {/* --- MODERN NEON 3-COLOR GLOW --- */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div
          className="relative w-[900px] h-[900px] flex items-center justify-center"
          style={{
            transform: `translate(${moveX}px, ${moveY}px)`,
          }}
        >
          {/* Orange Neon Ring */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full border border-orange-500/50 shadow-[0_0_160px_rgba(255,124,0,0.7)]"
            style={{
              transform: `translate(${moveX * 1.2}px, ${moveY * 1.2}px)`,
              animation: "pulse 3.5s ease-in-out infinite",
              filter: "saturate(1.2)",
            }}
          />

          {/* Pink Neon Ring */}
          <div
            className="absolute bottom-0 left-0 w-[640px] h-[640px] rounded-full border border-[#d9165f]/50 shadow-[0_0_160px_rgba(217,22,95,0.7)]"
            style={{
              transform: `translate(${moveX * -1.2}px, ${moveY * 1.1}px)`,
              animation: "pulse 3.5s ease-in-out infinite",
              animationDelay: "0.2s",
              filter: "saturate(1.2)",
            }}
          />

          {/* Blue Neon Ring */}
          <div
            className="absolute bottom-0 right-0 w-[640px] h-[640px] rounded-full border border-[#1e00ff]/50 shadow-[0_0_160px_rgba(30,0,255,0.7)]"
            style={{
              transform: `translate(${moveX * 1.1}px, ${moveY * -1.1}px)`,
              animation: "pulse 3.5s ease-in-out infinite",
              animationDelay: "0.4s",
              filter: "saturate(1.2)",
            }}
          />
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 md:px-10 ${
            scrolled || isMobileMenuOpen
              ? "py-4 bg-[#020202]/80 backdrop-blur-xl border-b border-white/5"
              : "py-8 bg-transparent"
          }`}
        >
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="https://canary.tenzor-ai.cloud/login">
                <Image
                  alt="logo"
                  loading="lazy"
                  width={205}
                  height={48}
                  className="h-15.5 w-auto"
                  src="/assets/Tenzor-Logo-white-full.png"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10 text-[13px] font-bold text-gray-400 uppercase tracking-widest items-center">
              <div className="group relative py-2 cursor-pointer">
                <span className="hover:text-white transition-colors flex items-center gap-1">
                  Home{" "}
                  <span className="text-[8px] opacity-40 group-hover:rotate-180 transition-transform">
                    ▼
                  </span>
                </span>
                <div className="absolute top-full left-0 hidden group-hover:block pt-4">
                  <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 p-5 rounded-xl min-w-[220px] flex flex-col gap-4 normal-case tracking-normal shadow-2xl">
                    <a
                      href="#"
                      className="hover:text-orange-500 transition-colors text-white"
                    >
                      CRM Management
                    </a>
                    <a
                      href="#"
                      className="hover:text-orange-500 transition-colors text-white"
                    >
                      Task Management
                    </a>
                    <a
                      href="#"
                      className="hover:text-orange-500 transition-colors text-white"
                    >
                      Data Analytics
                    </a>
                    <a
                      href="#"
                      className="hover:text-orange-500 transition-colors text-white"
                    >
                      Live Chat
                    </a>
                  </div>
                </div>
              </div>

              <a href="#" className="hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>

              <div className="group relative py-2 cursor-pointer">
                <span className="hover:text-white transition-colors flex items-center gap-1">
                  Pages{" "}
                  <span className="text-[8px] opacity-40 group-hover:rotate-180 transition-transform">
                    ▼
                  </span>
                </span>
                <div className="absolute top-full left-0 hidden group-hover:block pt-4">
                  <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 p-5 rounded-xl min-w-[180px] flex flex-col gap-4 normal-case tracking-normal shadow-2xl text-white">
                    <a
                      href="#"
                      className="hover:text-orange-500 transition-colors"
                    >
                      About Us
                    </a>
                  </div>
                </div>
              </div>

              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-4 relative" ref={signUpRef}>
              <button
                onClick={() => setShowSignUp(!showSignUp)}
                className="hidden sm:block px-8 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-sm font-bold transition-all"
              >
                Sign Up
              </button>

              {/* BEAUTIFUL SIGN UP CARD DROPDOWN */}
              {showSignUp && (
                <div className="absolute top-full right-0 mt-4 w-[360px] animate-in fade-in slide-in-from-top-2 duration-300 z-[110]">
                  <div className="glass p-8 rounded-3xl border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>

                    <div className="flex flex-col gap-1 mb-6">
                      <h3 className="text-xl font-bold tracking-tight">
                        Create Account
                      </h3>
                      <p className="text-gray-400 text-xs">
                        Start your 14-day free trial today.
                      </p>
                    </div>

                    <form
                      className="space-y-4"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all placeholder:text-gray-700"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all placeholder:text-gray-700"
                        />
                      </div>

                      <button className="w-full py-4 mt-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold transition-all shadow-[0_10px_20px_rgba(234,88,12,0.3)] flex items-center justify-center gap-2 group">
                        Get Started
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="group-hover:translate-x-1 transition-transform"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>

                      <p className="text-center text-[11px] text-gray-500">
                        Already have an account?{" "}
                        <span className="text-white cursor-pointer hover:underline">
                          Log in
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              )}

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white transition-colors"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-[600px] opacity-100 mt-6 pb-8" : "max-h-0 opacity-0 pointer-events-none"}`}
          >
            <div className="flex flex-col gap-6 text-sm font-bold text-gray-300 uppercase tracking-widest px-4">
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Pages
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>

              <div className="glass p-6 rounded-2xl flex flex-col gap-4 border-orange-500/20 mt-2">
                <div className="space-y-1">
                  <p className="text-[10px] text-orange-500 tracking-[0.2em] font-black">
                    GET STARTED
                  </p>
                  <p className="normal-case tracking-tight text-white text-base">
                    Join the Genesis community today.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowSignUp(!showSignUp);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] flex items-center justify-center gap-2"
                >
                  Sign Up Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="flex flex-col items-center justify-center text-center pt-44 pb-20 px-6">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full text-[12px] font-bold mb-12 backdrop-blur-md border border-white/5">
            <span className="text-gray-400 tracking-tight">
              Smart, Fast, Always Active.
            </span>
            <span className="text-orange-500 border-l border-white/10 ml-2 pl-2 cursor-pointer">
              See Demo
            </span>
          </div>

          <h1 className="text-6xl md:text-[94px] font-bold leading-[0.95] tracking-tighter mb-10">
            Close More Deals <br />
            <span className="animated-gradient-text">Grow Your Business.</span>
          </h1>

          <p className="max-w-xl text-gray-300 text-lg md:text-xl mb-12 font-medium leading-relaxed">
            AI-powered CRM & ERP designed to build, scale, and elevate your
            business.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-[#cc2b5e] hover:bg-[#e91e63] text-white px-12 py-5 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(204,43,94,0.4)] text-lg">
              Get Started
            </button>
            <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-lg text-white px-12 py-5 rounded-full font-bold transition-all text-lg">
              <span className="w-6 h-6 flex items-center justify-center border border-white rounded-full text-[10px]">
                ▶
              </span>
              View Demo
            </button>
          </div>

          <section className="mt-14 w-full">
            <p className="py-6 mt-14 text-center text-gray-500">
              Trusted by leading companies worldwide —
            </p>
            <div className="flex flex-wrap justify-between max-sm:justify-center gap-10 max-w-4xl w-full mx-auto py-4 brightness-0 invert opacity-60">
              <Image
                src="/assets/company-logo-1.svg"
                alt="logo"
                width={120}
                height={30}
                className="h-7 w-auto"
              />
              <Image
                src="/assets/company-logo-2.svg"
                alt="logo"
                width={120}
                height={30}
                className="h-7 w-auto"
              />
              <Image
                src="/assets/company-logo-3.svg"
                alt="logo"
                width={120}
                height={30}
                className="h-7 w-auto"
              />
              <Image
                src="/assets/company-logo-4.svg"
                alt="logo"
                width={120}
                height={30}
                className="h-7 w-auto"
              />
              <Image
                src="/assets/company-logo-5.svg"
                alt="logo"
                width={120}
                height={30}
                className="h-7 w-auto"
              />
            </div>
          </section>
          <section className="container mx-auto px-6 mt-5 max-w-5xl">
            <div className="bg-white/[0.03] backdrop-blur-md rounded-3xl py-8 px-4 border border-white/5 shadow-xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 divide-x divide-white/5">
                {/* Stat 1 */}
                <div className="flex flex-col items-center">
                  <h2
                    className="text-3xl md:text-4xl font-black tracking-tighter mb-1"
                    style={{ color: "#ff7c00" }}
                  >
                    +24%
                  </h2>
                  <p className="text-gray-500 font-bold uppercase text-[12px] tracking-widest">
                    Higher leads
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center border-none sm:border-solid">
                  <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-1 text-white">
                    99%
                  </h2>
                  <p className="text-gray-500 font-bold uppercase text-[12px] tracking-widest text-center px-2">
                    Satisfaction score
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center">
                  <h2
                    className="text-3xl md:text-4xl font-black tracking-tighter mb-1"
                    style={{ color: "#1e00ff" }}
                  >
                    4B+
                  </h2>
                  <p className="text-gray-500 font-bold uppercase text-[12px] tracking-widest">
                    Daily API calls
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="flex flex-col items-center">
                  <h2
                    className="text-3xl md:text-4xl font-black tracking-tighter mb-1"
                    style={{ color: "#d9165f" }}
                  >
                    35B
                  </h2>
                  <p className="text-gray-500 font-bold uppercase text-[12px] tracking-widest text-center px-2">
                    Messages in 2025
                  </p>
                </div>
              </div>
            </div>
          </section>
        </header>

        {/* Feature Section */}
        <section className="pt-20 flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-white">
              Powerful CRM Features
            </h2>
            <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
              Everything you need to manage customers, close deals, and grow
              your revenue in one platform.
            </p>
          </div>

          <div className="flex flex-wrap items-stretch justify-center gap-6 mt-10 px-6">
            {/* Card 1: Customers */}
            <div className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full transition duration-300 flex flex-col min-h-[250px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide size-8.5 text-orange-500"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3 className="text-base font-medium text-white">Customers</h3>
              <p className="text-gray-100 pb-2 flex-grow">
                Manage your global client base with 360-degree profiles and deep
                relationship history.
              </p>
            </div>

            {/* Card 2: Leads */}
            <div className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full transition duration-300 flex flex-col min-h-[250px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide size-8.5 text-pink-500"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="m9 15 3 3 3-3" />
              </svg>
              <h3 className="text-base font-medium text-white">Leads</h3>
              <p className="text-gray-100 pb-2 flex-grow">
                Capture and score potential prospects automatically to focus on
                high-conversion opportunities.
              </p>
            </div>

            {/* Card 3: Quotes */}
            <div className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full transition duration-300 flex flex-col min-h-[250px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide size-8.5 text-blue-500"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 9h8" />
                <path d="M8 13h6" />
              </svg>
              <h3 className="text-base font-medium text-white">Quotes</h3>
              <p className="text-gray-100 pb-2 flex-grow">
                Generate professional price estimates and proposals with
                customized branding and logic.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-stretch justify-center gap-6 mt-10 px-6">
            {/* Card 4: Orders */}
            <div className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full transition duration-300 flex flex-col min-h-[250px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide size-8.5 text-orange-500"
              >
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M2 7v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7" />
                <path d="M12 22v-5" />
                <path d="M5 7h14" />
              </svg>
              <h3 className="text-base font-medium text-white">Orders</h3>
              <p className="text-gray-100 pb-2 flex-grow">
                Track order fulfillment from placement to delivery with
                real-time status updates.
              </p>
            </div>

            {/* Card 5: Invoices */}
            <div className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full transition duration-300 flex flex-col min-h-[250px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide size-8.5 text-pink-500"
              >
                <rect width="16" height="20" x="4" y="2" rx="2" />
                <path d="M8 10h8" />
                <path d="M8 14h8" />
                <path d="M8 18h5" />
                <path d="M18 6h.01" />
              </svg>
              <h3 className="text-base font-medium text-white">Invoices</h3>
              <p className="text-gray-100 pb-2 flex-grow">
                Automate billing cycles and send professional digital invoices
                to get paid faster.
              </p>
            </div>

            {/* Card 6: Products */}
            <div className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full transition duration-300 flex flex-col min-h-[250px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide size-8.5 text-blue-500"
              >
                <path d="m7.5 4.27 9 5.15" />
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
              <h3 className="text-base font-medium text-white">Products</h3>
              <p className="text-gray-100 pb-2 flex-grow">
                Manage your inventory, SKU details, and pricing models in a
                central catalog.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-stretch justify-center gap-6 mt-10 px-6">
            {/* Card 7: Expenses */}
            <div className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full transition duration-300 flex flex-col min-h-[250px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide size-8.5 text-orange-500"
              >
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <h3 className="text-base font-medium text-white">Expenses</h3>
              <p className="text-gray-100 pb-2 flex-grow">
                Monitor outgoing costs and business spending with categorized
                expense tracking.
              </p>
            </div>

            {/* Card 8: Payments */}
            <div className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full transition duration-300 flex flex-col min-h-[250px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide size-8.5 text-pink-500"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              <h3 className="text-base font-medium text-white">Payments</h3>
              <p className="text-gray-100 pb-2 flex-grow">
                Record transactions and reconcile accounts to maintain healthy
                cash flow.
              </p>
            </div>

            {/* Card 9: Payment Mode */}
            <div className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full transition duration-300 flex flex-col min-h-[250px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide size-8.5 text-blue-500"
              >
                <path d="M12 1v22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <h3 className="text-base font-medium text-white">Payment Mode</h3>
              <p className="text-gray-100 pb-2 flex-grow">
                Configure multiple gateways, from Stripe to bank transfers and
                physical cash.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-stretch justify-center gap-6 mt-10 px-6">
            {/* Card 10: Taxes */}
            <div className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full transition duration-300 flex flex-col min-h-[250px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide size-8.5 text-orange-500"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z" />
                <path d="M16 8h-4a2 2 0 1 0 0 4h4" />
                <path d="M12 18h.01" />
              </svg>
              <h3 className="text-base font-medium text-white">Taxes</h3>
              <p className="text-gray-100 pb-2 flex-grow">
                Apply regional tax rules, VAT, and GST automatically based on
                customer location.
              </p>
            </div>
            {/* Analytics & Reports */}
            <div className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full transition duration-300 flex flex-col min-h-[250px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide size-8.5 text-blue-500"
              >
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
              <h3 className="text-base font-medium text-white">
                Analytics & Reports
              </h3>
              <p className="text-gray-100 pb-2 flex-grow">
                Transform raw data into actionable insights with real-time
                performance tracking.
              </p>
            </div>
            {/* Email Integration */}
            <div className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full transition duration-300 flex flex-col min-h-[250px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide size-8.5 text-orange-500"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <h3 className="text-base font-medium text-white">
                Email Integration
              </h3>
              <p className="text-gray-100 pb-2 flex-grow">
                Sync your inbox to track conversations, automate follow-ups, and
                log history automatically.
              </p>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="relative space-y-20 md:space-y-30 mt-20 max-w-6xl mx-auto px-6 w-full">
            <div className="text-center">
            <h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-white">
              Unloack the power of Tenzor CRM with key features
            </h2>
            <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
              With Tenzor CRM&apos;s robust automation tools, propel streamline your business operations, enhance customer relationships.
            </p>
          </div>

            <div className="flex-col items-center hidden md:flex absolute left-1/2 -translate-x-1/2">
              <p className="flex items-center justify-center font-medium my-10 aspect-square bg-white/5 border border-white/10 w-10 h-10 rounded-full text-white">
                01
              </p>
              <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <p className="flex items-center justify-center font-medium my-10 aspect-square bg-white/5 border border-white/10 w-10 h-10 rounded-full text-white">
                02
              </p>
              <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <p className="flex items-center justify-center font-medium my-10 aspect-square bg-white/5 border border-white/10 w-10 h-10 rounded-full text-white">
                03
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
              <div className="flex-1 relative aspect-video w-full max-w-md rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/assets/workflow1.jpg"
                  alt="step"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
                <h3 className="text-2xl font-medium text-white">
                  Lead Tracking
                </h3>
                <p className="text-gray-100 text-sm/6 line-clamp-3 pb-2">
                  Improve lead management and evaluation to focus on the most promising prospects.
                </p>
                <a
                  href="#!"
                  className="flex items-center gap-2 text-orange-500 font-bold hover:underline text-sm uppercase tracking-widest"
                >
                  Learn More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row-reverse">
              <div className="flex-1 relative aspect-video w-full max-w-md rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/assets/workflow2.png"
                  alt="step"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
                <h3 className="text-2xl font-medium text-white">
                  Follow-ups
                </h3>
                <p className="text-gray-100 text-sm/6 line-clamp-3 pb-2">
                  Streamline your workflow by automating follow-ups to boost engagement and save time.
                </p>
                <a
                  href="#!"
                  className="flex items-center gap-2 text-pink-500 font-bold hover:underline text-sm uppercase tracking-widest"
                >
                  Learn More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
              <div className="flex-1 relative aspect-video w-full max-w-md rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/assets/workflow3.png"
                  alt="step"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
                <h3 className="text-2xl font-medium text-white">
                  Sites Built
                </h3>
                <p className="text-gray-100 text-sm/6 line-clamp-3 pb-2">
                  Develop tailored lead-nurturing workflows to enable personalized and meaningful interactions with potential clients.
                </p>
                <a
                  href="#!"
                  className="flex items-center gap-2 text-blue-500 font-bold hover:underline text-sm uppercase tracking-widest"
                >
                  Learn More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <section className="mt-32 flex flex-col items-center max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-white">
                Loved by Sales Teams Worldwide
              </h2>
              <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
                See why thousands of businesses trust Tenzor CRM to manage their customer relationships.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Richard Nelson",
                  img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
                  text: "Super clean and easy to use. These Tailwind + React components saved me hours of dev time and countless lines of extra code!",
                },
                {
                  name: "Sophia Martinez",
                  img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
                  text: "The design quality is top-notch. Perfect balance between simplicity and style. Highly recommend for any creative developer!",
                },
                {
                  name: "Ethan Roberts",
                  img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
                  text: "Absolutely love the reusability of these components. My workflow feels 10x faster now with cleaner and more consistent layouts.",
                },
                {
                  name: "Isabella Kim",
                  img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
                  text: "Clean, elegant, and efficient. These components are a dream for any modern web developer who values beautiful code.",
                },
                {
                  name: "Liam Johnson",
                  img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
                  text: "I've tried dozens of UI kits, but this one just feels right. Everything works seamlessly and looks incredibly polished.",
                },
                {
                  name: "Ava Patel",
                  img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
                  text: "Brilliantly structured components with clean, modern styling. Makes development a joy and design updates super quick.",
                },
              ].map((user, idx) => (
                <div
                  key={idx}
                  className="w-full max-w-88 space-y-5 rounded-lg glass p-5 hover:-translate-y-1 transition duration-300"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-xs text-gray-500 uppercase tracking-widest">
                      Founder & CEO
                    </p>
                    <div className="relative size-10 rounded-full overflow-hidden border border-white/10">
                      <Image
                        src={user.img}
                        alt={user.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                  <p className="text-sm/6 text-gray-200 line-clamp-3">
                    “{user.text}”
                  </p>
                  <p className="text-gray-400 text-xs">- {user.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-32 w-full max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-white">
                FAQ&apos;s
              </h2>
              <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
                Looking for answers to your frequently asked questions? Check
                out our FAQ&apos;s section below to find.
              </p>
            </div>
            <div className="mx-auto mt-12 space-y-4 w-full max-w-xl">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="flex flex-col glass rounded-md overflow-hidden"
                >
                  <h3
                    className="flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium"
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                  >
                    {faq.question}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-chevron-down size-5 transition-all shrink-0 duration-400 ${activeFaq === index ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </h3>
                  <div
                    className={`px-4 text-sm/6 transition-all duration-400 overflow-hidden ${activeFaq === index ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PRICING */}
          <section className="mt-32 w-full max-w-7xl mx-auto">
            <div className="text-center px-6">
              <h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-white">
                Our Pricing Plans
              </h2>
              <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
                A visual collection of our most recent works - each piece
                crafted with intention, emotion and style.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap lg:flex-nowrap items-stretch justify-center gap-6 px-6">
              {/* Starter */}
              <div className="group flex-1 min-w-[300px] max-w-sm glass p-6 rounded-xl hover:-translate-y-0.5 transition duration-300 flex flex-col">
                <div className="flex items-center w-max ml-auto text-xs gap-2 glass rounded-full px-3 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-rocket size-3.5"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                  <span>Starter</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold">
                  $19 <span className="text-sm font-normal">/month</span>
                </h3>
                <p className="text-gray-200 mt-3">
                  For individuals and small teams
                </p>
                <button className="mt-7 rounded-md w-full py-2 bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  Get Started
                </button>
                <div className="mt-6 flex flex-col gap-2 flex-grow">
                  {[
                    "Up to 10 projects",
                    "10 AI tasks/month",
                    "Basic text generation",
                    "Simple chatbot access",
                    "Email support only",
                    "Community resources",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 py-1">
                      <div className="rounded-full glass border-0 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check size-3 text-white"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional */}
              <div className="group flex-1 min-w-[300px] max-w-sm glass p-6 rounded-xl hover:-translate-y-0.5 transition duration-300 border-orange-500/30 flex flex-col">
                <div className="flex items-center w-max ml-auto text-xs gap-2 glass rounded-full px-3 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap size-3.5"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                  <span>Professional</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold">
                  $49 <span className="text-sm font-normal">/month</span>
                </h3>
                <p className="text-gray-200 mt-3">
                  For growing teams and startups
                </p>
                <button className="mt-7 rounded-md w-full py-2 bg-white text-gray-800 font-bold hover:bg-gray-200 transition">
                  Upgrade Now
                </button>
                <div className="mt-6 flex flex-col gap-2 flex-grow">
                  {[
                    "Unlimited AI tasks",
                    "API integration",
                    "Text & image outputs",
                    "Priority chat & email support",
                    "Detailed analytics",
                    "Team collaboration",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 py-1">
                      <div className="rounded-full glass border-0 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check size-3 text-white"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise */}
              <div className="group flex-1 min-w-[300px] max-w-sm glass p-6 rounded-xl hover:-translate-y-0.5 transition duration-300 flex flex-col">
                <div className="flex items-center w-max ml-auto text-xs gap-2 glass rounded-full px-3 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-crown size-3.5"
                  >
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                  <span>Enterprise</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold">
                  $149 <span className="text-sm font-normal">/month</span>
                </h3>
                <p className="text-gray-200 mt-3">
                  For enterprises and agencies
                </p>
                <button className="mt-7 rounded-md w-full py-2 bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  Contact Sales
                </button>
                <div className="mt-6 flex flex-col gap-2 flex-grow">
                  {[
                    "Custom AI models",
                    "Team access control",
                    "Dedicated account manager",
                    "Secure private API",
                    "SLA uptime guarantee",
                    "24/7 premium support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 py-1">
                      <div className="rounded-full glass border-0 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check size-3 text-white"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="relative flex flex-col max-w-[1000px] w-[92%] mt-48 px-8 mx-auto items-center justify-center text-center py-20 rounded-2xl glass overflow-hidden border border-white/10">
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Embark on the journey to excellence
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
             Become part of a community that enhances over 100,000 outstanding customer experiences, where your success is out top priority.
            </p>
            <button className="px-10 py-4 bg-white text-black rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mt-10 font-bold text-base shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right size-5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-white/5 blur-[80px] pointer-events-none rounded-full"></div>
          </div>

          {/* FOOTER */}
          <footer className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0 border-t border-white/5">
            <a href="https://canary.tenzor-ai.cloud/login">
              <Image
                alt="logo"
                loading="lazy"
                width={205}
                height={48}
                className="h-18.5 w-auto"
                src="/assets/Tenzor-Logo-white-full.png"
              />
            </a>
            <div className="flex flex-wrap items-center justify-center gap-8 py-8">
              <a
                className="transition hover:text-gray-300"
                href="#terms-of-service"
              >
                Terms of Service
              </a>
              <a
                className="transition hover:text-gray-300"
                href="#privacy-policy"
              >
                Privacy Policy
              </a>
              <a className="transition hover:text-gray-300" href="#security">
                Security
              </a>
              <a className="transition hover:text-gray-300" href="#sitemap">
                Sitemap
              </a>
            </div>
            <hr className="w-full border-white/20 mt-6" />
            <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-4 px-10">
              <p className="text-gray-400 text-sm">Build AI agents for free</p>
              <p className="text-gray-400 text-sm text-center">
                Copyright © 2026 Greyloops.com. All rights reserved.
              </p>
            </div>
          </footer>
        </section>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.85;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        .animated-gradient-text {
          background: linear-gradient(
            90deg,
            #ff7c00,
            #d9165f,
            #1e00ff,
            #ffffff
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 5s ease infinite;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .size-8\.5 {
          width: 34px;
          height: 34px;
        }
        .animate-in {
          animation: fadeInScale 0.25s ease-out forwards;
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default GenesisLandingPage;
