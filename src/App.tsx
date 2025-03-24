import { BrowserRouter } from 'react-router-dom';
import Router from './routes/router';
import ContextComponent from './components/context/context';
import './index.css';

function App() {
  return (
    <ContextComponent>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </ContextComponent>    
  )
}

export default App;
