import logo from './logo.svg';
import './App.css';
import HomeLight from './components/HomeLight';
import AboutLight from './components/AboutLight';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
    <HomeLight />
    </div>
  );
}

export default App;
