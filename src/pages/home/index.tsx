import { Button } from '@/shared/ui/button/Button';
import { format } from 'date-fns';
import { TodoListItem } from '@/entities/todo/components/TodoListItem';
import { useEffect, useState } from 'react';
import { useGetAllTodosQuery } from '@/entities/todo/api/use-get-all-todos.query';
import type { TodoDto } from '@/shared/api/todo';
import { useUpdateTodoMutation } from '@/entities/todo/api/use-update-todo.mutation';
import { useAddTodoMutation } from '@/entities/todo/api/use-add-todo.mutation';
import { useDeleteTodoMutation } from '@/entities/todo/api/use-delete-todo.mutation';
import { Modal } from '@/shared/ui/modal/Modal';
import { NewTodoForm } from '@/entities/todo/components/NewTodoForm';

export const Home = () => {
  const [queryParams, setQueryParams] = useState({ limit: 15, skip: 0 });
  const [todos, setTodos] = useState<TodoDto[]>([]);
  const [totalPages, setTotalPages] = useState<number | undefined>();
  const [showModal, setShowModal] = useState(false);
  const { mutate: updateTodoMutation } = useUpdateTodoMutation();
  const { mutate: addTodoMutation } = useAddTodoMutation();
  const { mutate: deleteTodoMutation } = useDeleteTodoMutation();
  const { data: todosDto, isLoading } = useGetAllTodosQuery(queryParams);

  const onAddTodo = (content: string) => {
    addTodoMutation(
      {
        todo: content,
        completed: false,
      },
      {
        onSuccess: (data) => {
          setTodos((previous) => [data.data, ...previous]);
          setShowModal(false);
        },
      },
    );
  };

  const handleDelete = (id: number) => {
    deleteTodoMutation(
      {
        id,
      },
      {
        onSuccess: () => {
          const newTodos = [...todos];
          const index = newTodos.findIndex((t) => t.id === id);
          if (index !== -1) {
            newTodos.splice(index, 1);
            setTodos(newTodos);
          }
        },
        onError: (error) => {
          throw new Error(error.message);
        },
      },
    );
  };

  const handleMarkAsCompleted = (id: number) => {
    updateTodoMutation(
      {
        id,
        completed: true,
      },
      {
        onSuccess: (data) => {
          setTodos((previous) =>
            previous.map((p) => (p.id === data.id ? data : p)),
          );
        },
        onError: (error) => {
          throw new Error(error.message);
        },
      },
    );
  };

  useEffect(() => {
    if (todosDto) {
      setTotalPages(todosDto.total);
      setTodos((previousTodos) => [...previousTodos, ...todosDto.todos]);
    }
  }, [todosDto]);

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex max-w-2xl w-full justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">My Todo List</h1>
          <span className="text-gray-300">
            {format(new Date(), 'EEEE, wo LLLL')}
          </span>
        </div>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          + New Task
        </Button>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-8">
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              item={todo}
              onMarkAsCompleted={handleMarkAsCompleted}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      {todos.length > 15 && queryParams.skip < todos.length && (
        <Button
          variant="primary"
          onClick={() =>
            totalPages &&
            queryParams.skip <= totalPages &&
            setQueryParams({
              limit: queryParams.limit,
              skip: queryParams.skip + 15,
            })
          }
        >
          Load more tasks
        </Button>
      )}
      {todos.length === 0 && !isLoading && (
        <div className="flex items-center justify-center p-4 bg-white rounded-xl w-full">
          <span className="text-lg">No todos yet, please add a todo</span>
        </div>
      )}
      {showModal && (
        <Modal title="Add new task" onClose={() => setShowModal(false)}>
          <NewTodoForm onSubmit={onAddTodo} />
        </Modal>
      )}
    </div>
  );
};
