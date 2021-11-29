import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Home from './PortfolioContainer/Home/Home';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';



function App() {
  return (
    <div className="App">
      <Home />
      <PortfolioContainer/> 
    </div>
  );
}

export default App;
