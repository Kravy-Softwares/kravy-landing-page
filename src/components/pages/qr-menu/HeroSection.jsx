"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, ShoppingCart, Sparkles, ArrowRight, Volume2, VolumeX, CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const { addToCart, setIsCartOpen } = useCart();
  const router = useRouter();

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleBuyNow = () => {
    addToCart({
      id: "year1",
      name: "Kravy QR Dining Menu Plan",
      price: 1999,
    });
    setIsCartOpen(true);
    router.push("/checkout");
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleScrollToVideo = () => {
    const el = document.getElementById("hero-video-player");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="relative w-full pt-16 pb-10 px-4 flex flex-col items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50/40 via-white to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-200/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="w-full flex flex-col items-center text-center relative z-10 space-y-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-green-600 animate-pulse" />
          <span className="text-[10px] font-black text-green-700 tracking-wider uppercase">SaaS QR Table Ordering</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl">
          Turn Every Table Into a <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 text-transparent bg-clip-text">Smart Ordering Machine</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[12px] sm:text-md md:text-lg text-slate-500 font-semibold max-w-2xl leading-relaxed">
          Say goodbye to physical paper menus, busy waiters, and payment bottlenecks. Settle checks instantly, boost average order values by 30%.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <button onClick={handleBuyNow} className="sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-green-500/10 hover:shadow-lg hover:shadow-green-500/20">
            <ShoppingCart className="w-4 h-4" /> Buy Now (₹1999)
          </button>
        </motion.div>

        <motion.div id="hero-video-player" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="w-full mt-2 max-w-5xl relative group cursor-pointer" onClick={togglePlay}>
          <div className="absolute -inset-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-[28px] blur-xl opacity-20 group-hover:opacity-30 transition duration-1000" />

          <div className="relative rounded-[24px] border-4 border-white dark:border-slate-800 bg-slate-900 shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
            <video ref={videoRef} className="w-full h-full object-cover" src="/assets/reels/reel1.mp4" loop muted={isMuted} autoPlay playsInline />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
              <div className={`w-16 h-16 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-2xl transform transition-all duration-300 scale-90 md:scale-100 ${isPlaying ? "opacity-0 group-hover:opacity-100 scale-75" : "opacity-100 scale-100"}`}>
                {isPlaying ? (
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <Play className="w-6 h-6 fill-current ml-1" />
                )}
              </div>

              <button onClick={toggleMute} className="absolute bottom-4 right-4 bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md text-white border border-slate-700/40 p-2.5 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 z-30">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <div className="absolute top-4 left-4 bg-green-500/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-[10px] font-black tracking-widest uppercase flex items-center gap-1.5 z-20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                LIVE DEMO PREVIEW
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
