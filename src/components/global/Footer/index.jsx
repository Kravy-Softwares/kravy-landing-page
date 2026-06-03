"use client";

import React from "react";
import Link from "next/link";
import { COMPANY } from "@/constants";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS, FOOTER_DESCRIPTION } from "./helper/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-primary-100 bg-gradient-to-b from-white to-primary-50/30 pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-12">
          <div className="space-y-5 lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <img src="/kravydark.png" alt="Kravy Logo" className="h-10 w-auto object-contain" />

              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-2xl font-black tracking-tight text-transparent">
                Kravy
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-neutral-600">{FOOTER_DESCRIPTION}</p>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:text-primary-600 hover:shadow-md"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-900">
              Solutions
            </h4>

            <ul className="space-y-3">
              {FOOTER_LINKS.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-500 transition-all duration-200 hover:translate-x-1 hover:text-primary-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-900">
              Company
            </h4>

            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-500 transition-all duration-200 hover:translate-x-1 hover:text-primary-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-900">
              Contact
            </h4>

            <div className="space-y-3 text-sm leading-6 text-neutral-500">
              <a
                href={`mailto:${COMPANY.EMAIL.SUPPORT}`}
                className="block transition-colors hover:text-primary-600"
              >
                {COMPANY.EMAIL.SUPPORT}
              </a>

              <a
                href={`tel:${COMPANY.PHONE}`}
                className="block font-medium transition-colors hover:text-primary-600"
              >
                {COMPANY.PHONE}
              </a>

              <p className="max-w-xs">{COMPANY.ADDRESS}</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=3rd+Floor,+House+No.+599,+Gali+Number+2,+Near+Chandra+Garden,+Rajokri,+New+Delhi,+Delhi+110038"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-primary-600 hover:underline"
              >
                View on Map
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-900">
              Legal
            </h4>

            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-500 transition-all duration-200 hover:translate-x-1 hover:text-primary-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-100 pt-6">
          <div className="flex flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="flex flex-col items-center gap-2 text-xs font-medium text-neutral-500 md:flex-row">
              <span>
                © {currentYear} {COMPANY.NAME}. All rights reserved.
              </span>

              <span className="hidden h-1.5 w-1.5 rounded-full bg-neutral-300 md:block" />

              <span className="uppercase tracking-[0.12em] text-neutral-400">
                A Product of Kravy Software Development
              </span>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-2 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-primary-600" />

                <span className="text-[10px] font-bold uppercase tracking-wider text-primary-700">
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
