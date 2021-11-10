import './App.css';

import Headers from './components/Header';
import Weather from './pages/Weather';
import Favorites from './pages/Favorites';

import { Routes, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Headers />
      <Routes>
        <Route path="/">
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
  </div>
);

export default App;

