import type { TodoDto } from '@/shared/api/todo';
import classNames from 'classnames';

export const TodoListItem = ({ item }: { item: TodoDto }) => {
  return (
    <div className="flex justify-between bg-white rounded-xl p-4">
      <div className="flex gap-4 items-center">
        <span>{item.id}</span>
        <span className={classNames('text-md', { 'line-through': item.completed})}>{item.todo}</span>
      </div>
      { item.completed && <span className="text-sm text-gray-500">Completed</span> }
    </div>
  );
};