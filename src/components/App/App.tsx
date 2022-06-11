import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import { FabricaSelection } from '../Fabrica/FabricaSelection';

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Lacteos Paty Principal</h1>
      <Switch>
          <Route exact path="/fabrica-registro" render={() => <FabricaSelection />}/>
        </Switch>
    </div>
  );
};
