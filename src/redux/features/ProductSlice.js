import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items : Products,
    filteredItems: Products,
    searchItem: "",
}

// function - search Product and search Category
const filterProducts = (state) => {
    return state.items.filter((product) => {
        const matchSearch = product.title
        .toLowerCase()
        .includes(state.searchItem.toLowerCase());
        return matchSearch;
    })
}

// create a slice 
const productSlice = createSlice({
    name: 'products',
    initialState, // referes to above mentioned
    reducers : {
        setSearchItems: (state, action) => {
            state.searchItem = action.payload;
            state.filteredItems = filterProducts(state)
        }
    }

});

export const [ setSearchItems ] = productSlice.actions;
export default productSlice.reducer;