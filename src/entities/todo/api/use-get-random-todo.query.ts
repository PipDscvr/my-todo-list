import { useQuery } from '@tanstack/react-query';
import { todoKey } from './keys';
import { getRandomTodo, type RandomTodoParams } from '@/shared/api/todo';

export const useGetRandomTodoQuery = (params?: RandomTodoParams) => {
  return useQuery({
    queryKey: [todoKey, 'random'],
    queryFn: () => getRandomTodo(params),
  })
};