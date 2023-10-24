import axios from 'axios'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import DisplayCardListItem from './DisplayCardListItem'

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
        console.error('Error fetching movies:', error)
      })
  }, [apiKey, genreId])

  if (loading) return <h3 className="text-xl">Loading...</h3>

  return (
    <ul className="grid grid-cols-5 gap-5 xl:grid-cols-7 2xl:grid-cols-8">
      {trendingMovies.map((movie) => (
        <DisplayCardListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}

DisplayCardList.propTypes = {
  genreId: PropTypes.string.isRequired,
}

export default DisplayCardList
