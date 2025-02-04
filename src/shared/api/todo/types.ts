export type TodoParams = {
  limit: number;
  skip: number;
};

export type RandomTodoParams = {
  length: number;
};

export type AllTodosByUserIdParams = {
  userId: string;
};

export type AddTodoParams = {
  todo: string;
  completed: boolean;
  userId: number;
};

export type UpdateTodoParams = {
  userId: number;
  completed: boolean;
};

export type DeleteTodoParams = {
  todoId: number;
};
