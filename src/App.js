
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavigationsStack from './navigationStack/Allnavigations';



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
