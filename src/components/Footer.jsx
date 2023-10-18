import { HeartIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-8 text-white">
      <div className="flex justify-between">
        <p>Watch Wiz &copy; {new Date().getFullYear()}. All rights reserved.</p>
        <p>
          Made with{' '}
          <HeartIcon className="inline h-6 w-6 animate-pulse fill-amber-500 align-middle" />{' '}
          by Jerry.
        </p>
      </div>
    </footer>
  )
}

export default Footer
