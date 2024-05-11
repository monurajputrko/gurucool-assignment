
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import { useTheme } from './Theme/ThemeContext';

function App() {
  
  const { theme } = useTheme();
  
  return (
    <div style={{backgroundColor:theme?"#000000":"#eeeeee"}} className="App">
    <Navbar />
    <br />
    <AllRoutes />
    </div>
  );
}

export default App;
