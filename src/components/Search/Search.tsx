import { useEffect, useState } from 'react';
import { Container, Content } from './styles';
import { api } from '../../services/api';
import { ICar } from '../../services/mirage';
import { Spinner } from '../Spinner/Spinner';
import { Star } from '../Star/Star';
import Link from 'next/link';

export const Search = () => {
  const [value, setValue] = useState('');
  const [findedValues, setFindedValues] = useState<ICar[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (value) {
      setIsLoading(true);
      api
        .get(`/cars/${value}`)
        .then(response => {
          setFindedValues(response.data);
        })
        .then(() => {
          setIsLoading(false);
        });
    } else {
      setFindedValues([]);
    }
  }, [value]);

  return (
    <Container>
      <Content>
        <div className="loading">{isLoading && <Spinner w="30rem" />}</div>
        <input
          type="text"
          name="search"
          placeholder="Pesquise por marca, modelo ou ano..."
          onChange={event => {
            setValue(event.target.value);
          }}
        />
        <div className="svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Content>

      {findedValues.length > 0 && (
        <div className="results">
          <div className="button">
            <button
              onClick={() => {
                setFindedValues([]);
              }}
            >
              X
            </button>
          </div>

          {findedValues.map(car => (
            <div key={car.id}>
              <Star carId={car.id} size={32} />
              <Link href={`/car/${car.id}`}>
                <div className="car">
                  <img src={car.imageUrl} alt="image car" width={'170px'} />
                  <div className="description">
                    <h1>
                      {car.brand} - {car.model}
                    </h1>
                    <h2>{car.year}</h2>
                    <h2>R$ {car.price}</h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};
