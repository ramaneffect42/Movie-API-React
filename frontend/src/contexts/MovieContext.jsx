import { createContext, useState, useContext, useEffect } from "react"

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);



    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) {
            try {
                const parsed = JSON.parse(storedFavs);
                setFavorites(parsed);
            } catch (error) {
                console.error("Error parsing favorites from localStorage:", error);
                localStorage.removeItem("favorites");
            }
        }
        setIsLoaded(true);
    }, [])


  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);    

const addToFavorites = (movie) => {
    setFavorites(prev => [...prev, movie]);
}

const removeFromFavorites = (movieID) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieID));
}

const isFavorite = (movieID) => {
    return favorites.some(movie => movie.id === movieID);
}

const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
}

return <MovieContext.Provider value={value}>
    {children}
</MovieContext.Provider>
}

