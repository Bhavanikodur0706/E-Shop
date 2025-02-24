import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { products: [], totalQuantity: 0, totalPrice: 0 };
};

// Save cart to localStorage
const saveCartToStorage = (state) => {
    localStorage.setItem("cart", JSON.stringify(state));
};

const initialState = loadCartFromStorage();

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.products.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += Number(newItem.price);
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: Number(newItem.price),
                    quantity: 1,
                    totalPrice: Number(newItem.price),
                    image: newItem.image
                });
            }
            state.totalPrice += Number(newItem.price);
            state.totalQuantity++;

            saveCartToStorage(state); // Save updated cart
        },

        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.products.find((item) => item.id === id);

            if (existingItem) {
                state.totalPrice -= Number(existingItem.totalPrice);
                state.totalQuantity -= existingItem.quantity;
                state.products = state.products.filter((item) => item.id !== id);
            }

            saveCartToStorage(state); // Save updated cart
        },

        clearCart(state) {
            state.products = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;

            saveCartToStorage(state); // Save empty cart
        },

        increaseQuantity(state, action) {
            const id = action.payload;
            const item = state.products.find((item) => item.id === id);

            if (item) {
                item.quantity++;
                item.totalPrice += Number(item.price);
                state.totalPrice += Number(item.price);
                state.totalQuantity++;
            }

            saveCartToStorage(state); // Save updated cart
        },

        decreaseQuantity(state, action) {
            const id = action.payload;
            const item = state.products.find((item) => item.id === id);

            if (item && item.quantity > 1) {
                item.quantity--;
                item.totalPrice -= Number(item.price);
                state.totalPrice -= Number(item.price);
                state.totalQuantity--;
            } else {
                state.products = state.products.filter((item) => item.id !== id);
                state.totalPrice -= Number(item.totalPrice);
                state.totalQuantity -= item.quantity;
            }

            saveCartToStorage(state); // Save updated cart
        }
    }
});

export const { addtoCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
