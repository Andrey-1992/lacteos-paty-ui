import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { FabricaSelection } from '../Fabrica/FabricaSelection';
import { FabVsDistribucion } from '../FabVsDistribucion/fabVsDistribucion';
import { AdminSignIn } from '../Fabrica/AdminFab/AdminSignIn';
import { MenuFabAdmin } from '../Fabrica/AdminFab/MenuFabAdmin/MenuFabAdmin';
import { ProduccionFabAdmin } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/MenuProdFab/ProduccionFabAdmin';
import { MenuInProdFab } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/EntradasProdFab/MenuInProdFab';
import { BuscarReporteProdAdmin } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/EntradasProdFab/BuscarReporteProdAdmin';
import { CrearNotaProdAdmin } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/EntradasProdFab/CrearNotaProdAdmin';
import { CrearReporteProdAdmin } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/EntradasProdFab/CrearReporteProdAdmin';

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Lacteos Paty Principal</h1>
      <Switch>
        <Route exact path="/" render={() => <FabVsDistribucion />}/>
        <Route exact path="/fabrica-registro" render={() => <FabricaSelection />}/>
        <Route exact path="/go-fad-sign-in" render={() => <AdminSignIn />}/>
        <Route exact path="/go-main-menu-fab-admin" render={() => <MenuFabAdmin />}/>
        <Route exact path="/go-main-menu-prod-admin" render={() => <ProduccionFabAdmin/>}/>
        <Route exact path="/go-menu-entradas-prod-admin" render={() => <MenuInProdFab />}/>
        <Route exact path="/go-menu-entradas-busqueda-prod-admin" render={() => <BuscarReporteProdAdmin />}/>
        <Route exact path="/go-menu-entradas-crear-reporte-prod-admin" render={() => <CrearReporteProdAdmin />}/>
        <Route exact path="/go-menu-entradas-crear-nota-prod-admin" render={() => <CrearNotaProdAdmin />}/>
      </Switch>
    </div>
  );
};
