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
      state.user = action.payload;
    },
    setLogout: state => {
      state.email = null;
      state.pw = null;
    },
  },
});
const CartState = createSlice({
  name: "cart",
  // initialState: {
  //   value: 0,
  // },
  initialState: {
    value: {
      id: 3,
      product: "나이키핫해",
      count: 1,
    },
  },
  // initialState: 0,

  reducers: {
    increasement: (state, action) => {
      state.value.id = action.payload.id;
      state.value.product = action.payload.product;
      state.value.count = action.payload.count++;
    },
  },
});

export const { setLogin, setLogout } = LoginState.actions;
export const { increasement } = CartState.actions;

export default configureStore({
  reducer: {
    loginState: LoginState.reducer,
    cartState: CartState.reducer,
  },
  devTools: true,
});
