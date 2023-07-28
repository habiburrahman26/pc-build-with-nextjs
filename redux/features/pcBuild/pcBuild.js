const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  totalItems: 0,
  totalPrice: 0,
  items: [],
};

const pcBuildSlice = createSlice({
  name: 'pcBuild',
  initialState,
  reducers: {
    addToPcBuild: (state, action) => {
      const sameItemExist = state.items.find(
        (item) => item.category === action.payload.category
      );

      if (!sameItemExist) {
        state.totalItems += 1;
        state.totalPrice += action.payload.price;
        state.items = [...state.items, action.payload];
      } else {
        const existingCategoryItemRemove = state.items.filter(
          (item) => item.category != action.payload.category
        );

        state.totalPrice -= sameItemExist.price;
        state.totalPrice += action.payload.price;
        state.items = [...existingCategoryItemRemove, action.payload];
      }
    },
    removeToPcBuild: (state, action) => {
      const findProduct = state.items.find(
        (item) => item._id === action.payload
      );

      const existingCategoryItemRemove = state.items.filter(
        (item) => item._id !== action.payload
      );

      state.totalItems -= 1;
      state.totalPrice -= findProduct.price;
      state.items = [...existingCategoryItemRemove];
    },
    completeBuild: (state) => {
      state.totalItems = 0;
      state.totalPrice = 0;
      state.items = [];
    },
  },
});

export const { addToPcBuild, removeToPcBuild, completeBuild } = pcBuildSlice.actions;

export default pcBuildSlice.reducer;
