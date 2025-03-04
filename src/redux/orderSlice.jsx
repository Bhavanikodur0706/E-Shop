// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   orderDetails: null,
// };

// const orderSlice = createSlice({
//   name: 'order',
//   initialState,
//   reducers: {
//     placeOrder: (state, action) => {
//       state.orderDetails = action.payload;
//     },
//   },
// });

// export const { placeOrder } = orderSlice.actions;
// export default orderSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: null
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderDetails: (state, action) => {
      state.order = action.payload;
    }
  }
});

export const { setOrderDetails } = orderSlice.actions;
export default orderSlice.reducer;
