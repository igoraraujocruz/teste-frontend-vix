import { useQuery } from 'react-query';
import { api } from '../api';
import { Car } from '../mirage';

export async function getCars(): Promise<Car[]> {
  const { data } = await api.get('cars');

  const cars = data.cars.map((car: Car) => {
    return {
      id: car.id,
      imageUrl: car.imageUrl,
      brand: car.brand,
      model: car.model,
      year: car.year,
      price: car.price,
    };
  });

  return cars;
}

export function useCars() {
  return useQuery('cars', getCars, {
    staleTime: 1000 * 5,
  });
}
