import {
  BuildingStorefrontIcon,
  FilmIcon,
  FireIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'

const Navbar = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <header className="flex items-center gap-8 px-8 py-4">
      <FilmIcon className="w-10" role="button" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-grow items-center overflow-hidden rounded-2xl"
      >
        <input
          className="w-full border-none px-4 py-4 leading-tight text-gray-700 focus:outline-none"
          type="text"
          id="search"
          name="search"
          placeholder="Search for movies, TV shows, etc..."
          autoComplete="off"
        />

        <button
          className="bg-amber-500 py-3 pl-2 pr-4 text-sm text-white"
          type="submit"
        >
          <MagnifyingGlassIcon className="w-h-7 h-7" />
        </button>
      </form>

      {/* TODO: Redirects to the Trending Page */}
      <FireIcon className="w-10" role="button" />
      {/* TODO: Redirects to the About Page */}
      <BuildingStorefrontIcon className="w-10" role="button" />
    </header>
  )
}

export default Navbar
