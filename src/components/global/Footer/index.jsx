import React from "react";
import Link from "next/link";
import { COMPANY } from "@/constants";
import { Instagram, Linkedin, Twitter, ShieldCheck, Zap, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerData = {
    solutions: [
      { name: "3-Click Billing", href: "/#features" },
      { name: "QR Table Ordering", href: "/#features" },
      { name: "Thermal Printing", href: "/#compare" },
      { name: "Sales Analytics", href: "/#pricing" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Blogs", href: "/blog" },
      { name: "Updates", href: "/updates" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-and-conditions" },
      { name: "Refund Policy", href: "/cancellation-and-refund-policy" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  };

  return (
    <footer className="w-full bg-[#f8faff] border-t border-neutral-200/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img src="/kravydark.png" alt="Kravy Logo" className="h-10 w-auto object-contain" />
              <span className="text-2xl font-black text-neutral-900 tracking-tighter">Kravy</span>
            </Link>

            <p className="text-[13px] text-neutral-500 leading-[1.8] max-w-xs">Your one-stop premium platform for smart billing, inventory management, and business growth. Simplifying your commercial operations with high-tech solutions.</p>

            <div className="flex items-center gap-4 pt-2">
              {[
                {
                  icon: <Instagram className="w-4 h-4" />,
                  href: "https://www.instagram.com/kravy_billing",
                },
                {
                  icon: <Linkedin className="w-4 h-4" />,
                  href: "#",
                },
                {
                  icon: <Twitter className="w-4 h-4" />,
                  href: "#",
                },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-600 transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Solutions</h4>

            <ul className="space-y-4">
              {footerData.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[13px] text-neutral-500 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Company</h4>

            <ul className="space-y-4">
              {footerData.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[13px] text-neutral-500 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Contact</h4>

            <div className="space-y-4 text-[13px] text-neutral-500 leading-relaxed">
              <a href={`mailto:${COMPANY.EMAIL.SUPPORT}`} className="block hover:text-blue-600 transition-colors">
                {COMPANY.EMAIL.SUPPORT}
              </a>

              <a href={`tel:${COMPANY.PHONE}`} className="block hover:text-blue-600 transition-colors font-medium">
                {COMPANY.PHONE}
              </a>

              <p className="max-w-[200px]">{COMPANY.ADDRESS}</p>

              <a href="https://www.google.com/maps/search/?api=1&query=3rd+Floor,+House+No.+599,+Gali+Number+2,+Near+Chandra+Garden,+Rajokri,+New+Delhi,+Delhi+110038" target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-1.5 hover:underline font-bold text-[12px]">
                View on Map
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Legal</h4>

            <ul className="space-y-4">
              {footerData.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[13px] text-neutral-500 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-[11px] font-medium text-neutral-400">
              <span>
                © {currentYear} {COMPANY.NAME}.in. All rights reserved.
              </span>

              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-neutral-200" />

              <span className="uppercase tracking-[0.05em] text-[10px]">a product of kravy software development</span>
            </div>

            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[10px] font-black tracking-tight text-blue-700 uppercase">Made with ❤️ in India</span>
              </div>

              <div className="flex items-center gap-2 text-neutral-400">
                <Zap className="w-3.5 h-3.5 fill-current opacity-20" />
                <span className="text-[10px] font-bold tracking-widest uppercase">99.9% Uptime Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
