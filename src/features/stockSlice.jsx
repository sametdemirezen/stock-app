import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    sales: [],
    purchases: [],
    firms: [],
    categories : [],
    brands: [],
    products: []   
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

     getStockSuccess : (state, {payload: {data, url}}) => {
      state.loading = false;
      state[url] = data
    },


    /* getFirmsSuccess : (state, {payload}) => {
      state.loading = true;
      state.firms = payload
    },

    getBrandsSuccess : (state, {payload}) => {
      state.loading = true;
      state.brands = payload
    }, */


   
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  getStockSuccess
} = stockSlice.actions;
export default stockSlice.reducer;
