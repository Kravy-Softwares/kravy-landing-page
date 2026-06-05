import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity, updateQuantity, clearCart } from "@/store/slice/cartSlice";

export const useCart = () => {
    const dispatch = useDispatch();

    const items = useSelector(
        (state) => state.cart.items
    );

    return {
        items,

        addToCart: (product) =>
            dispatch(addToCart(product)),

        removeFromCart: (id) =>
            dispatch(removeFromCart(id)),

        incrementQuantity: (id) =>
            dispatch(incrementQuantity(id)),

        decrementQuantity: (id) =>
            dispatch(decrementQuantity(id)),

        updateQuantity: (id, quantity) =>
            dispatch(
                updateQuantity({
                    id,
                    quantity,
                })
            ),

        clearCart: () =>
            dispatch(clearCart()),
    };
};