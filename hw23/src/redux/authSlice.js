import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("regUser"));


const initialState = {
  users: [],
  regUser: savedUser || null,
  authorization: false,
  error: null,
};


const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    register: (state, action) => {
      state.regUser = action.payload;
      localStorage.setItem("regUser", JSON.stringify(action.payload));
      state.error = null;
    },

    logIn: (state, action) => {
      const { email, password } = action.payload;

      if (
        state.regUser &&
        state.regUser.email === email &&
        state.regUser.password === password
      ) {
        state.authorization = true;
        state.error = null;
      } else {
        state.authorization = false;
        state.error = "Authorization failed. Try again";
      }
    },
  
    logOut: (state) => {
      state.authorization = false;
      state.error = null;
    },
  },
});


export default authSlice.reducer;
export const { register, logIn, logOut } = authSlice.actions;
