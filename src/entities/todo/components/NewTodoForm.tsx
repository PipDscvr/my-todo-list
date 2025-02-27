import { useState } from "react";

export const NewTodoForm = ({onSubmit}: {onSubmit: (content: string) => void}) => {
  const [content, setContent] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(content)
    }} className="flex flex-col gap-3">
      <input
        type="text"
        name="content"
        value={content}
        placeholder="New task"
        className="border border-gray-500/50 p-4 rounded-xl"
        onChange={ (e) => setContent(e.target.value)}
      />
      <button type="submit" className="flex gap-2 items-center justify-center p-2.5 rounded-lg cursor-pointer primary">
        Add
      </button>
    </form>
  );
};
