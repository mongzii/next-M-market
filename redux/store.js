import { productData } from "@/util/productData";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const Item = productData.cartItem;

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
      //리스트에서 장바구니버튼 누르면 cart에 추가되는 기능
      //state = action.payload;
      //디스패치에 있는 값에 따라 조절이된다.
      // state.value.id = action.payload.id;
      // state.value.product = action.payload.product;
      // state.value.price = action.payload.price;
      // state.value.count = action.payload.count++;

      //id와 product명이 맞으면 +1하고 그게 아니면 =1하자. 아니다 이건 그냥 +하는거니까 +하자.
      if (state.value.product === action.payload.product) {
        state.value.count = action.payload.count++;
      } else {
        Item.push({
          id: action.payload.id,
          product: action.payload.product,
          price: action.payload.price,
          count: 1,
        });
      }
    },
    countUp: (state, action) => {
      //cart에서 수량 조절하는 것 , 플러스
      // state.value.count = action.payload.count++;
      // state.value.count += 1;
      //console.log(action.payload.product);
      // console.log(Item); //이걸 순회해서 product명이 같은것만 count를 올리자
      for (let i = 0; i < Item.length; i++) {
        if (Item[i].product === action.payload.product) {
          // state.value.count = Item[i].count + 1;
          Item[i].count += 1;
        }
      }
    },
    countDown: (state, action) => {
      //cart에서 수량 조절하는 것, 마이너스
    },
    // decreasement: (state, action) => {
    //   if (state.merchandise.product === action.payload.product) {
    //     state.merchandise.count = action.payload.count--;
    //   }
    // },
  },
});

export const { setLogin, setLogout } = LoginState.actions;
export const { addcart, countUp } = CartState.actions;

export default configureStore({
  reducer: {
    loginState: LoginState.reducer,
    cartState: CartState.reducer,
  },
  devTools: true,
});
