import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';
import { Container } from './styles';
import { useFavorite } from '../../services/hooks/useFavorite';

interface IStar {
  size: number;
  carId: string;
}

export const Star = ({ size, carId }: IStar) => {
  const { favorite, addFavorite, removeFavorite } = useFavorite();

  return (
    <Container>
      <IconContext.Provider
        value={{
          color: favorite.filter(fav => fav.id === carId).find(item => item.id)
            ? '#fae100'
            : '#A9A9A9',
          className: 'star',
        }}
      >
        <AiFillStar
          size={size}
          onClick={() => {
            favorite.filter(fav => fav.id === carId).find(item => item.id)
              ? removeFavorite(carId)
              : addFavorite(carId);
          }}
        />
      </IconContext.Provider>
    </Container>
  );
};
