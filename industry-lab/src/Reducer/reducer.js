import { ADDPRODUCT, DELETEPRODUCT, UPDATEPRODUCT } from "./actionTypes";

export const initialState = {
  cart: [],
};
export default function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADDPRODUCT: {
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }
    case DELETEPRODUCT: {
      const FilteredProds = state.cart.filter((el) => el.id !== payload);
      return {
        ...state,
        cart: [...state.cart, FilteredProds],
      };
    }
    case UPDATEPRODUCT: {
      const MappedProds = state.cart.map((el) => {
        if (el.id === payload) {
          el.quantity++;
          el.price = el.price * el.quantity;
        }
        return el;
      });
      return {
        ...state,
        cart: [...state.cart, MappedProds],
      };
    }
    default: {
      return state;
    }
  }
}
