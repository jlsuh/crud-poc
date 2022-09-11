import './App.css';
import ListPersonComponent from './components/ListPersonComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className='container'>
        <ListPersonComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
