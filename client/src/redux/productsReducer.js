import { API_URL } from '../config';
import axios from 'axios';

//Selectors

export const getProducts = ({ products }) => products.data;
export const getRequest = ({ products }) => products.request;
export const getAllCategories = ({ products }) => {
  const categories = products.data.map((product) => product.category);
  return [...new Set(categories)];
};

export const getProductsByCategory = ({ products }, category) => {
  return products.data.filter((product) => product.category === category);
};

export const getProductById = ({ products }, id) => {
  return products.data.find((product) => product._id === id);
};

//Actions

const reducerName = 'products';
const createActionName = (name) => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

//THUNKS

export const loadProductsRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));
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

  categories: [],
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: null },
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
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };
    default:
      return statePart;
  }
}
