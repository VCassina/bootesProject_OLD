import React from "react";
import Routes from "./Routes";
import Header from "./components/Header";
import { useWindowResize } from './helpers/useWindowResize';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function App() {
  useWindowResize();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes />
    </QueryClientProvider>
  );
}

export default App;