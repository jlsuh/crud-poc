import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bar from './components/Bar';
import FooterComponent from './components/Footer';
import Table from './components/Table';

function App() {
  return (
    <div>
      <Router>
        <Bar />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Table />} />
            <Route exact path='/persons' element={<Table />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
