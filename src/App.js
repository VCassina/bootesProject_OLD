import React from "react";
import Routes from "./Routes";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Header />
    <Routes />
    </QueryClientProvider>
  );
}

export default App;