import axios from 'axios';
import { getCookie } from '../../utils.jsx';
import { apiBaseUrl } from '../common.js';
import { userSchema } from './users.schema.js';

const config = {
  baseURL: apiBaseUrl,
  withCredentials: true,
};

export const usersApi = {
  find: async (options = {}) => {
    const url = `/v1/user`;

    const response = await axios.get(url.toString(), { ...config, ...options });

    return {
      ...response,
      data: userSchema.array().parse(response.data),
    };
  },
  get: async (id, options = {}) => {
    const url = `/v1/user/${id}`;

    console.log(url);

    const response = await axios.get(url, { ...config, ...options });

    return {
      ...response,
      data: userSchema.parse(response.data),
    };
  },
  profile: async (options = {}) => {
    const url = `/auth/profile`;

    console.log(url);

    await axios.get(url, { ...config, ...options });
  },
  authMetadata: async (options = {}) => {
    const url = `/auth/userLoggedIn`;

    try {
      const response = await axios.get(url.toString(), { ...config, ...options });
      const { data } = response;
      return { ...response, data: { user: data, isAuthenticated: true, isAdmin: data.admin } };
    } catch (error) {
      if (error?.response?.status !== 401) {
        throw error;
      }

      return {
        data: {
          isAuthenticated: false,
          isAdmin: false,
          user: null,
        },
      };
    }
  },
  updateGitAccount: async (data, options = {}) => {
    console.log(data);
    const url = `/auth/gitAccount`;

    return axios.post(url, data, {
      ...config,
      ...options,
      headers: { 'X-CSRF-TOKEN': getCookie('csrf') },
    });
  },
};
