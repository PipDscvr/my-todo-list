
import { createRootRoute, createRoute } from '@tanstack/react-router';
import { App } from './App';
import { Todos } from '../pages/todos';
import { Home } from '@/pages/home';

export const rootRoute = createRootRoute({
  component: App,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const todosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/todos',
  component: Todos,
});

export const routes = [homeRoute, todosRoute];