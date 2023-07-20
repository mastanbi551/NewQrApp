import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import Welcome from './pages/welcome';
import Bride from './pages/bride';
import Groom from './pages/groom';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/brideInfo" element={<Bride />} />
          <Route path="/groomInfo" element={<Groom />} />
        </Routes>
    </Router>
  );
}

export default App;
