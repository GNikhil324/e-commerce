import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import './index.css'
import ContactUs from './components/contactUs.jsx';
import Home from './components/home.jsx';
import ProductDetails from './components/Product/ProductDetails.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<ContactUs />} />
       <Route path="/product/:productId" element={<ProductDetails />} />
      {/* <Route path='about' element={<About />} />/
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
