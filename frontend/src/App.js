import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bar from './components/Bar';
import FooterComponent from './components/Footer';
import Table from './components/Table';
import CreatePerson from './components/CreatePerson';
import UpdatePerson from './components/UpdatePerson';

function App() {
  return (
    <div>
      <Router>
        <Bar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Table />} />
            <Route path='/persons' element={<Table />} />
            <Route path='/persons/new' element={<CreatePerson />} />
            <Route path='/persons/edit/:id' element={<UpdatePerson />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
