import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Outlet } from '@tanstack/react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../shared/api';

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <div className='relative h-full py-10 w-full max-w-[500px] mx-auto'>
          <Outlet />
        </div>
      </QueryClientProvider>
      <TanStackRouterDevtools />
    </>
  );
};
