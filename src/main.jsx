import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import './index.css'
import ContactUs from './components/ContactUs.jsx';
import Home from './components/Home.jsx';
import ProductDetails from './components/Product/ProductDetails.jsx';
import Custom404 from './components/Custom404/Custom404.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<ContactUs />} />
       <Route path="/product/:productId" element={<ProductDetails />} />
       <Route path="*" element={<Custom404/>}/>
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
