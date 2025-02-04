import { useMutation } from '@tanstack/react-query';
import { updateTodo, type UpdateTodoParams } from '@/shared/api/todo';

export const useUpdateTodoMutation = () => {
  return useMutation({
    mutationKey: ['update-todo-mutation'],
    mutationFn: (params: UpdateTodoParams) => updateTodo(params),
  });
};
