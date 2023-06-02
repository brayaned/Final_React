import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Game from './pages/Game/Game';
import Admin from './pages/Admin/Admin';
import Register from './pages/Register/Register';

function App() {

  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/platform/:platform' element={<Game/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
