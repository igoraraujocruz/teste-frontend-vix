import { useState } from 'react';
import { useFavorite } from '../../services/hooks/useFavorite';
import { ICar } from '../../services/mirage';
import { Container, Content, SippnerStyle } from './styles';
import { Spinner } from '../../components/Spinner/Spinner';
import { Car } from '../../components/Cars/Car';
import { Star } from '../../components/Star/Star';

export default function Favorites() {
  const { favorite, removeFavorite } = useFavorite();
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      {loading ? (
        <SippnerStyle>
          <Spinner w="50rem" />
        </SippnerStyle>
      ) : (
        <Content>
          {favorite.map((car: ICar) => (
            <div key={car.id}>
              <Star remove carId={car.id} size={32} />
              <Car
                key={car.id}
                id={car.id}
                imageUrl={car.imageUrl}
                brand={car.brand}
                model={car.model}
                price={car.price}
                year={car.year}
              />
            </div>
          ))}
        </Content>
      )}
    </Container>
  );
}
