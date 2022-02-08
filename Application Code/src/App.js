import {Switch,Route,} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./components/Home/Home";

import "./global.css"

function App() {
  return (
    <>
          <Switch>
            <Route exact path ='/' component={Home} />
            <Route exact path ='/about' component={About} />
            <Route exact path ='/contact' component={Contact} />
            <Route exact path ='/signup' component={Signup} />
            <Route exact path ='/login' component={Login} />
          </Switch>
    </>
  );
}

export default App;
