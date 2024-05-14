
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavigationsStack from './navigationStack/Allnavigations';

//import { AuthContextProvider } from './context/authContext';

function App() {
  return (
    <div>
      
          <BrowserRouter>
             <NavigationsStack/>
          </BrowserRouter>
     
    </div>
  );
}

export default App;
