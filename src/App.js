import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SinglePlayer from './components/SinglePlayer';
import TwoPlayerBlitz from './components/TwoPlayerBlitz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blitz" element={<TwoPlayerBlitz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
