import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import { ToastContainer , Bounce} from "react-toastify"

function Layout() {
  return (
    <div>
        <Nav/>
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
      <Outlet/>
    </div>
  )
}

export default Layout
