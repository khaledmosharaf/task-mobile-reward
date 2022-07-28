import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import PointReward from './pages/PointReward/PointReward';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="reward" element={<PointReward />} />
      </Routes>
    </div>
  );
}

export default App;
