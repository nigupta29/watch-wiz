import PropTypes from 'prop-types'

const DisplayLayout = ({ title }) => {
  const modifiedTitle = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <main className="flex-grow px-8 py-4">
      <h2 className="text-4xl">{`${modifiedTitle} Movies`}</h2>
    </main>
  )
}

DisplayLayout.defaultProps = {
  title: 'trending',
}

DisplayLayout.propTypes = {
  title: PropTypes.string,
}

export default DisplayLayout
