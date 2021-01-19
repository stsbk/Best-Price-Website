import './App.css';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home';
import Services from './Components/Pages/Services/Services';
import Products from './Components/Pages/Products/Products';
import SignUp from './Components/Pages/SignUp/SignUp';
import Footer from "./Components/Pages/Footer/Footer";

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' exact component={Services} />
            <Route path='/products' exact component={Products} />
            <Route path='/sign-up' exact component={SignUp} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
