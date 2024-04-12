import { createSlice, configureStore } from "@reduxjs/toolkit";

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
  initialState: [
    {
      id: 1,
      product: "홍해인자켓",
      price: "20000",
      count: 1,
    },
    {
      id: 6,
      product: "티모시자켓",
      price: "20000",
      count: 1,
    },
  ],
  //initialState를 수정해주는 함수이다
  reducers: {
    //장바구니에서추가, 리스트페이지랑연결
    addcart: (state, action) => {
      //state.push(action.payload);
      const common = state.findIndex(
        el => el.product === action.payload.product
      );
      {
        common === -1 ? state.push(action.payload) : state[common].count++;
      }
    },
    //장바구니에서삭제
    deletecart: (state, action) => {
      state.pop(action.payload);
    },

    countUp: (state, action) => {
      //cart에서 수량 조절하는 것 , 플러스
      state[action.payload].count++;
      //console.log(Item);
    },
    countDown: (state, action) => {
      //cart에서 수량 조절하는 것, 마이너스
      state[action.payload].count--;
    },
  },
});

export const { setLogin, setLogout } = LoginState.actions;
export const { addcart, deletecart, countUp, countDown } = CartState.actions;

export default configureStore({
  reducer: {
    loginState: LoginState.reducer,
    cartState: CartState.reducer,
  },
  devTools: true,
});
