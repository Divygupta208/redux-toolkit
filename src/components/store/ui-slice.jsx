import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: {
    notification: {},
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
