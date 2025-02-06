import { TodoDto } from '@/shared/api/todo';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos }: { todos: TodoDto[] }) => {
  return (
    <div className="flex flex-col gap-8">
      { todos.map((todo) => (
        <TodoListItem key={todo.id} item={todo} />
      ))}
    </div>
  )
};