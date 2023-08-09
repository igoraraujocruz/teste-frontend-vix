import { ICar } from '../../services/mirage';
import { Container } from './styles';

export const Car = (car: ICar) => {
  return (
    <Container key={car.id}>
      <img src={car.imageUrl} alt="image car" height="250px" />
      <h1>
        {car.brand} - {car.model}
      </h1>
      <h2>{new Date(car.year).getFullYear()}</h2>
      <h2>R$ {car.price}</h2>
    </Container>
  );
};
