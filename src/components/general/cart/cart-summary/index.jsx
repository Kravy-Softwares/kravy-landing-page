"use client";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCartTotal } from "@/store/hooks/useCartTotal";
import { formatPrice } from "@/lib/utils";

export default function CartSummary({ onClose }) {
    const { subtotal, discount, grandTotal } = useCartTotal();

    return (
        <div className="border-t border-zinc-100 pt-4 space-y-4">
            <div className="space-y-2.5 text-sm">
                <div className="flex justify-between text-zinc-500">
                    <span>Subtotal</span>
                    <span className="font-medium text-zinc-800">
                        {formatPrice(subtotal)}
                    </span>
                </div>

                {discount > 0 && (
                    <div className="flex justify-between text-zinc-500">
                        <span>Discount</span>
                        <span className="font-medium text-green-600">
                            -{formatPrice(discount)}
                        </span>
                    </div>
                )}

                <div className="flex justify-between font-bold text-zinc-900 text-base border-t border-zinc-100 pt-2.5">
                    <span>Total</span>
                    <span>
                        {formatPrice(grandTotal)}
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                <Link
                    href="/shop/checkout"
                    onClick={onClose}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-indigo-100 transition-all hover:bg-indigo-700 hover:-translate-y-0.5 active:translate-y-0"
                >
                    <ShoppingBag size={15} />
                    Proceed to Checkout
                </Link>

                <button
                    onClick={onClose}
                    className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:border-zinc-300"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}