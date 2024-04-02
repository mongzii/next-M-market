import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: "snrnsi",
    pw: "123",
  },
};

const LoginState = createSlice({
  name: "login",
  initialState,
  reducers: {
    //로그인한 유저 변경되는게 들어가야한다.
    setLogin: (state, action) => {
      state.email = action.payload;
      state.pw = action.payload;
    },
    setLogout: state => {
      state.email = null;
    },
  },
});

export const { setLogin, setLogout } = LoginState.actions;

export default configureStore({
  reducer: {
    loginState: LoginState.reducer,
  },
});
