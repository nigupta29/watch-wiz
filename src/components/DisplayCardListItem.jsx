import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const DisplayCardListItem = ({ movie }) => {
  return (
    <li key={movie.id} className="group">
      <div className="relative">
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded-2xl object-cover"
          height={'24rem'}
        />
        <div className="absolute right-2 top-2 rounded-full bg-black bg-opacity-60 px-3 py-2 text-white group-hover:bg-amber-500/80">
          {Number(movie.vote_average).toFixed(1)}
        </div>
      </div>
      <div className="my-2 text-xl font-bold">
        {movie.title.length > 16
          ? `${movie.title.slice(0, 16)}...`
          : movie.title}
      </div>
    </li>
  )
}

DisplayCardListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
}

export default DisplayCardListItem
