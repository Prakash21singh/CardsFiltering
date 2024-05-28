import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  value: "",
};

export const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(...action.payload);
    },
    setField: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addCard, setField } = cardSlice.actions;

export default cardSlice.reducer;
