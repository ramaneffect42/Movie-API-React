const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_API_KEY;
const PROXY_URL = "https://api.allorigins.win/raw?url=";

export const getPopularMovies = async () => {
    const response = await fetch(
        `${PROXY_URL}${encodeURIComponent(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)}`
    );
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(
        `${PROXY_URL}${encodeURIComponent(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)}`
    );
    const data = await response.json();
    return data.results;
}