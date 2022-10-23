
import './App.css';
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Gallery from './pages/gallery/Gallery';
import Welcom from './pages/welcome/Welcome';

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<Welcom />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
