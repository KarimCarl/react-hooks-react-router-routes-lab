import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div className="App">
      {/*{code here}*/}
      <NavBar/>
      <Switch>
        <Route path="/movies" element ={ <Movies/> } />
        <Route path="/directors" element ={ <Directors/> } />
        <Route path="/actors" element ={ <Actors/> } />
        <Route path="/" element ={ <Home/> } />
      </Switch>
    </div>
  )
}

export default App;