import { useGetAllTodosQuery } from '@/entities/todo/api/use-get-all-todos.query';
import { Button } from '@/shared/ui/button/Button';
import { format } from 'date-fns';
import { TodoList } from '@/entities/todo/components/TodoList';
import { useState, useEffect } from 'react';
import { TodoDto } from '@/shared/api/todo';

export const Home = () => {
  const [queryParams, setQueryParams] = useState({ limit: 15, skip: 0 });
  const [todos, setTodos] = useState<TodoDto[]>([]);
  const {
    data: todosDto,
    isLoading,
  } = useGetAllTodosQuery(queryParams);

  useEffect(() => {
    if(todosDto)
      setTodos(previousTodos => [...previousTodos, ...todosDto.todos]);
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
        <Button variant="primary" onClick={() => console.log('clicked')}>
          + New Task
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <TodoList todos={todos} />
        )}
      </div>
      <Button
        variant="primary"
        onClick={() =>
          setQueryParams({
            limit: queryParams.limit,
            skip: queryParams.skip + 15,
          })
        }
      >
        Load more tasks
      </Button>
    </div>
  );
};
