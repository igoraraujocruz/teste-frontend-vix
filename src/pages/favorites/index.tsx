import { useFavorite } from '../../services/hooks/useFavorite';
import { ICar } from '../../services/mirage';
import { CenterDiv, Container, Content } from './styles';
import { Car } from '../../components/Cars/Car';
import { Star } from '../../components/Star/Star';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';

export default function Favorites() {
  const { favorite } = useFavorite();

  return (
    <Container>
      <CenterDiv>
        <Link href={'/'}>
          <div className="linkBack">
            <BiArrowBack size={20} />
            <p>Voltar para tela inicial</p>
          </div>
        </Link>
      </CenterDiv>

      {favorite.length === 0 ? (
        <CenterDiv>
          <p>Nenhum veículo adicionado aos favoritos</p>
        </CenterDiv>
      ) : (
        <Content>
          {favorite.map((car: ICar) => (
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
