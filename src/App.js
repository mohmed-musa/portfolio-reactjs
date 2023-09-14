import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout';
import { RouterProvider, createBrowserRouter, Navigate, createHashRouter } from 'react-router-dom';
import About from './Components/About/About';
import Portofolio from './Components/Portofolio/Portofolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import $ from 'jquery';


function App() {

let routers = createHashRouter([
 { path: '', element: <Layout/>, children: [
  {path: '', element: <Home/>},
  {path: 'Home', element:  <Navigate to='/'/>},
  {path: 'About', element: <About/>},
  {path: 'Portofolio', element: <Portofolio/>},
  {path: 'Contact', element: <Contact/>}
 ] },
  {path: '3000', element: <Home/>}
])

  return (
    <>
<RouterProvider router={routers}>
  
  </RouterProvider>    
    </>
   
  );
}

export default App;
