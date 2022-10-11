import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [],
    status: null,
    filter:''
}

export const getProducts = createAsyncThunk(
    'product/getProducts' ,
    async ()=>{
        const response = await axios.get('http://localhost:5000/products')
        return response?.data
    })





const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      Search:(state,action)=>{
         state.filter=action.payload
      }
    },
    extraReducers: {
    [getProducts.pending]: (state, action) => {
        state.status = 'pending';
    },
    [getProducts.fulfilled]: (state, action) => {
        state.status = 'fulfilled';
        state.items=action.payload;
    },
    [getProducts.rejected]: (state, action) => {
        state.status = 'rejected';
    }
}})

export const {Search} = productsSlice.actions
export default productsSlice.reducer