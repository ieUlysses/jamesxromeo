import "./App.css"
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from './Pages/About/About';


function App() {



  return (

    <div>

      {/*  <NavigationBar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;

/* React-router-dom is now on v6 notable changes exact => exact:true

//useful links:
https://v5.reactrouter.com/web/api/Hooks/useroutematch
https://reactrouter.com/docs/en/v6/upgrading/v5


 <Router>
      <NavigationBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact="true" path="/about">
<About />
      </Route >
    </Router >

*/