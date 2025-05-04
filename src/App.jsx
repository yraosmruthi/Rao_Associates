import './App.css'
import Nav from './Components/Nav'
import {Route, Routes, useLocation} from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { ToastContainer,Bounce } from 'react-toastify'

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Add some CSS to your App.css
  // body, html, #root { height: 100%; margin: 0; padding: 0; }
  // .full-height { min-height: 100vh; }

  return (
    <div className="relative min-h-screen">
      <Nav />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
        />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      
       </div>
      
    
  )
}

export default App