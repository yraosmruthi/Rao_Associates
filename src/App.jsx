import './App.css'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './Components/Layout'

export const routes = [
 {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
 }
]
