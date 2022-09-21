import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
