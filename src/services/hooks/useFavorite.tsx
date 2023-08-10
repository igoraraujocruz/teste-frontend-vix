import {
  useEffect,
  useRef,
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { ICar } from '../mirage';
import { api } from '../api';

interface FavoriteProviderProps {
  children: ReactNode;
}

interface FavoriteContextData {
  favorite: ICar[];
  addFavorite: (carId: string) => Promise<void>;
  removeFavorite: (carId: string) => void;
  removeAllFavorites: () => void;
}

const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData,
);

export function FavoriteProvider({
  children,
}: FavoriteProviderProps): JSX.Element {
  const [favorite, setFavorite] = useState<ICar[]>(() => {
    if (typeof window !== 'undefined') {
      const storagedFavorite = localStorage.getItem('vix-teste:favorites');

      if (storagedFavorite) {
        return JSON.parse(storagedFavorite);
      }

      return [];
    }
  });

  const prevFavoriteRef = useRef<ICar[]>();

  useEffect(() => {
    prevFavoriteRef.current = favorite;
  });

  const favoritePreviousValue = prevFavoriteRef.current ?? favorite;

  useEffect(() => {
    if (favoritePreviousValue !== favorite) {
      localStorage.setItem('vix-teste:favorites', JSON.stringify(favorite));
    }
  }, [favorite, favoritePreviousValue]);

  const addFavorite = async (carId: string) => {
    try {
      const updatedFavorites = [...favorite];
      const favoriteExists = updatedFavorites.find(car => car.id === carId);

      if (favoriteExists) {
        console.log('Favorito já existe');
      } else {
        const car = await api.get<ICar>(`/car/${carId}`);

        const newFavorite = {
          ...car.data,
        };

        updatedFavorites.push(newFavorite);
      }

      setFavorite(updatedFavorites);
      console.log('Favorito Add');
    } catch {
      console.log('Favorito erro');
    }
  };

  const removeFavorite = (carId: string) => {
    try {
      const updatedFavorites = [...favorite];
      const favoriteIndex = updatedFavorites.findIndex(car => car.id === carId);

      if (favoriteIndex >= 0) {
        updatedFavorites.splice(favoriteIndex, 1);
        setFavorite(updatedFavorites);
      } else {
        throw Error();
      }
    } catch {
      console.log('Favorito erro');
    }
  };

  const removeAllFavorites = () => {
    setFavorite([]);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorite,
        addFavorite,
        removeFavorite,
        removeAllFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite(): FavoriteContextData {
  const context = useContext(FavoriteContext);

  return context;
}
