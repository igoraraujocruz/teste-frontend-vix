import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';
import { Container } from './styles';
import { useFavorite } from '../../services/hooks/useFavorite';

interface IStar {
  size: number;
  carId: string;
  remove?: boolean;
  color: string;
}

// : remove ? '#fae100' : '#A9A9A9'

export const Star = ({ size, carId, remove = false, color }: IStar) => {
  const { addFavorite, removeFavorite } = useFavorite();

  return (
    <Container>
      <IconContext.Provider value={{ color, className: 'star' }}>
        <AiFillStar
          size={size}
          onClick={() => {
            remove ? removeFavorite(carId) : addFavorite(carId);
          }}
        />
      </IconContext.Provider>
    </Container>
  );
};
