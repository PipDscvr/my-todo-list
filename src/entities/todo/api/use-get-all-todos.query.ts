import { useQuery } from '@tanstack/react-query';
import { todosKey } from './keys';
import { getAllTodos, TodoParams } from '@/shared/api/todo';

export const useGetAllTodosQuery = (params: TodoParams) => {
  return useQuery({
    queryKey: [todosKey],
    queryFn: () => getAllTodos(params),
  })
};