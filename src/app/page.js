"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yzvaxrptbsnacxfoeqtc.supabase.co";
const supabaseKey = "sb_publishable_hZn7vB7auMGTAySqz-is5g_lFkTKITL";
const supabase = createClient(supabaseUrl, supabaseKey);

const GenesisLandingPage = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  // Waitlist States
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase
      .from("waitlist")
      .insert([{ email: email }]);
    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
    }
  };

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
      question: "How does Tenzor AI help manage customer relationships?",
      answer:
        "Tenzor AI centralizes all customer data, interactions, and communications in one platform. Track leads, manage deals, automate follow-ups, and gain insights to build stronger customer relationships.",
    },
    {
      question: "Can I import my existing customer data?",
      answer:
        "Yes! Tenzor AI supports importing data from spreadsheets (CSV, Excel), other CRM systems like Salesforce, HubSpot, and Pipedrive, as well as direct API integrations.",
    },
    {
      question: "Is Tenzor AI suitable for small businesses?",
      answer:
        "Absolutely. Our Starter plan is designed specifically for small businesses and startups. As you grow, you can easily upgrade to access more features and users.",
    },
    {
      question: "Does Tenzor AI integrate with email and calendar?",
      answer:
        "Yes, Tenzor AI integrates seamlessly with Gmail, Outlook, Google Calendar, and Microsoft 365. Sync emails, schedule meetings, and track all communications automatically.",
    },
    {
      question: "Can I try Tenzor AI before committing?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#020202] text-white selection:bg-orange-500/30 overflow-x-hidden font-sans scroll-smooth">
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
              <a href="#">
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
              {[
                { name: "Home", href: "#home" },
                { name: "Features", href: "#features" },
                { name: "Pricing", href: "#pricing" },
                { name: "Support", href: "#support" },
              ].map((item) => (
                <div key={item.name} className="py-2">
                  <a
                    href={item.href}
                    className="relative group transition-all duration-300 ease-out flex items-center"
                  >
                    <span className="hover:text-white transition-colors">
                      {item.name}
                    </span>
                    {/* Modern underline fade animation applied to all */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                  </a>
                </div>
              ))}
            </div>

            <div
              className="flex items-center gap-4 relative"
              style={{ zIndex: 10000 }}
              ref={signUpRef}
            >
              <button
                onClick={() => setShowSignUp(!showSignUp)}
                className="hidden sm:block px-8 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-sm font-bold transition-all"
              >
                Early Access
              </button>

              {/* BEAUTIFUL EARLY ACCESS CARD DROPDOWN */}
              {showSignUp && (
                <div className="absolute top-full right-0 mt-4 w-[360px] animate-in fade-in slide-in-from-top-2 duration-300 z-[10001]">
                  <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,1)] relative overflow-hidden isolate">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>

                    {status === "success" ? (
                      <div className="text-center py-6 animate-in zoom-in duration-500">
                        <div className="size-16 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">You&apos;re in!</h3>
                        <p className="text-gray-400 text-sm mt-2">
                          We&apos;ve added{" "}
                          <span className="text-white font-medium">
                            {email}
                          </span>{" "}
                          to our list.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-col gap-1 mb-6">
                          <h3 className="text-xl font-bold tracking-tight text-white">
                            Request Early Access
                          </h3>
                          <p className="text-gray-400 text-xs">
                            Join the waitlist for exclusive first access to
                            Tenzor AI.
                          </p>
                        </div>
                        <form
                          className="space-y-4"
                          onSubmit={handleWaitlistSubmit}
                        >
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">
                              Work Email
                            </label>
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="name@company.com"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-gray-700"
                            />
                          </div>
                          <button
                            disabled={status === "loading"}
                            className="w-full py-4 mt-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold transition-all shadow-[0_10px_20px_rgba(234,88,12,0.3)] flex items-center justify-center gap-2 group disabled:opacity-50"
                          >
                            {status === "loading" ? (
                              <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                              "Join Waitlist"
                            )}
                          </button>
                          {status === "error" && (
                            <p className="text-red-500 text-[10px] text-center">
                              Something went wrong. Please try again.
                            </p>
                          )}
                        </form>
                      </>
                    )}
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
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
              <a
                href="#features"
                className="hover:text-white transition-colors"
              >
                Features
              </a>
              <a href="#pricing" className="hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#support" className="hover:text-white transition-colors">
                Support
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
<header
  id="home"
  className="flex flex-col items-center justify-center text-center pt-44 pb-20 px-6 overflow-hidden"
>
  {/* Modern Animation Styles */}
  <style>{`
    @keyframes scrollLeftLogo {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll-logos {
      display: flex;
      width: max-content;
      animation: scrollLeftLogo 35s linear infinite;
    }
    .mask-edges-logo {
      mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    }
    .logo-marquee-container:hover .animate-scroll-logos {
      animation-play-state: paused;
    }
  `}</style>

  {/* Badge with Click Event */}
  <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full text-[12px] font-bold mb-12 backdrop-blur-md border border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <span className="text-gray-400 tracking-tight">
      Smart, Fast, Always Active.
    </span>
    <span
      onClick={() => setIsDemoOpen(true)}
      className="text-orange-500 border-l border-white/10 ml-2 pl-2 cursor-pointer hover:text-orange-400 transition-colors"
    >
      See Demo
    </span>
  </div>

  {/* Title Animation */}
  <h1 className="text-6xl md:text-[94px] font-bold leading-[0.95] tracking-tighter mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
    Close More Deals <br />
    <span className="animated-gradient-text">Grow Your Business.</span>
  </h1>

  <p className="max-w-xl text-gray-300 text-lg md:text-xl mb-12 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
    AI-powered CRM & ERP designed to build, scale, and elevate your
    business.
  </p>

  {/* Button group */}
  <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
    <button className="bg-[#cc2b5e] hover:bg-[#e91e63] text-white px-12 py-5 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(204,43,94,0.4)] text-lg">
      Get Started
    </button>
    <button
      onClick={() => setIsDemoOpen(true)}
      className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-lg text-white px-12 py-5 rounded-full font-bold transition-all text-lg"
    >
      <span className="w-6 h-6 flex items-center justify-center border border-white rounded-full text-[10px]">
        ▶
      </span>
      View Demo
    </button>
  </div>

  {/* Logos Section - Fixed Width & Masked Marquee */}
  <section className="mt-14 w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-left-20 duration-1000 delay-700">
    <p className="py-6 mt-14 text-center text-gray-500">
      Trusted by leading companies worldwide —
    </p>
    
    <div className="logo-marquee-container w-full overflow-hidden mask-edges-logo py-4">
      <div className="animate-scroll-logos brightness-0 invert opacity-60">
        {[...Array(2)].map((_, i) => (
          <div key={`logo-row-${i}`} className="flex gap-16 pr-16 items-center">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={`logo-${num}-${i}`} className="w-[120px] flex-shrink-0">
                <Image
                  src={`/assets/company-logo-${num}.png`}
                  alt={`logo-${num}`}
                  width={120}
                  height={30}
                  className="h-7 w-auto object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Stats Section */}
  <section className="container mx-auto px-6 mt-5 max-w-5xl animate-in fade-in slide-in-from-right-20 duration-1000 delay-1000">
    <div className="bg-white/[0.03] backdrop-blur-md rounded-3xl py-8 px-4 border border-white/5 shadow-xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 divide-x divide-white/5">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-1" style={{ color: "#ff7c00" }}>+24%</h2>
          <p className="text-gray-500 font-bold uppercase text-[12px] tracking-widest">Higher leads</p>
        </div>
        <div className="flex flex-col items-center border-none sm:border-solid">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-1 text-white">99%</h2>
          <p className="text-gray-500 font-bold uppercase text-[12px] tracking-widest text-center px-2">Satisfaction score</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-1" style={{ color: "#1e00ff" }}>4B+</h2>
          <p className="text-gray-500 font-bold uppercase text-[12px] tracking-widest">Daily API calls</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-1" style={{ color: "#d9165f" }}>35B</h2>
          <p className="text-gray-500 font-bold uppercase text-[12px] tracking-widest text-center px-2">Messages in 2025</p>
        </div>
      </div>
    </div>
  </section>

  {/* MODERN AI MODAL - VIDEO F.mov */}
  {isDemoOpen && (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10">
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-500"
        onClick={() => setIsDemoOpen(false)}
      ></div>

      <div className="relative w-full max-w-6xl aspect-video bg-black border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] animate-in zoom-in-95 duration-500">
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-white/[0.02] relative z-20">
          <div className="flex gap-2.5">
            <button onClick={() => setIsDemoOpen(false)} className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:brightness-125 transition-all"></button>
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span className="text-[10px] text-gray-400 font-mono uppercase tracking-[0.3em]">
              Neural_Preview_ERP.mov
            </span>
          </div>
          <button onClick={() => setIsDemoOpen(false)} className="text-gray-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="relative h-[calc(100%-60px)] w-full bg-black">
          <video autoPlay muted loop controls playsInline webkit-playsinline="true" className="w-full h-full object-cover">
            <source src="/assets/F.mov" type="video/quicktime" />
            <source src="/assets/F.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )}
</header>

        {/* Feature Section */}
        <section id="features" className="pt-20 flex flex-col items-center">
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
                Unloack the power of Tenzor AI with key features
              </h2>
              <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
                With Tenzor AI robust automation tools, propel streamline your
                business operations, enhance customer relationships.
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

            <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row group/container">
              {/* IMAGE CONTAINER */}
              <div className="flex-1 relative aspect-video w-full max-w-md rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                {/* 1. THE IMAGE: Zooms and sharpens on hover */}
                <Image
                  src="/assets/workflow14.jpg"
                  alt="step"
                  fill
                  className="object-cover transition-all duration-700 ease-in-out scale-100 group-hover:scale-110 blur-[1px] group-hover:blur-0 saturate-50 group-hover:saturate-100"
                />

                {/* 2. AI OVERLAY: Blue/Orange digital tint that fades in */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 3. THE "GLINT": A high-tech light streak that sweeps across once on hover */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"
                  style={{ animation: "shimmer 2s infinite" }}
                />

                {/* 4. NEON CORNERS: Digital 'targeting' brackets that appear on hover */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0" />
              </div>

              {/* TEXT SECTION */}
              <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium text-white group-hover/container:text-orange-500 transition-colors duration-500">
                    Smarter insights
                  </h3>
                  <div className="h-0.5 w-12 bg-orange-500 transform origin-left scale-x-0 group-hover/container:scale-x-100 transition-transform duration-500"></div>
                </div>

                <p className="text-gray-400 text-sm/6 line-clamp-3 pb-2 group-hover/container:text-gray-200 transition-colors duration-500">
                  Make faster, data-driven decisions powered by real-time AI
                  analysis and prediction.
                </p>

                <a
                  href="#!"
                  className="flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-widest group/link"
                >
                  <span className="group-hover/link:mr-2 transition-all duration-300">
                    Learn More
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover/link:scale-125 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row-reverse">
              <div className="flex-1 relative aspect-video w-full max-w-md rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/assets/workflow2.jpg"
                  alt="step"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
                <h3 className="text-2xl font-medium text-white">
                  Integrated AI solutions
                </h3>
                <p className="text-gray-100 text-sm/6 line-clamp-3 pb-2">
                  No extra tools or plugins needed. Get built-in, scalable AI
                  from day one.
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
                  src="/assets/workflow4.jpg"
                  alt="step"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
                <h3 className="text-2xl font-medium text-white">
                  End-to-end automation
                </h3>
                <p className="text-gray-100 text-sm/6 line-clamp-3 pb-2">
                  Eliminate bottlenecks with intelligent workflows that never
                  leave you guessing.
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
          <section className="mt-32 flex flex-col items-center max-w-6xl mx-auto px-6 overflow-hidden">
            {/* Modern Animation Styles */}
            <style>{`
    @keyframes scrollLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes scrollRight {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    .animate-scroll-left {
      display: flex;
      width: max-content;
      animation: scrollLeft 35s linear infinite;
    }
    .animate-scroll-right {
      display: flex;
      width: max-content;
      animation: scrollRight 35s linear infinite;
    }
    /* Fade mask for edges */
    .mask-edges {
      mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    }
    .testimonial-container:hover .animate-scroll-left,
    .testimonial-container:hover .animate-scroll-right {
      animation-play-state: paused;
    }
  `}</style>

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                Loved by Sales Teams <br />{" "}
                <span className="text-orange-500">Worldwide</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                See why thousands of businesses trust Tenzor AI to manage their
                customer relationships.
              </p>
            </div>

            <div className="testimonial-container w-full flex flex-col gap-10 mask-edges">
              {/* ROW 1: LEFT TO RIGHT */}
              <div className="w-full overflow-hidden">
                <div className="animate-scroll-left">
                  {[...Array(2)].map((_, i) => (
                    <div key={`row1-loop-${i}`} className="flex gap-8 pr-8">
                      {[
                        {
                          name: "Richard Nelson",
                          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
                          text: "Tenzor AI transformed our sales process. We closed 40% more deals in the first quarter after switching.",
                        },
                        {
                          name: "Sophia Martinez",
                          img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
                          text: "Finally, a CRM that marketing and sales can use together. Lead scoring and tracking have never been easier.",
                        },
                        {
                          name: "Ethan Roberts",
                          img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
                          text: "As a startup, we needed something powerful yet affordable. Tenzor AI delivers enterprise features at a fraction.",
                        },
                      ].map((user, idx) => (
                        <div
                          key={idx}
                          className="w-96 shrink-0 space-y-6 rounded-2xl bg-white/[0.03] backdrop-blur-md p-8 border border-white/10 transition-all duration-500 hover:bg-white/[0.07] hover:border-orange-500/30 group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-bold text-[10px] text-orange-500 uppercase tracking-widest mb-1">
                                Founder & CEO
                              </p>
                              <p className="text-white font-semibold text-sm">
                                {user.name}
                              </p>
                            </div>
                            <div className="relative size-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-orange-500/50 transition-colors">
                              <Image
                                src={user.img}
                                alt={user.name}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm/7 italic leading-relaxed whitespace-normal">
                            “{user.text}”
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* ROW 2: RIGHT TO LEFT */}
              <div className="w-full overflow-hidden">
                <div className="animate-scroll-right">
                  {[...Array(2)].map((_, i) => (
                    <div key={`row2-loop-${i}`} className="flex gap-8 pr-8">
                      {[
                        {
                          name: "Isabella Kim",
                          img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
                          text: "Customer retention improved by 25% since we started using Tenzor AI. The automated touchpoints keep engagement high.",
                        },
                        {
                          name: "Liam Johnson",
                          img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
                          text: "I've used Salesforce and HubSpot. Tenzor AI is the first CRM our entire team actually enjoys using daily.",
                        },
                        {
                          name: "Ava Patel",
                          img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
                          text: "The reporting dashboards give me instant insights. I can make data-driven decisions in minutes, not hours.",
                        },
                      ].map((user, idx) => (
                        <div
                          key={idx}
                          className="w-96 shrink-0 space-y-6 rounded-2xl bg-white/[0.03] backdrop-blur-md p-8 border border-white/10 transition-all duration-500 hover:bg-white/[0.07] hover:border-orange-500/30 group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-bold text-[10px] text-orange-500 uppercase tracking-widest mb-1">
                                Growth Lead
                              </p>
                              <p className="text-white font-semibold text-sm">
                                {user.name}
                              </p>
                            </div>
                            <div className="relative size-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-orange-500/50 transition-colors">
                              <Image
                                src={user.img}
                                alt={user.name}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm/7 italic leading-relaxed whitespace-normal">
                            “{user.text}”
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="support" className="mt-32 w-full max-w-6xl mx-auto px-6">
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
          <section id="pricing" className="mt-32 w-full max-w-7xl mx-auto">
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
              Become part of a community that enhances over 100,000 outstanding
              customer experiences, where your success is out top priority.
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
            <a href="#">
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
