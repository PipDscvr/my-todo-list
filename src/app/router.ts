
import { createRootRoute, createRoute } from '@tanstack/react-router';
import { App } from './App';
import { Home } from '@/pages/home';

export const rootRoute = createRootRoute({
  component: App,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

export const routes = [homeRoute];