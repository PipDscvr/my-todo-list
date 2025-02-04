import { useMutation } from '@tanstack/react-query';
import { addTodo, type AddTodoParams } from '@/shared/api/todo';

export const useAddTodoMutation = () => {
  return useMutation({
    mutationKey: ['add-todo-mutation'],
    mutationFn: (params: AddTodoParams) => addTodo(params),
  });
};