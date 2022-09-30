export const API_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8000/api/v1';
export const IMGS_URL =
  process.env.NODE_ENV === 'production' ? '/uploads/' : 'http://localhost:8000/uploads/';
