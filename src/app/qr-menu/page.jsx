"use client";
import React from "react";
import HowItWorks from "@/components/pages/qr-menu/HowItWorks";
import HeroSection from "@/components/pages/qr-menu/HeroSection";

export default function Page() {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start overflow-hidden">
      <HeroSection />
      <HowItWorks />
    </div>
  );
}
