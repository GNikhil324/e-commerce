import Navbar from './components/navbar'
import {Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     <Navbar/>
     <Outlet/>
    </>
  )
}

export default App
