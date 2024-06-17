import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
