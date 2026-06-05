import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import { saveCart, loadCart } from "@/lib/local-storage/cart-storage";

const preloadedCart =
    typeof window !== "undefined" ? loadCart() : { items: [], coupon: null, shippingMethod: null };

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: {
            items: preloadedCart.items || [],
            coupon: preloadedCart.coupon || null,
            shippingMethod: preloadedCart.shippingMethod || null,
        },
    },
});

let saveTimer;
store.subscribe(() => {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
        const { cart } = store.getState();
        saveCart(cart);
    }, 300);
});