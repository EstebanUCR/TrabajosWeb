import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Carrusel from './Components/Pages/Carrusel';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Carrusel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;