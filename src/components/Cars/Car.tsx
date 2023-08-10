import { ICar } from '../../services/mirage';
import { Star } from '../Star/Star';
import { Container, Main } from './styles';
import Link from 'next/link';

export const Car = (car: ICar) => {
  return (
    <Main>
      <Star size={32} />
      <Link key={car.id} href={`/car/${car.id}`}>
        <Container>
          <img src={car.imageUrl} alt="image car" />
          <h1>
            {car.brand} - {car.model}
          </h1>
          <h2>{new Date(car.year).getFullYear()}</h2>
          <h2>R$ {car.price}</h2>
        </Container>
      </Link>
    </Main>
  );
};
