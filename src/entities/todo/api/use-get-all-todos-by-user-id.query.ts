import { useQuery } from '@tanstack/react-query';
import { todosKey } from './keys';
import { getAllTodosByUserId, type AllTodosByUserIdParams } from '@/shared/api/todo';

export const useGetAllTodosByUserIdQuery = (params: AllTodosByUserIdParams) => {
  return useQuery({
    queryKey: [todosKey, 'by-user-id', params.userId],
    queryFn: () => getAllTodosByUserId(params),
 });
};