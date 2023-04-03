import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import AboutUs from "./components/AboutUs";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/AboutUs",
    element: <AboutUs />
  },
  {
    path: "/Services",
    element: <Services />
  },
  {
    path: "/Products",
    element: <Products />
  },
  {
    path: "/SignUp",
    element: <SignUp />
  }
]

export default routes