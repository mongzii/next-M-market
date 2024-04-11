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
    //처음 state
    value: {
      id: null,
      product: "",
      price: 0,
      count: 0,
    },
    // value: {
    //   id: 3,
    //   product: "내가누구게",
    //   count: 3,
    // },
  },
  //initialState: "kim",

  reducers: {
    addcart: (state, action) => {
      //state = action.payload;
      //디스패치에 있는 값에 따라 조절이된다.
      state.value.id = action.payload.id;
      state.value.product = action.payload.product;
      state.value.price = action.payload.price;
      state.value.count = action.payload.count++;
      // state.merchandise.id = action.payload.id;
      //state.value = action.payload.product;
      // state.merchandise.count += 1;
      //id와 product명이 맞으면 +1하고 그게 아니면 =1하자. 아니다 이건 그냥 +하는거니까 +하자.
    },
    decreasement: (state, action) => {
      if (state.merchandise.product === action.payload.product) {
        state.merchandise.count = action.payload.count--;
      }
    },
  },
});

export const { setLogin, setLogout } = LoginState.actions;
export const { addcart, decreasement } = CartState.actions;

export default configureStore({
  reducer: {
    loginState: LoginState.reducer,
    cartState: CartState.reducer,
  },
  devTools: true,
});
