import './App.css';
import Navbarcomponent from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Entertainment from './components/Entertainment.jsx'


function App() {
  return (
    <div className="App">
      <Navbarcomponent/>
      <Entertainment/>
    </div>
  );
}

export default App;
