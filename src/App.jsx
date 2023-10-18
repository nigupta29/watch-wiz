import { useState } from 'react'
import DisplayLayout from './components/DisplayLayout'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  const [genre, setGenre] = useState('')

  return (
    <div className="bg-gray-900 tracking-tighter text-white">
      <Navbar />
      <div className="flex">
        <Sidebar selectGenre={setGenre} />
        <DisplayLayout title={genre} />
      </div>
      <Footer />
    </div>
  )
}

export default App
