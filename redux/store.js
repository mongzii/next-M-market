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
  initialState: {
    id: 3,
    product: "문씨집안자켓",
    price: "20000",
    amount: 2,
  },

  reducers: {
    increasement(state, action) {
      state + action; // 여기서 문제인것 같다.
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
});
