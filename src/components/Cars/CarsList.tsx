import { useCars } from '../../services/hooks/useCars';
import { Content } from './styles';

export const CarsList = () => {
  const { data, isLoading, error, isFetching } = useCars();

  return (
    <Content>
      {data?.map(car => (
        <div key={car.id}>
          <h1>{car.model}</h1>
        </div>
      ))}
    </Content>
  );
};
