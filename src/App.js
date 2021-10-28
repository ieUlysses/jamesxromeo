import "./App.css"
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from './Componants/NavigationBar/NavigationBar';
import About from './Pages/About/About';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </Router>
  );
}

export default App;
