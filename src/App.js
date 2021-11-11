import './App.css';

import Headers from './components/Header';
import Weather from './pages/Weather';
import Favorites from './pages/Favorites';

import { Routes, Route } from 'react-router-dom';
import NoPage from './components/NoPage';

const App = () => (
  <div>
    <Headers />
      <Routes>
        <Route>
          <Route path="/" element={<Weather />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="*" element={
            <div>
              <NoPage/>
              </div>
          } />
        </Route>
      </Routes>
  </div>
);

export default App;

