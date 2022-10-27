import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import {ToastContainer} from 'react-toastify'
import {Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
       <Navbar/>
       <Routes>
          <Route  path='/' element={<Home/>}></Route>
          <Route  path='/cart' element={<Cart/>}></Route>
          <Route  path='*' element={<NotFound/>}></Route>
         
      </Routes>
    </div>
  );
}

export default App;
