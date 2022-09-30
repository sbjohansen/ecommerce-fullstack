import { API_URL } from '../config';
import axios from 'axios';

const initialState = {
  users: [],
  user: {},
  loading: false,
  error: null,
};

const GET_USER = 'GET_USER';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';
const LOADING = 'LOADING';
const ERROR = 'ERROR';

export function getUser(id) {
  return {
    type: GET_USER,
    payload: axios.get(`${API_URL}/users/${id}`),
  };
}

export function createUser(user) {
  return {
    type: CREATE_USER,
    payload: axios.post(`${API_URL}/users`, user),
  };
}

export function updateUser(id, user) {
  return {
    type: UPDATE_USER,
    payload: axios.put(`${API_URL}/users/${id}`, user),
  };
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    payload: axios.delete(`${API_URL}/users/${id}`),
  };
}

export function loading() {
  return {
    type: LOADING,
  };
}

export function error(err) {
  return {
    type: ERROR,
    payload: err,
  };
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER + '_PENDING':
      return { ...state, loading: true };
    case GET_USER + '_FULFILLED':
      return { ...state, user: action.payload.data, loading: false };
    case GET_USER + '_REJECTED':
      return { ...state, error: action.payload, loading: false };
    case CREATE_USER + '_PENDING':
      return { ...state, loading: true };
    case CREATE_USER + '_FULFILLED':
      return { ...state, users: action.payload.data, loading: false };
    case CREATE_USER + '_REJECTED':
      return { ...state, error: action.payload, loading: false };
    case UPDATE_USER + '_PENDING':
      return { ...state, loading: true };
    case UPDATE_USER + '_FULFILLED':
      return { ...state, users: action.payload.data, loading: false };
    case UPDATE_USER + '_REJECTED':
      return { ...state, error: action.payload, loading: false };
    case DELETE_USER + '_PENDING':
      return { ...state, loading: true };
    case DELETE_USER + '_FULFILLED':
      return { ...state, users: action.payload.data, loading: false };
    case DELETE_USER + '_REJECTED':
      return { ...state, error: action.payload, loading: false };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
