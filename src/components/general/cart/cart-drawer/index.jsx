"use client";
import { useEffect } from "react";
import { X, ShoppingCart } from "lucide-react";
import { useCart } from "@/store/hooks/useCart";
import { motion, AnimatePresence } from "framer-motion";
import CartItem from "@/components/general/cart/cart-items";
import CartSummary from "@/components/general/cart/cart-summary";

export default function CartDrawer({ open, onClose }) {
    const { items, clearCart } = useCart();

    useEffect(() => {
        if (!open) return;
        const handleKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open, onClose]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden="true"
                    />
                    <motion.aside
                        key="drawer"
                        role="dialog"
                        aria-label="Shopping cart"
                        aria-modal="true"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 320, damping: 32 }}
                        className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
                    >
                        <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
                            <div className="flex items-center gap-2">
                                <ShoppingCart size={18} className="text-indigo-600" />
                                <h2 className="text-base font-bold text-zinc-900">
                                    Your Cart
                                </h2>
                                {items.length > 0 && (
                                    <span className="ml-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-100 px-1.5 text-[10px] font-bold text-indigo-700">
                                        {items.reduce((acc, i) => acc + i.quantity, 0)}
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-2">
                                {items.length > 0 && (
                                    <button
                                        onClick={clearCart}
                                        className="text-xs text-zinc-400 hover:text-red-500 transition-colors font-medium"
                                    >
                                        Clear all
                                    </button>
                                )}
                                <button
                                    onClick={onClose}
                                    aria-label="Close cart"
                                    className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto px-5 py-2 scrollbar-thin">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100">
                                        <ShoppingCart size={32} className="text-zinc-300" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-zinc-700 text-sm">
                                            Your cart is empty
                                        </p>
                                        <p className="text-xs text-zinc-400 mt-1">
                                            Browse our products and add some to cart.
                                        </p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="mt-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-700 transition-colors"
                                    >
                                        Shop Now
                                    </button>
                                </div>
                            ) : (
                                <div className="divide-y divide-zinc-100">
                                    <AnimatePresence initial={false}>
                                        {items.map((item) => (
                                            <motion.div
                                                key={item._id + (item.variantId || "")}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <CartItem item={item} />
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="border-t border-zinc-100 px-5 py-4 bg-zinc-50/50">
                                <CartSummary onClose={onClose} />
                            </div>
                        )}
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}