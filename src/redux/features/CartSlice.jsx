import { createSlice } from "@reduxjs/toolkit"

// Initial state of cart
const initialState = {
    items: [], // will store cart items
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Check if item already exists in cart
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                // If item exists, increase quantity
                existingItem.quantity += 1
            } else {
                // If item does not exist, add it with quantity = 1
                state.items.push({
                    ...action.payload,    // copy product details
                    quantity: 1           // add quantity property
                });
            }
        },
        // Remove an item completely from the cart
        removeFromCart: (state, action) => {
            // action.payload contains the id of item to remove
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        // Update quantity of a specific cart item
        updateQuantity: (state, action) => {

            // action.payload should be: { id, quantity }
            const item = state.items.find((item) => item.id === action.payload.id);
            
            if (item) {
                // Set new quantity
                item.quantity = action.payload.quantity;
            }
        }
    }
})

export const { addToCart, removeFromCart, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;