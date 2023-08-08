import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { makeServer } from '../services/mirage';
import GlobalStyle from '../styles/global';

const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
      <GlobalStyle />
    </QueryClientProvider>
  );
}

export default MyApp;
