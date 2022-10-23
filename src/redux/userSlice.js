import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    password: "",
  },
  reducers: {
    save: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { save } = userSlice.actions;
export default userSlice.reducer;
