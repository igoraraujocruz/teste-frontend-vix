import { useEffect, useState } from 'react';
import { useCars } from '../../services/hooks/useCars';
import { Spinner } from '../Spinner/Spinner';
import { Container, Content, Main, SnipperStyle } from './styles';

export const CarsList = () => {
  const { data, isFetching } = useCars();

  return (
    <Main>
      {isFetching ? (
        <SnipperStyle>
          <Spinner />
        </SnipperStyle>
      ) : (
        <Container>
          {data.map(car => (
            <Content key={car.id}>
              <img src={car.imageUrl} alt="image car" height="250px" />
              <h1>
                {car.brand} - {car.model}
              </h1>
              <h2>{new Date(car.year).getFullYear()}</h2>
              <h2>R$ {car.price}</h2>
            </Content>
          ))}
        </Container>
      )}
    </Main>
  );
};
