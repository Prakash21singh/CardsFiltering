import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../Features/cardSlice";
import { thunk } from "redux-thunk";
export const cardStore = configureStore({
  reducer: cardReducer,
  middleware: (prevMiddleWare) => prevMiddleWare().concat(thunk),
});
