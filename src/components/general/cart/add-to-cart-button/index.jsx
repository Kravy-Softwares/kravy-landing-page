"use client";
import { useState } from "react";
import { useCart } from "@/store/hooks/useCart";
import { ShoppingCart, Check } from "lucide-react";

export default function AddToCartButton({ product, quantity = 1, className = "" }) {
    const { items, addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const isInCart = items.some((item) => item._id === product._id);

    const handleAddToCart = () => {
        if (!isInCart) {
            addToCart({ ...product, quantity });
        }
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
        window.dispatchEvent(new CustomEvent("open-cart"));
    };

    return (
        <button
            onClick={handleAddToCart}
            className={`flex flex-1 items-center justify-center gap-2 h-12 rounded-xl border border-zinc-200 font-bold text-xs transition-all duration-200
                ${added
                    ? "border-green-400 bg-green-50 text-green-700"
                    : "hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/50"
                } ${className}`}
        >
            {added ? (
                <>
                    <Check size={14} />
                    Added!
                </>
            ) : (
                <>
                    <ShoppingCart size={14} />
                    Add to Cart
                </>
            )}
        </button>
    );
}