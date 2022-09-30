import { API_URL } from '../config';
import axios from 'axios';

//Selectors

export const getCategories = ({ categories }) => categories.data;
export const getRequest = ({ categories }) => categories.request;

//Actions

const reducerName = 'categories';
const createActionName = (name) => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_CATEGORIES = createActionName('LOAD_CATEGORIES');

export const loadCategories = (payload) => ({ payload, type: LOAD_CATEGORIES });

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

//THUNKS

export const loadCategoriesRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/categories`);
      dispatch(loadCategories(res.data));
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
    case LOAD_CATEGORIES:
      return { ...statePart, data: action.payload };
    default:
      return statePart;
  }
}
