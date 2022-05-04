/* Creating a store. */
import { configureStore } from "@reduxjs/toolkit";

import projectSlice from "./project-slice";

const store = configureStore({
  reducer: { project: projectSlice.reducer },
});

export default store;
