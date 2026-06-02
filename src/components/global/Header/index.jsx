"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./helper/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = useCallback(
    (item) => {
      if (!pathname) return false;
      if (pathname === item.href) return true;

      if (item.children?.length) {
        return item.children.some((child) => pathname.startsWith(child.href));
      }

      if (item.href === "/") return pathname === "/";
      return pathname.startsWith(item.href);
    },
    [pathname]
  );

  const toggleMobileSubmenu = (href) => {
    setOpenMenus((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenMenus({});
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl px-3 sm:px-6 rounded-xl border border-gray-200 bg-white/70 backdrop-blur-md shadow-lg dark:border-gray-500 dark:bg-darkBackground/40">
      <div className="flex items-center justify-between py-3">
        <Link href="/" onClick={closeMobileMenu}>
          <div className="flex items-center gap-2">
            <Image
              src="/kravydark.png"
              alt="Kravy Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-black tracking-tighter text-black dark:text-white">
              Kravy
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item, index) => {
            const hasChildren = !!item.children?.length;
            const isMenuExpanded = activeDropdown === item.href;

            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + index * 0.08 }}
                className="relative"
                onMouseEnter={() => hasChildren && setActiveDropdown(item.href)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                {hasChildren ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={isMenuExpanded}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                        isActive(item)
                          ? "text-primary-600"
                          : "text-gray-700 hover:text-primary-600 dark:text-gray-200"
                      }`}
                    >
                      {item.title}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          isMenuExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isMenuExpanded && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full pt-2 w-56 z-50"
                        >
                          <div className="rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden dark:border-slate-700 dark:bg-slate-900 py-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  pathname.startsWith(child.href)
                                    ? "text-primary-600 font-semibold"
                                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                                }`}
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors py-2 group ${
                      isActive(item)
                        ? "text-primary-600"
                        : "text-gray-700 hover:text-primary-600 dark:text-gray-200"
                    }`}
                  >
                    {item.title}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 rounded-full bg-primary-600 transition-all duration-300 ${
                        isActive(item) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href={process.env.NEXT_PUBLIC_KRAVY_BILLING_APP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex bg-primary-600 hover:bg-primary-700 items-center gap-2 rounded-md px-5 py-2 text-sm font-semibold text-white shadow-md active:scale-95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Get Started
          </motion.a>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-800 dark:text-white lg:hidden p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-300 px-4 pb-4 lg:hidden"
          >
            <div className="space-y-1 mt-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  {item.children?.length ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(item.href)}
                        className={`flex w-full items-center justify-between py-3 text-sm border-b border-gray-100 ${
                          isActive(item) ? "text-primary-600 font-semibold" : "text-gray-800"
                        }`}
                      >
                        <span>{item.title}</span>
                        {openMenus[item.href] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>

                      <AnimatePresence initial={false}>
                        {openMenus[item.href] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-4 bg-gray-50/50 rounded-lg"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMobileMenu}
                                className={`block py-2.5 text-sm transition-colors ${
                                  pathname.startsWith(child.href)
                                    ? "text-primary-600 font-medium"
                                    : "text-gray-700 hover:text-primary-600"
                                }`}
                              >
                                {child.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`block border-b py-3 text-sm ${
                        isActive(item) ? "text-primary-600 font-semibold" : "text-gray-800"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <a
              href={process.env.NEXT_PUBLIC_KRAVY_BILLING_APP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-md bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-md active:scale-95 hover:bg-primary-700"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
