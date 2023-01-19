import { ADDPRODUCT, DELETEPRODUCT, UPDATEPRODUCT } from "./actionTypes";

export const ADD = (pay) => {
  return {
    type: ADDPRODUCT,
    payload: pay,
  };
};

export const UPDATE = (pay) => {
  return {
    type: UPDATEPRODUCT,
    payload: pay,
  };
};

export const DELETE = (pay) => {
  return {
    type: DELETEPRODUCT,
    payload: pay,
  };
};
