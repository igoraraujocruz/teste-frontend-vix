import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';
import { Container } from './styles';

interface IStar {
  size: number;
}

export const Star = ({ size }: IStar) => {
  return (
    <Container>
      <IconContext.Provider value={{ color: '#A9A9A9', className: 'star' }}>
        <AiFillStar size={size} />
      </IconContext.Provider>
    </Container>
  );
};
