import { Car } from '../components/Cars/Car';
import { Spinner } from '../components/Spinner/Spinner';
import { useCars } from '../services/hooks/useCars';
import { ICar } from '../services/mirage';
import { Container } from './styles';

export default function Home() {
  const { data, isFetching } = useCars();

  return (
    <Container>
      <h1>teste</h1>
      {isFetching ? (
        <Spinner />
      ) : (
        data.map((car: ICar) => (
          <Car
            key={car.id}
            id={car.id}
            imageUrl={car.imageUrl}
            brand={car.brand}
            model={car.model}
            price={car.price}
            year={car.year}
          />
        ))
      )}
    </Container>
  );
}
