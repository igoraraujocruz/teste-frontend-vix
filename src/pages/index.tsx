import { useCars } from '../services/hooks/useCars';

export default function Home() {
  const { data, isLoading, error, isFetching } = useCars();

  return <h1>Hello World</h1>;
}
