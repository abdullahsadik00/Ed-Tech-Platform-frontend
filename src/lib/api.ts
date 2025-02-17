import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add request/response interceptors
api.interceptors.request.use((config) => {
  // Add auth tokens here if needed
  return config;
});
