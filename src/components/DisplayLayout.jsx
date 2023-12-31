import PropTypes from 'prop-types'
import DisplayCardList from './DisplayCardList'

const DisplayLayout = ({ genre }) => {
  let { id, name: title } = genre
  if (title === '') title = 'trending'
  const modifiedTitle = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <main className="mb-10 px-8 py-4">
      <h2 className="mb-5 text-4xl font-bold">{`${modifiedTitle} Movies`}</h2>
      <DisplayCardList genreId={String(id)} />
    </main>
  )
}

DisplayLayout.propTypes = {
  genre: PropTypes.object.isRequired,
}

export default DisplayLayout
