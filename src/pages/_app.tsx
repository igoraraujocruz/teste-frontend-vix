import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { makeServer } from '../services/mirage';
import GlobalStyle from '../styles/global';
import dynamic from 'next/dynamic';
import { AuthProvider } from '../services/hooks/useAuth';

const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const DynamicContextProvider = dynamic(
  () =>
    import('../services/hooks/useFavorite').then(mod => mod.FavoriteProvider),
  {
    ssr: false,
  },
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DynamicContextProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
        <ReactQueryDevtools />
        <GlobalStyle />
      </DynamicContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
