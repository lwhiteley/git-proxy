import { useQuery } from '@tanstack/react-query';
import { queryKeys } from './users.keys';
import { usersApi } from './users.api';

export function useGetUsers({ enabled = true } = {}) {
  return useQuery({
    enabled,
    select: (response) => response?.data,
    queryKey: queryKeys.users(),
    queryFn: () => {
      return usersApi.find();
    },
  });
}
