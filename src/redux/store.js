import { configureStore } from "@reduxjs/toolkit";

import { allReducers } from "./slices";

export const store = configureStore({
  reducer: allReducers,
});
