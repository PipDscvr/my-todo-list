import axios from 'axios';
import type {
  TodoParams,
  AddTodoParams,
  UpdateTodoParams,
  RandomTodoParams,
  AllTodosByUserIdParams,
  DeleteTodoParams,
} from './types';
export {
  TodoParams,
  AddTodoParams,
  UpdateTodoParams,
  RandomTodoParams,
  AllTodosByUserIdParams,
  DeleteTodoParams,
};

const BASE_URL = 'https://dummyjson.com';

// Queries
export const getAllTodos = (params?: TodoParams) => {
  return axios
    .get(
      `${BASE_URL}/todos${
        params ? `?limit=${params.limit}&skip=${params.skip}` : ''
      }`,
    )
    .then((res) => res);
};

export const getTodo = (id: number) => {
  return axios.get(`${BASE_URL}/todos/${id}`).then((res) => res);
};

export const getRandomTodo = (params?: RandomTodoParams) => {
  return axios
    .get(`${BASE_URL}/todos/random${params ? `?length=${params.length}` : ''}`)
    .then((res) => res);
};

export const getAllTodosByUserId = (params: AllTodosByUserIdParams) => {
  return axios
    .get(`${BASE_URL}/todos/user/${params.userId}`)
    .then((res) => res);
};

// Mutations
export const addTodo = (params: AddTodoParams) => {
  return axios.post(`${BASE_URL}/todos/add`, params).then((res) => res);
};

export const updateTodo = (params: UpdateTodoParams) => {
  return axios
    .put(`${BASE_URL}/todos/${params.userId}`, {
      completed: params.completed,
    })
    .then((res) => res);
};

export const deleteTodo = (params: DeleteTodoParams) => {
  return axios.delete(`${BASE_URL}/todos/${params.todoId}`).then((res) => res);
};
