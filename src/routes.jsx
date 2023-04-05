import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
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