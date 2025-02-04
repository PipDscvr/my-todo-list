import { useMutation } from '@tanstack/react-query';
import { deleteTodo, type DeleteTodoParams } from '@/shared/api/todo';

export const useDeleteTodoMutation = () => {
  return useMutation({
    mutationKey: ['delete-todo-mutation'],
    mutationFn: (params: DeleteTodoParams) => deleteTodo(params),
  });
};