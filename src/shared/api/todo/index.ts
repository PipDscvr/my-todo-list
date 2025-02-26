import axios from 'axios';
import type {
  TodoParams,
  AddTodoParams,
  UpdateTodoParams,
  DeleteTodoParams,
  TodosDto,
  TodoDto,
} from './types';
export {
  TodosDto,
  TodoDto,
  TodoParams,
  AddTodoParams,
  UpdateTodoParams,
  DeleteTodoParams,
};

const BASE_URL = 'http://localhost:3000';

// Queries
export const getAllTodos = (params?: TodoParams) => {
  return axios
    .get<TodosDto>(
      `${BASE_URL}/todos${
        params ? `?limit=${params.limit}&skip=${params.skip}` : ''
      }`,
    )
    .then((res) => res.data);
};

export const getTodo = (id: number) => {
  return axios.get(`${BASE_URL}/todos/${id}`).then((res) => res);
};

// Mutations
export const addTodo = (params: AddTodoParams) => {
  return axios.post(`${BASE_URL}/todos/add`, params).then((res) => res);
};

export const updateTodo = (params: UpdateTodoParams) => {
  return axios
    .put(`${BASE_URL}/todos/${params.id}`, {
      completed: params.completed,
    })
    .then((res) => res.data);
};

export const deleteTodo = (params: DeleteTodoParams) => {
  return axios.delete(`${BASE_URL}/todos/${params.id}`).then((res) => res);
};
