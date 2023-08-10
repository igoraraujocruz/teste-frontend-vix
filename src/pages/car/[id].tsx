import { GetServerSideProps } from 'next';
import { useCar } from '../../services/hooks/useCars';
import { Container, Content } from './styles';
import { Star } from '../../components/Star/Star';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';

interface ICar {
  id: string;
}

export default function CarDetails({ id }: ICar) {
  const { data, isFetching } = useCar({ id });

  return (
    <Container>
      {!isFetching && (
        <Content>
          <Link href={'/'}>
            <div className="linkBack">
              <BiArrowBack size={20} />
              <p>Voltar para tela inicial</p>
            </div>
          </Link>

          <img src={data.imageUrl} alt="car image" width={'325rem'} />
          <Star carId={id} size={30} />
          <h1>
            {data.brand} - {data.model}
          </h1>
          <h2>R$ {data.price}</h2>
          <h2>{data.year}</h2>
          <h3 className="description">{data.description}</h3>
          <h3 className="characteristics">
            Características: {data.characteristics}
          </h3>
        </Content>
      )}
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  return {
    props: { id },
  };
};
