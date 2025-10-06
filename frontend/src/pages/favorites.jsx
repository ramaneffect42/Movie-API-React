import '../css/favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'


function Favorite(){

    const {favorites} = useMovieContext();
    if (favorites.length > 0){
        return (
            <div className="favorite">
                <h2>Your Favorites</h2>
            <div className="movies-grid">
                    {favorites.map(
                        (movie) => 
                        (
                        <MovieCard movie={movie} key={movie.id} />
                        )
                    )}
                </div>
            </div>
        )
    }
    else{
        return(
        <>
            <div className="favorite-empty">
               <h2>No Favorite Movies Yet</h2> 
               <p>Start Adding Movies to your Favourites and they will appear here</p>
            </div>
        </>
    )
    }
    
}

export default Favorite