import './App.css';
import Home from './pages/Home';
import Pawpedia from './pages/Pawpedia';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import SignUpForm from "./components/SignUpForm.jsx";
import AboutUs from "./components/AboutUs";
import LogIn from "./components/LogIn.jsx";
import Profile from "./components/Profile.jsx";


const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/pawpedia",
    element: <Pawpedia />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/LogIn",
    element: <LogIn />
  },
  {
    path: "/Profile",
    element: <Profile />
  }, 
  {
    path: "/SignUpForm",
    element: <SignUpForm />
  }
]

export default routes;