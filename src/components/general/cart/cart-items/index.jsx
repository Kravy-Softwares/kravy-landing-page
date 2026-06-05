"use client";
import { useCart } from "@/store/hooks/useCart";
import { Minus, Plus, Trash2 } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function CartItem({ item }) {
    console.log(item)
    const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();
    const lineTotal = item.price * item.quantity;

    return (
        <div className="flex gap-3.5 py-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50">
                <img
                    src={item?.image?.src}
                    alt={item.name}
                    className="object-cover"
                    sizes="80px"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between min-w-0">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-zinc-800 truncate leading-snug">
                            {item.name}
                        </h4>
                        {item.sku && (
                            <span className="text-[10px] text-zinc-400 mt-0.5 block">
                                {item.sku}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => removeFromCart(item._id)}
                        aria-label="Remove item"
                        className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-md text-zinc-300 hover:text-red-500 hover:bg-red-50 transition-colors"
                    >
                        <Trash2 size={13} />
                    </button>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-white px-1.5 py-1">
                        <button
                            onClick={() => decrementQuantity(item._id)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                            className="flex h-5 w-5 items-center justify-center rounded-md text-zinc-500 hover:bg-zinc-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                            <Minus size={11} />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-zinc-800">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => incrementQuantity(item._id)}
                            disabled={item.quantity >= item.stock}
                            aria-label="Increase quantity"
                            className="flex h-5 w-5 items-center justify-center rounded-md text-zinc-500 hover:bg-zinc-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                            <Plus size={11} />
                        </button>
                    </div>

                    <span className="text-sm font-bold text-zinc-900">
                        {formatPrice(lineTotal)}
                    </span>
                </div>
            </div>
        </div>
    );
}