"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { QrCode, Smartphone, Download, Star, BellRing, Clock, CheckCircle2, ChevronRight, ArrowRight, ShieldCheck, ArrowRightLeft, Users, Sparkles } from "lucide-react";


export default function HowItWorks() {
  const [sliderVal, setSliderVal] = useState(65);

  return (
    <section className="w-full py-20 px-4 bg-[#FAF8F5] flex flex-col items-center relative overflow-hidden">
      {/* Subtle SaaS Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-emerald-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Widescreen Header */}
      <div className="max-w-4xl w-full text-center space-y-4 mb-16 relative z-10">
        <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-black text-[#0B132B] tracking-tight leading-tight">We handle the dining complexity</h2>
        <p className="text-sm sm:text-[15px] text-[#5A6376] font-medium max-w-2xl mx-auto leading-relaxed">Let our smart QR ordering system manage the table checks while you focus on cooking and scaling your business with the right dining experience.</p>
      </div>

      {/* SaaS Bento Grid Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        {/* ================= COLUMN 1 (LEFT) ================= */}
        <div className="flex flex-col gap-6">
          {/* Card 1: Payroll Management equivalent -> Table QR Setup */}
          <div className="bg-white border border-[#E9EBF0] rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden relative min-h-[300px]">
            <div className="space-y-2 mb-6">
              <h3 className="text-[20px] font-black text-[#0B132B] leading-tight">1. Table QR Setup</h3>
              <p className="text-xs text-[#5A6376] font-medium leading-relaxed">Generate high-quality, branded QRs for each table instantly from your dashboard.</p>
            </div>

            {/* Widget Area: Beautiful 3D QR Stand Mockup */}
            <div className="flex-1 w-full flex justify-center items-center relative overflow-hidden bg-[#FAF8F5] rounded-2xl border border-[#E9EBF0] p-4 mt-2">
              {/* Subtle ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent pointer-events-none" />

              {/* Acrylic Stand Base Shadow */}
              <div className="absolute bottom-3 w-28 h-2 bg-black/10 rounded-full blur-md" />

              {/* QR Stand Card */}
              <div className="w-[130px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#E9EBF0] overflow-hidden relative z-10 flex flex-col transform hover:-translate-y-1 transition-transform duration-300 group">
                {/* Branding Header */}
                <div className="bg-[#0B132B] px-3 py-2.5 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                  <div className="text-white text-[7px] font-bold tracking-widest uppercase opacity-70 mb-0.5">Kravy Grill</div>
                  <div className="text-white font-black text-xs leading-none">Table 04</div>
                </div>

                {/* QR Code Section */}
                <div className="p-3 flex flex-col items-center gap-2.5 bg-white relative">
                  <div className="w-full aspect-square border-2 border-emerald-500/10 rounded-lg p-1.5 relative flex items-center justify-center">
                    {/* Scanner Frame Corners */}
                    <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-emerald-500 rounded-tl-sm opacity-60" />
                    <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-emerald-500 rounded-tr-sm opacity-60" />
                    <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-emerald-500 rounded-bl-sm opacity-60" />
                    <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-emerald-500 rounded-br-sm opacity-60" />

                    <QrCode className="w-full h-full text-[#0B132B]" strokeWidth={1.5} />

                    {/* Scanning laser animation line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500/80 shadow-[0_0_8px_2px_rgba(16,185,129,0.4)] animate-[scan_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="flex items-center justify-center gap-1 text-[#0B132B] bg-emerald-50 px-2 py-1 rounded-full w-full">
                    <Smartphone className="w-2.5 h-2.5 text-emerald-600 animate-pulse" />
                    <span className="text-[7.5px] font-black uppercase tracking-wider text-emerald-700">Scan to Order</span>
                  </div>
                </div>

                {/* Acrylic Stand Base Lip */}
                <div className="h-2 w-full bg-gradient-to-b from-[#E9EBF0] to-[#D1D5DB] border-t border-white" />
              </div>
            </div>
          </div>

          {/* Card 2: Live Order Status UI */}
          <div className="bg-white border border-[#E9EBF0] rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden relative min-h-[300px]">
            <div className="space-y-2 mb-4">
              <h3 className="text-[20px] font-black text-[#0B132B] leading-tight">Live Order Tracking</h3>
              <p className="text-xs text-[#5A6376] font-medium leading-relaxed">Guests can track their food preparation status in real-time straight from their phone.</p>
            </div>

            <div className="flex-1 w-full flex items-center justify-center relative mt-2 bg-[#FAF8F5] rounded-2xl border border-[#E9EBF0] p-4">
              <div className="w-[160px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden relative z-10 transition-transform hover:-translate-y-1 duration-300 border border-[#E9EBF0]/50">
                <img src="/assets/qr/status.jpeg" alt="Order Status Tracking" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= COLUMN 2 (CENTER) ================= */}
        <div className="flex flex-col gap-6">
          {/* Tall Card 3: All-in-One Dashboard equivalent -> Smart Digital Menu */}
          <div className="bg-white border border-[#E9EBF0] rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden relative min-h-[460px]">
            <div className="space-y-2 mb-4">
              <h3 className="text-[20px] font-black text-[#0B132B] leading-tight">2. Smart Digital Menu</h3>
              <p className="text-xs text-[#5A6376] font-medium leading-relaxed">A gorgeous, interactive catalog with vivid dish photos, ratings, and instant filters.</p>
            </div>

            {/* Menu Illustration Display */}
            <div className="flex-1 w-full flex items-center justify-center relative mt-2 bg-[#FAF8F5] rounded-2xl border border-[#E9EBF0] p-4">
              <div className="w-full max-w-[240px] bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden relative z-10 transition-transform hover:-translate-y-1 duration-300 border border-[#E9EBF0]/50 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="h-2.5 bg-[#E9EBF0] rounded-full w-24 mb-2" />
                    <div className="h-2.5 bg-[#E9EBF0] rounded-full w-16" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 rounded-full bg-[#F3F4F6] w-full" />
                  <div className="h-3 rounded-full bg-[#F3F4F6] w-5/6" />
                  <div className="h-3 rounded-full bg-[#F3F4F6] w-3/4" />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="h-16 rounded-2xl bg-[#F8FAFB] border border-[#E9EBF0]" />
                  <div className="h-16 rounded-2xl bg-[#F8FAFB] border border-[#E9EBF0]" />
                </div>
                <p className="text-[11px] text-[#5A6376] leading-relaxed mt-4">Instantly browse dishes, filter favorites and view ratings without the mobile mockup.</p>
              </div>
            </div>
          </div>

          {/* Card 6: Tailored hiring process equivalent -> Tailored dining flow */}

          <div className="bg-white border border-[#E9EBF0] rounded-[24px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-between gap-6 min-h-[80px]">
            <div className="flex-shrink-0 space-y-0.5">
              <h4 className="text-[14px] font-black text-[#0B132B] tracking-tight">Tailored dining flow</h4>
              <p className="text-[10px] text-[#8C94A5] font-semibold">Fully tailored branding</p>
            </div>

            {/* Custom interactive progress slider matches screenshot */}
            <div className="flex-1 flex items-center relative py-2">
              <input
                type="range"
                min="10"
                max="100"
                value={sliderVal}
                onChange={(e) => setSliderVal(Number(e.target.value))}
                className="w-full h-2 bg-[#E9EBF0] rounded-full appearance-none cursor-pointer accent-[#6366F1] focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #6366F1 0%, #6366F1 ${sliderVal}%, #E9EBF0 ${sliderVal}%, #E9EBF0 100%)`,
                }}
              />
              <div
                className="absolute w-[18px] h-[18px] rounded-full bg-white border-4 border-[#6366F1] pointer-events-none shadow-md"
                style={{
                  left: `calc(${sliderVal}% - 9px)`,
                  transition: "left 0.05s ease-out",
                }}
              />
            </div>
          </div>
        </div>

        {/* ================= COLUMN 3 (RIGHT) ================= */}
        <div className="flex flex-col gap-6">
          {/* Card 4: Gather Instant Feedback */}
          <div className="bg-white border border-[#E9EBF0] rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden relative min-h-[300px]">
            <div className="space-y-2 mb-4">
              <h3 className="text-[20px] font-black text-[#0B132B] leading-tight">Direct Customer Feedback</h3>
              <p className="text-xs text-[#5A6376] font-medium leading-relaxed">Let diners share their dining experience and leave a review directly on your digital menu.</p>
            </div>

            <div className="flex-1 w-full flex items-center justify-center relative mt-2 bg-[#FAF8F5] rounded-2xl border border-[#E9EBF0] p-4">
              <div className="w-[160px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden relative z-10 transition-transform hover:-translate-y-1 duration-300 border border-[#E9EBF0]/50">
                <img src="/assets/qr/review.jpeg" alt="Google Review Form" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          {/* Card 5: Performance Tracking equivalent -> Live Service Status */}
          <div className="bg-white border border-[#E9EBF0] rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden relative min-h-[300px]">
            <div className="space-y-2 mb-6">
              <h3 className="text-[20px] font-black text-[#0B132B] leading-tight">Live Service Status</h3>
              <p className="text-xs text-[#5A6376] font-medium leading-relaxed">Monitor every step from table scan to kitchen preparation and final billing.</p>
            </div>

            {/* Widget Area: Replicating Performance Review Row Lists */}
            <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#E9EBF0] space-y-2 text-[9px]">
              <div className="flex justify-between items-center pb-2 border-b border-[#E9EBF0]">
                <span className="font-extrabold text-[#0B132B]">Table Status Review</span>
                <span className="text-[#6366F1] font-black cursor-pointer hover:underline">View All</span>
              </div>

              {/* Status List Rows */}
              <div className="space-y-1.5">
                {/* Row 1 */}
                <div className="bg-white rounded-lg p-2 border border-[#E9EBF0] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#6366F1]/10 flex items-center justify-center font-bold text-[#6366F1]">04</div>
                    <div>
                      <div className="font-black text-[#0B132B]">Lucas Dean</div>
                      <div className="text-[7.5px] text-[#8C94A5] font-semibold">Main Hall • 2 Items</div>
                    </div>
                  </div>
                  <span className="bg-[#6366F1]/10 text-[#6366F1] font-black px-2 py-0.5 rounded-full border border-[#6366F1]/20">Preparing</span>
                </div>

                {/* Row 2 */}
                <div className="bg-white rounded-lg p-2 border border-[#E9EBF0] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-emerald-600">12</div>
                    <div>
                      <div className="font-black text-[#0B132B]">Nina Lui</div>
                      <div className="text-[7.5px] text-[#8C94A5] font-semibold">Window Side • 4 Items</div>
                    </div>
                  </div>
                  <span className="bg-emerald-50 text-emerald-600 font-black px-2 py-0.5 rounded-full border border-emerald-100">Success</span>
                </div>

                {/* Row 3 */}
                <div className="bg-white rounded-lg p-2 border border-[#E9EBF0] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center font-bold text-amber-600">09</div>
                    <div>
                      <div className="font-black text-[#0B132B]">Angela Roma</div>
                      <div className="text-[7.5px] text-[#8C94A5] font-semibold">Tenth Row • 1 Item</div>
                    </div>
                  </div>
                  <span className="bg-amber-50 text-amber-600 font-black px-2 py-0.5 rounded-full border border-amber-100">Active Call</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
