
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './index.css';
import CoinPage from './pages/CoinPage';


function App() {

 
  return (
    <BrowserRouter>
    <div style={{
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    }}>
        <Header />

        <Route exact  path="/" component={ Home} />
         <Route exact path="/coins/:id" component={ CoinPage } />
      </div>
    </BrowserRouter>
  );
}

export default App;
