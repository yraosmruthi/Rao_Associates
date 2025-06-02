import { ViteReactSSG } from 'vite-react-ssg'
import './index.css'
import { routes } from './App.jsx';

export const createRoot = ViteReactSSG(
  // react-router-dom data routes
  { routes },
  // function to have custom setups
  ({ router, routes, isClient, initialState }) => {
    // do something.
  },
)
