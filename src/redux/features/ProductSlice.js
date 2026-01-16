import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    filteredItems: [],
    searchItem: "",
    selectedCategory: ""
}

// function - search Product and search Category
const filterProducts = (state) => {
    return state.items.filter((product) => {
        const matchSearch = product.title // returns true or false as per match
            .toLowerCase()
            .includes(state.searchItem.toLowerCase());

        const matchCategory =
            state.selectedCategory === "" ||    //  if no category is selected , show all products7
            product.category === state.selectedCategory;

        return matchSearch && matchCategory;
    })
}

// create a slice 
const productSlice = createSlice({
    name: 'products',
    initialState, // referes to above mentioned
    reducers: {
        
        setProduces: (state, action) => {
            state.items = action.payload;
            state.filteredItems = action.payload;
        },

        setSearchItems: (state, action) => {
            state.searchItem = action.payload;
            state.filteredItems = filterProducts(state)
        },

        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.filteredItems = filterProducts(state)
        }
    }

});

export const { setProduces, setSearchItems, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;