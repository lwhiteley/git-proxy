const baseUrl = import.meta.env.VITE_API_URI
  ? `${import.meta.env.VITE_API_URI}`
  : `${location.origin}`;

const apiBaseUrl = `${baseUrl}/api`;

export { baseUrl, apiBaseUrl };

console.log({ apiBaseUrl });
