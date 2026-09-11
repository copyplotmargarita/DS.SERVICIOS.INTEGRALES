import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingLimpieza } from './pages/LandingLimpieza';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingLimpieza />} />
      </Routes>
    </Router>
  );
}

export default App;
