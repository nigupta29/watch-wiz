import { StopCircleIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'

const Sidebar = ({ selectGenre }) => {
  const genreData = {
    genres: [
      {
        id: 28,
        name: 'Action',
      },
      {
        id: 12,
        name: 'Adventure',
      },
      {
        id: 16,
        name: 'Animation',
      },
      {
        id: 35,
        name: 'Comedy',
      },
      {
        id: 80,
        name: 'Crime',
      },
      {
        id: 99,
        name: 'Documentary',
      },
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 10751,
        name: 'Family',
      },
      {
        id: 14,
        name: 'Fantasy',
      },
      {
        id: 36,
        name: 'History',
      },
      {
        id: 27,
        name: 'Horror',
      },
      {
        id: 10402,
        name: 'Music',
      },
      {
        id: 9648,
        name: 'Mystery',
      },
      {
        id: 10749,
        name: 'Romance',
      },
      {
        id: 878,
        name: 'Science Fiction',
      },
      {
        id: 10770,
        name: 'TV Movie',
      },
      {
        id: 53,
        name: 'Thriller',
      },
      {
        id: 10752,
        name: 'War',
      },
      {
        id: 37,
        name: 'Western',
      },
    ],
  }

  return (
    <aside className="max-w-xs px-8 py-4">
      <ul className="flex flex-col gap-3">
        {genreData.genres.map((genre) => (
          <li
            key={genre.id}
            className="group flex cursor-pointer gap-1"
            onClick={() => selectGenre(genre.name)}
          >
            <StopCircleIcon className="h-7 w-7 group-hover:animate-spin" />
            <h4 className="text-lg group-hover:ml-1 group-hover:text-amber-500">
              {genre.name}
            </h4>
          </li>
        ))}
      </ul>
    </aside>
  )
}
Sidebar.propTypes = {
  selectGenre: PropTypes.func.isRequired,
}

export default Sidebar
