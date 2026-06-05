import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    coupon: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        hydrateCart: (state, action) => {
            return action.payload;
        },

        addToCart: (state, action) => {
            const product = action.payload;

            const existingItem = state.items.find(
                (item) =>
                    item._id === product._id
            );

            if (existingItem) {
                existingItem.quantity += product.quantity || 1;
            } else {
                state.items.push({
                    _id: product._id,
                    slug: product.slug,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    stock: product.stock || 999,
                    quantity: product.quantity || 1,
                });
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item._id !== action.payload
            );
        },

        incrementQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item._id === action.payload
            );

            if (!item) return;

            if (item.quantity < item.stock) {
                item.quantity += 1;
            }
        },

        decrementQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item._id === action.payload
            );

            if (!item) return;

            if (item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;

            const item = state.items.find(
                (item) => item._id === id
            );

            if (!item) return;

            item.quantity = quantity;
        },

        clearCart: (state) => {
            state.items = [];
            state.coupon = null;
        },
    },
});

export const {
    hydrateCart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    updateQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;