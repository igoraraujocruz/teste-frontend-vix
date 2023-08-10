import { useQuery } from 'react-query';
import { api } from '../api';
import { ICar } from '../mirage';

type Car = Pick<ICar, 'id'>;

export async function getCars(): Promise<ICar[]> {
  const { data } = await api.get('cars');

  const cars = data.cars.map((car: ICar) => {
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

export const getCar = async ({ id }: Car): Promise<ICar> => {
  if (id) {
    const { data } = await api.get(`/car/${id}`);

    return data;
  }
};

export function useCar(id: Car) {
  return useQuery(['car', id], async () => await getCar(id));
}
