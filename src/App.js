import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import StyleTop from './components/backgroundComponents/StyleTop';
import Footer from './components/Footer/Footer';
import MenuTop from './components/MenuTop/MenuTop';
import Available from './pages/Available/Available';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <StyleTop />
                <MenuTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/available" element={<Available />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
