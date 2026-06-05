import { createSelector } from "@reduxjs/toolkit";

export const selectCartItems = (state) =>
    state.cart.items;

export const selectCartTotals = createSelector(
    [selectCartItems],
    (items) => {
        const subtotal = items.reduce(
            (acc, item) =>
                acc + item.price * item.quantity,
            0
        );

        const totalQuantity = items.reduce(
            (acc, item) => acc + item.quantity,
            0
        );

        const discount = items.reduce(
            (acc, item) =>
                acc +
                ((item.originalPrice || item.price) -
                    item.price) *
                item.quantity,
            0
        );

        return {
            subtotal,
            totalQuantity,
            discount,
            grandTotal: subtotal,
        };
    }
);