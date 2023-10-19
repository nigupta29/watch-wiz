import axios from 'axios'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const DisplayCardList = ({ genreId }) => {
  const [loading, setLoading] = useState(true)
  const [trendingMovies, setTrendingMovies] = useState([])

  const apiKey = import.meta.env.VITE_API_KEY
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${apiKey}` },
    }

    let apiUrl = ''

    if (genreId === 'trending') {
      apiUrl = `https://api.themoviedb.org/3/trending/movie/week?page=1`
    } else {
      apiUrl = `https://api.themoviedb.org/3/discover/movie?page=1&with_genres=${genreId}`
    }

    setLoading(true)
    axios
      .get(apiUrl, config)
      .then((response) => {
        const trendingMovies = response.data.results
        setTrendingMovies(trendingMovies)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching trending movies:', error)
      })
  }, [apiKey, genreId])

  if (loading) return <h3 className="text-xl">Loading...</h3>

  return (
    <ul className="grid grid-cols-4 gap-5 xl:grid-cols-6 2xl:grid-cols-7">
      {trendingMovies.map((movie) => (
        <li key={movie.id}>
          <div className="mb-2">
            <img
              className="w-full rounded-2xl"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="text-xl font-bold">{movie.title}</div>
        </li>
      ))}
    </ul>
  )
}

DisplayCardList.propTypes = {
  genreId: PropTypes.string.isRequired,
}

export default DisplayCardList
