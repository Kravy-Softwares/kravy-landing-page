export const saveCart = (cart) => {
    localStorage.setItem(
        "kravy-cart-items",
        JSON.stringify(cart)
    );
};

export const loadCart = () => {
    try {
        const cart =
            localStorage.getItem("kravy-cart-items");

        return cart
            ? JSON.parse(cart)
            : {
                items: [],
            };
    } catch {
        return {
            items: [],
        };
    }
};