export type TodoDto = {
  id: number;
  todo: string;
  completed: boolean;
};

export type TodosDto = {
  todos: TodoDto[];
  total: number;
  skip: number;
  limit: number;
};

export type TodoParams = {
  limit: number;
  skip: number;
};

export type AddTodoParams = {
  todo: string;
  completed: boolean;
};

export type UpdateTodoParams = {
  id: number;
  completed: boolean;
};

export type DeleteTodoParams = {
  id: number;
};
