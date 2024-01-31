import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Whislist from './pages/Whislist';
import "./bootstrap.min.css"


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes> 
      <Route path='/' element={ <Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/whislist' element={<Whislist/>}/>
      </Routes>
    <Footer/>
    
    </div>
  );
}

export default App;
