import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Contacto from './components/Contacto';
import Productos from './components/Productos';
import Inicio from './components/Inicio';
import DetalleItem from './components/DetalleItem';

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        {/* Navar */}
        <div className="btn-group">

          <NavLink exact to='/' className="btn btn-dark" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to='/productos' className="btn btn-dark" activeClassName='active'>
            Productos
          </NavLink>
          <NavLink exact to='/contacto' className="btn btn-dark" activeClassName='active'>
            Contacto
          </NavLink>

        </div>
        <hr/>
        <Switch>
          <Route path='/contacto'>
            <Contacto/>
          </Route>
          <Route path="/productos/:id" exact>
            <DetalleItem />
          </Route>
          <Route path='/productos'>
            <Productos/>
          </Route>
          <Route path='/'>
            <Inicio/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
