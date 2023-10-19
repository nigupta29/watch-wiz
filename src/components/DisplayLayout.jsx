import PropTypes from 'prop-types'
import DisplayCardList from './DisplayCardList'

const DisplayLayout = ({ title }) => {
  if (title === '') title = 'trending'
  const modifiedTitle = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <main className="mb-10 px-8 py-4">
      <h2 className="mb-5 text-4xl">{`${modifiedTitle} Movies`}</h2>
      <DisplayCardList />
    </main>
  )
}

DisplayLayout.propTypes = {
  title: PropTypes.string,
}

export default DisplayLayout
