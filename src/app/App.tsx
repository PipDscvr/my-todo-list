import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../shared/api";

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <div className="bg-gray-500">
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold">Hello World!</h1>
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
};

export default App;
