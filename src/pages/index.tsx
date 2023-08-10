import { AiFillStar } from 'react-icons/ai';
import { Car } from '../components/Cars/Car';
import { Search } from '../components/Search/Search';
import { Spinner } from '../components/Spinner/Spinner';
import { Star } from '../components/Star/Star';
import { useCars } from '../services/hooks/useCars';
import { ICar } from '../services/mirage';
import { Container, Content, SearchStyle, SippnerStyle } from './styles';
import Link from 'next/link';

export default function Home() {
  const { data, isFetching } = useCars();

  return (
    <Container>
      <SearchStyle>
        <Search />
        <Link href={'/favorites'}>
          <div className="linkMyFavorites">
            <AiFillStar size={32} color="#fae100" />
            <p>Meus Favoritos</p>
          </div>
        </Link>
      </SearchStyle>

      {isFetching ? (
        <SippnerStyle>
          <Spinner w="50rem" />
        </SippnerStyle>
      ) : (
        <Content>
          {data.map((car: ICar) => (
            <div key={car.id}>
              <Star carId={car.id} size={32} />
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
