import MovieCard from '../components/MovieCard';
import {useState, useEffect} from 'react';
import {searchMovies, getPopularMovies} from '../services/api';
import '../css/Home.css';

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movie, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch(err){
                console.log(err);
                console.log("Error, something went wrong...");
                setError("Failed to load the Movies...");
            } finally{
                setLoading(false);
            }

        }

        loadPopularMovies();
    }, [])


    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;
        setLoading(true);

        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch(err){
            setError("Failed to search movies...");
            console.log(err);
        } finally{
            setLoading(false);
        }

        setSearchQuery(searchQuery);
    }

    return (
        <>
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                    type="text" 
                    placeholder='Search for Movies...' 
                    className="search-input"
                    value = {searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                <button type="submit" className="search-button">Search</button>
            </form>


            {error && <div className='error-message'>{error}</div>}

            {loading ? ( 
                <div className='loading'>Loading...</div> 
            ) : ( 
                <div className="home">
                <div className="movies-grid">
                    {movie.map(
                        (movie) => 
                        (
                        <MovieCard movie={movie} key={movie.id} />
                        )
                    )}
                </div>
            </div>
            )}
            
            

        </>
    )
}

export default Home