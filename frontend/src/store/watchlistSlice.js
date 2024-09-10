import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    handleAddcoin(state, action) {
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    },
    handleremovecoin(state, action) {
      const getIndex = (element, array) =>
        array.findIndex(
          (obj) => JSON.stringify(obj) === JSON.stringify(element)
        );
      const indexOfRemoveingCoin = getIndex(action.payload, state);
      return state.slice(0, indexOfRemoveingCoin);
    },
  },
});

export const { handleAddcoin, handleremovecoin } = watchlistSlice.actions;
export default watchlistSlice.reducer;
