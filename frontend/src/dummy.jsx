import './App.css'

function dummy() {
  return(
    <>
      <Text display="whats up"/>
      <Text display="hello"/>
    </>
  )
}

function Text({display}){
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}


import './App.css';
import MovieCard from './components/MovieCard.jsx'


function App() {
  const movieNumber = 2;


  return (
    <>
      {movieNumber === 1 ? (
          <MovieCard movie={{ title: "Sivaraman's Film", release_date: "2024" }} />
        ) : (
          <MovieCard movie={{ title: "Shrikar's Film", release_date: "2024" }} />
        )}
    </>
  )

}

export default App



export default dummy
