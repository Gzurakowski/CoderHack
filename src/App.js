import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import IniciarSesion from './Components/IniciarSesion/IniciarSesion'
import Home from './Components/Home/Home';
import Chosen from './Components/Chosen/Chosen';
import Registro from './Components/Registro/Registro';
import Footer from './Components/Footer/Footer';
import Holdup from './Components/Holdup/Holdup';
import Reto from './Components/Reto/Reto'


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chosen" component={Chosen} />
          <Route path="/logIn" component={IniciarSesion} />
          <Route path="/register" component={Registro} />
          <Route path="/holdUp" component={Holdup} />
          <Route path="/reto" component={Reto} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
