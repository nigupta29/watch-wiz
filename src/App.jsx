import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className="bg-gray-900 tracking-tighter text-white">
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App
