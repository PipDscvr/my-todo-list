import { useState } from "react";
import { Button } from "@/shared/ui/button/Button";

export const NewTodoForm = ({onSubmit}: {onSubmit: (content: string) => void}) => {
  const [content, setContent] = useState('');

  return (
    <div className="flex flex-col gap-3">
      <input
        type="text"
        name="content"
        value={content}
        placeholder="New task"
        className="border border-gray-500/50 p-4 rounded-xl"
        onChange={ (e) => setContent(e.target.value)}
      />
      <Button variant="primary" onClick={() => onSubmit(content)}>
        Add
      </Button>
    </div>
  );
};
