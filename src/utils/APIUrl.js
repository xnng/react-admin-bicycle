let api;

if (process.env.NODE_ENV === "development") {
  api = process.env.REACT_APP_ROOMS_API_DEV;
} else {
  api = process.env.REACT_APP_ROOMS_API_PROD;
}

export default api;