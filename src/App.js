
import './App.css';
// import Navbar from './components/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import { useTheme } from './Theme/ThemeContext';
import { Navbar } from './components/Test';
import { useMediaQuery } from 'usehoks';

function App() {
  
  const { theme } = useTheme();
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");
  
  return (
    <div style={{backgroundColor:theme?"#000000":"#eeeeee",overflow : isLargeScreen ? "hidden" : ""}} className="App">
    <Navbar />
    <br />
    <AllRoutes />
   
    </div>
  );
}

export default App;
