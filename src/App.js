import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
