import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import api from "../service/api.ts";

type Favorites = {
  _id: string;
  jobOffer: string;
  applicant: string;
}[];

type FavContextType = {
  favorites: Favorites | null;
  setFavorites: Dispatch<SetStateAction<Favorites | null>>;
  fetchFavorites: () => void;
  handleDeleteFavorite: (favoriteId: string) => void;
};

export const FavContext = createContext<FavContextType>({
  favorites: null,
  setFavorites: () => {},
  fetchFavorites: () => {},
  handleDeleteFavorite: () => {},
});

type ContextWrapperProps = {
  children: ReactNode;
};

function FavContextWrapper({ children }: ContextWrapperProps) {
  const [favorites, setFavorites] = useState<Favorites | null>(null);

  const fetchFavorites = async () => {
    try {
      const { data } = await api.get("/favorites");
      setFavorites(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteFavorite = async (favoriteId: string) => {
    try {
      await api.delete(`/favorites/${favoriteId}`);
      setFavorites(
        (prevFavorites) =>
          prevFavorites &&
          prevFavorites.filter((favorite) => favorite._id !== favoriteId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FavContext.Provider
      value={{
        favorites,
        setFavorites,
        fetchFavorites,
        handleDeleteFavorite,
      }}
    >
      {children}
    </FavContext.Provider>
  );
}

export default FavContextWrapper;
