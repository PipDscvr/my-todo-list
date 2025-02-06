import { useQuery } from '@tanstack/react-query';
import { todoKey } from './keys';
import { getTodo } from '@/shared/api/todo';

export const useGetTodo = (id: number) => {
  return useQuery({
    queryKey: [todoKey, id],
    queryFn: () => getTodo(id),
  });
};
