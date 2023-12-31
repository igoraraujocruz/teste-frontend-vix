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
import toast, { Toaster } from 'react-hot-toast';

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
        toast.error('Veículo já favoritado!');
      } else {
        const car = await api.get<ICar>(`/car/${carId}`);

        const newFavorite = {
          ...car.data,
        };

        updatedFavorites.push(newFavorite);
      }

      setFavorite(updatedFavorites);
      toast.success('Veículo favoritado!');
    } catch {
      toast.error('Ocorreu um erro...');
    }
  };

  const removeFavorite = (carId: string) => {
    try {
      const updatedFavorites = [...favorite];
      const favoriteIndex = updatedFavorites.findIndex(car => car.id === carId);

      if (favoriteIndex >= 0) {
        updatedFavorites.splice(favoriteIndex, 1);
        setFavorite(updatedFavorites);
        toast.success('Veículo removido dos favoritados');
      } else {
        throw Error();
      }
    } catch {
      toast.error('Ocorreu um error');
    }
  };

  const removeAllFavorites = () => {
    setFavorite([]);
    toast.success('Todos os veículos foram removidos dos favoritados');
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
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite(): FavoriteContextData {
  const context = useContext(FavoriteContext);

  return context;
}
