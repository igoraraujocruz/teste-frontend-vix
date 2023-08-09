import { Car } from '../components/Cars/Car';
import { Search } from '../components/Search/Search';
import { Spinner } from '../components/Spinner/Spinner';
import { useCars } from '../services/hooks/useCars';
import { ICar } from '../services/mirage';
import { Container, Content, SearchStyle, SippnerStyle } from './styles';

export default function Home() {
  const { data, isFetching } = useCars();

  return (
    <Container>
      <SearchStyle>
        <Search />
      </SearchStyle>
      {isFetching ? (
        <SippnerStyle>
          <Spinner w="50rem" />
        </SippnerStyle>
      ) : (
        <Content>
          {data.map((car: ICar) => (
            <Car
              key={car.id}
              id={car.id}
              imageUrl={car.imageUrl}
              brand={car.brand}
              model={car.model}
              price={car.price}
              year={car.year}
            />
          ))}
        </Content>
      )}
    </Container>
  );
}
