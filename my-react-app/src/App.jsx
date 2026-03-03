import { useEffect } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router'
import HomePage from './HomePage'
import About from './About'
import Varient from './Varient'
import Contact from './Contact'

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/varient" element={<Varient />} />
      </Route>
    </Routes>
  )
}

export default App

const NavBar = () => {
  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex gap-6">
      <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
      <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
      <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
      <Link to="/varient" className="hover:text-blue-400 transition-colors">Varient</Link>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white px-6 py-4 flex gap-6 mt-auto">
      <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
      <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact 3</Link>
    </footer>
  )
}

const Layout = ({ children }) => {

  useEffect(() => {
    console.log("Layout mounted")
    return () => {
      console.log("Layout unmounted")
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <NavBar />
      <main className="flex-1 p-6">
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

// const HomePage = () => {
//   return (
//     <>
//       <h1 className="text-3xl font-bold text-slate-800">welcome</h1>
//       <h1 className="text-3xl font-bold text-slate-800">to HomePage</h1>
//       <h1 className="text-3xl font-bold text-slate-800">pelase explore</h1>
//     </>
//   )
// }

const Page1 = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800">Page 1</h1>
    </>
  )
}

const Page2 = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-800">Page 2</h1>
    </>
  )
}

const Page3 = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-800">Page 3</h1>
    </>
  )
}