import { API_URL } from '../config';
import axios from 'axios';

//Selectors

export const getProductsInCart = ({ cart }) => cart.data;
export const getCartRequest = ({ cart }) => cart.request;

//Actions

const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CLEAR_CART = createActionName('CLEAR_CART');

export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });
export const removeFromCart = (payload) => ({ payload, type: REMOVE_FROM_CART });
export const clearCart = (payload) => ({ payload, type: CLEAR_CART });

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

//THUNKS

export const addToCartRequest = (cart) => {
  const { productId, quantity, username } = cart;
  console.log(cart);
  const cartItem = { productId, quantity, username };

  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.post(`${API_URL}/cart/`, cartItem);
      dispatch(addToCart(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadItemsInCartRequest = (username) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/cart`, username);
      dispatch(addToCart(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

//Reducer

export const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: false },
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: false },
      };
    case ADD_TO_CART:
      return { ...statePart, data: action.payload };
    case REMOVE_FROM_CART:
      return { ...statePart, data: action.payload };
    case CLEAR_CART:
      return { ...statePart, data: action.payload };
    default:
      return statePart;
  }
}
