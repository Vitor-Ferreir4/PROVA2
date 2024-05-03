import './App.css';
import Navbar from './js/Navbar';
import Home from './js/home'
import Footer from './js/footer';
import QuemSomos from './js/QuemSomos';
import Contato from './js/Contato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/quemsomos' element={<QuemSomos/>}/>
            <Route path='/contato' element={<Contato/>}/>
          </Routes>
          <Footer/>
        </header>
      </div>
    </Router>
  );
}

export default App;
