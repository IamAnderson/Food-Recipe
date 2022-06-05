import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Recipe from './pages/Recipe';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} exact />
          <Route path='/recipe' element={<Recipe />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
