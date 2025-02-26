import classNames from 'classnames';
import { Button } from '@/shared/ui/button/Button';
import type { TodoDto } from '@/shared/api/todo';

export const TodoListItem = ({ item, onMarkAsCompleted, onDelete }: { item: TodoDto, onMarkAsCompleted: (id: number) => void, onDelete: (id: number) => void }) => {
  return (
    <div className="flex items-center bg-white rounded-xl p-4 gap-5">
      <div className="flex gap-4 items-center flex-1">
        <span
          className={classNames('text-md', { 'line-through': item.completed })}
        >
          {item.todo}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {!item.completed && (
          <Button variant="success" size="x-small" onClick={() => onMarkAsCompleted(item.id)}>
            Mark as completed
          </Button>
        )}
        {item.completed && (
          <Button variant="primary" size="x-small" onClick={() => onDelete(item.id)}>Delete</Button>
        )}
      </div>
    </div>
  );
};
