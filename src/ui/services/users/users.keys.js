/**
 * @see {@link https://tkdodo.eu/blog/effective-react-query-keys}
 */

const base = ['api'];

export const queryKeys = {
  // auth
  auth: (options) => [...base, 'auth', options].filter(Boolean),
  authMetadata: (options) => [...queryKeys.auth(), 'userLoggedIn', options].filter(Boolean),
  profile: (options) => [...queryKeys.auth(), 'profile', options].filter(Boolean),

  // users
  users: (options) => [...base, 'v1/user', options].filter(Boolean),
  user: (id, options) => [...queryKeys.users(), id, options].filter(Boolean),
};
