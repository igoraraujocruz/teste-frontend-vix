import { useEffect, useState } from 'react';
import { Container, Content } from './styles';
import { api } from '../../services/api';
import { ICar } from '../../services/mirage';

export const Search = () => {
  const [value, setValue] = useState('');
  const [findedValues, setFindedValues] = useState<ICar[]>([]);

  useEffect(() => {
    if (value) {
      api.get(`/cars/${value}`).then(response => {
        setFindedValues(response.data);
      });
    }
  }, [value]);

  return (
    <Container>
      <Content>
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
          {findedValues.map(car => (
            <div key={car.id} className="car">
              <img src={car.imageUrl} alt="image car" width={'170px'} />
              <div className="description">
                <h1>
                  {car.brand} - {car.model}
                </h1>
                <h2>{new Date(car.year).getFullYear()}</h2>
                <h2>R$ {car.price}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};
