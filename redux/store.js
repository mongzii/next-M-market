import { productData } from "@/util/productData";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

//const Item = productData.cartItem;

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
  // initialState: {
  //   //처음 state
  //   // value: {
  //   //   id: null,
  //   //   product: "",
  //   //   price: 0,
  //   //   count: 0,
  //   // },
  //   value: {
  //     id: 1,
  //     product: "홍해인자켓",
  //     price: "20000",
  //     count: 1,
  //   },
  // },
  //initialState: "kim",
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
    //리스트에서 장바구니버튼 누르면 cart에 추가되는 기능v
    addcart: (state, action) => {
      //console.log(action.payload);
      // state.push({
      //   id: action.payload.id,
      //   product: action.payload.product,
      //   price: action.payload.price,
      //   count: 1,
      // });
      state.push(action.payload);
    },
    countUp: (state, action) => {
      //cart에서 수량 조절하는 것 , 플러스
      // state.value.count = action.payload.count++;
      // state.value.count += 1;
      //console.log(action.payload.product);
      // console.log(Item); //이걸 순회해서 product명이 같은것만 count를 올리자
      //---------------원래되던부분-------
      // for (let i = 0; i < Item.length; i++) {
      //   if (Item[i].product === action.payload.product) {
      //     // state.value.count = Item[i].count + 1;
      //     Item[i].count += 1;
      //     // console.log(Item[i]);
      //   }
      // }
      //action.payload.count += 1;
      //state[0].count++;
      state[action.payload].count++;
      //console.log(Item);
    },
    countDown: (state, action) => {
      //cart에서 수량 조절하는 것, 마이너스
      // for(let i=0; i<Item.length; i++){
      //   if()
      // }
      //console.log(action.payload.product); //여기에 클릭한 값이 뜬다
      // for (let i = 0; i < Item.length; i++) {
      //   if (Item[i].product === action.payload.product) {
      //     Item[i].count -= 1;
      //     // console.log(Item[i]);
      //   }
      // }
      //Item[i].count -= 1; //이렇게하면 어떻게되는지 일단 테스트해보자
    },
    // decreasement: (state, action) => {
    //   if (state.merchandise.product === action.payload.product) {
    //     state.merchandise.count = action.payload.count--;
    //   }
    // },
  },
});

export const { setLogin, setLogout } = LoginState.actions;
export const { addcart, countUp, countDown } = CartState.actions;

export default configureStore({
  reducer: {
    loginState: LoginState.reducer,
    cartState: CartState.reducer,
  },
  devTools: true,
});
