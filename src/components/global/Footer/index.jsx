"use client";

import React from "react";
import Link from "next/link";
import { COMPANY } from "@/constants";
import { Instagram, Linkedin, Twitter, ShieldCheck, Zap, ExternalLink } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS, FOOTER_DESCRIPTION } from "./helper/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200/60 bg-[#f8faff] pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-12">
          <div className="space-y-5 text-start md:text-left lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-start gap-3 transition-opacity hover:opacity-90"
            >
              <img src="/kravydark.png" alt="Kravy Logo" className="h-10 w-auto object-contain" />
              <span className="text-2xl font-black tracking-tight text-neutral-900">Kravy</span>
            </Link>

            <p className="mx-auto max-w-sm text-sm leading-7 text-neutral-500 md:mx-0">
              {FOOTER_DESCRIPTION}
            </p>

            <div className="flex items-center justify-start gap-4 pt-1 md:justify-start">
              {SOCIAL_LINKS.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-all duration-200 hover:border-green-500 hover:text-green-600"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-5 text-start md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-900">
              Solutions
            </h4>

            <ul className="space-y-3">
              {FOOTER_LINKS.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-green-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 text-start md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-900">
              Company
            </h4>

            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-green-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 text-start md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-900">
              Contact
            </h4>

            <div className="space-y-3 text-sm leading-6 text-neutral-500">
              <a
                href={`mailto:${COMPANY.EMAIL.SUPPORT}`}
                className="block transition-colors hover:text-green-600"
              >
                {COMPANY.EMAIL.SUPPORT}
              </a>

              <a
                href={`tel:${COMPANY.PHONE}`}
                className="block font-medium transition-colors hover:text-green-600"
              >
                {COMPANY.PHONE}
              </a>

              <p className="mx-auto max-w-xs md:mx-0">{COMPANY.ADDRESS}</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=3rd+Floor,+House+No.+599,+Gali+Number+2,+Near+Chandra+Garden,+Rajokri,+New+Delhi,+Delhi+110038"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-green-600 hover:underline"
              >
                View on Map
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="space-y-5 text-start md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-900">
              Legal
            </h4>

            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-green-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-6">
          <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="flex flex-col items-center gap-2 text-xs font-medium text-neutral-400 md:flex-row">
              <span>
                © {currentYear} {COMPANY.NAME}. All rights reserved.
              </span>

              <span className="hidden h-1.5 w-1.5 rounded-full bg-neutral-300 md:block" />

              <span className="uppercase tracking-[0.12em]">
                A Product of Kravy Software Development
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
              <div className="flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-2">
                <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-700">
                  Made in India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
