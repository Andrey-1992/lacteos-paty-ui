import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { FabricaSelection } from '../Fabrica/FabricaSelection';
import { FabVsDistribucion } from '../FabVsDistribucion/fabVsDistribucion';
import { AdminSignIn } from '../Fabrica/AdminFab/AdminSignIn';
import { ProdSignIn } from '../Fabrica/ProdFab/ProdSignIn';
import { DirSignIn } from '../Fabrica/DirectivoFab/DirSignIn';
import { MenuFabAdmin } from '../Fabrica/AdminFab/MenuFabAdmin/MenuFabAdmin';
import { MenuFabProd } from '../Fabrica/ProdFab/MenuFabProd/MenuFabProd';
import { MenuFabDir } from '../Fabrica/DirectivoFab/MenuFabDirectivo/MenuFabDir';
import { ProduccionFabAdmin } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/MenuProdFab/ProduccionFabAdmin';
import { ProduccionFabProd } from '../Fabrica/ProdFab/MenuFabProd/ProduccionFabProd/MenuProdFab/ProduccionFabProd';
import { ProduccionFabDir } from '../Fabrica/DirectivoFab/MenuFabDirectivo/ProduccionFabDir/MenuProdFab/ProduccionFabDir';
import { MenuInProdFab } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/EntradasProdFab/MenuInProdFab';
import { MenuInProdFabProd } from '../Fabrica/ProdFab/MenuFabProd/ProduccionFabProd/EntradasProdFab/MenuInProdFabProd';
import { MenuInProdFabDir } from '../Fabrica/DirectivoFab/MenuFabDirectivo/ProduccionFabDir/EntradasProdFab/MenuInProdFabDir';
import { MenuOutProdFab } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/SalidasProdFab/MenuOutProdFab';
import { MenuOutProdFabProd } from '../Fabrica/ProdFab/MenuFabProd/ProduccionFabProd/SalidasProdFab/MenuOutProdFabProd';
import { MenuOutProdFabDir } from '../Fabrica/DirectivoFab/MenuFabDirectivo/ProduccionFabDir/SalidasProdFab/MenuOutProdFabDir';
import { BuscarReporteProdAdmin } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/EntradasProdFab/buscarReporteProdAdmin';
import { BuscarReporteOutProdAdmin } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/SalidasProdFab/buscarReporteOutProdAdmin';
import { BuscarReporteProdDir } from '../Fabrica/DirectivoFab/MenuFabDirectivo/ProduccionFabDir/EntradasProdFab/BuscarReporteProdDir';
import { BuscarReporteOutProdProd } from '../Fabrica/ProdFab/MenuFabProd/ProduccionFabProd/SalidasProdFab/buscarReporteOutProdProd';
import { CrearNotaProdAdmin } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/EntradasProdFab/crearNotaProdAdmin';
import { CrearNotaDir } from '../Fabrica/DirectivoFab/MenuFabDirectivo/ProduccionFabDir/EntradasProdFab/CrearNotaProdDir';
import { CrearReporteProdAdmin } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/EntradasProdFab/crearReporteProdAdmin';
import { CrearReporteProdProd } from '../Fabrica/ProdFab/MenuFabProd/ProduccionFabProd/EntradasProdFab/crearReporteProdProd';
import { CrearNotaProdOutAdmin } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/SalidasProdFab/crearNotaProdOutAdmin';
import { ReporteSalidaCreados } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/SalidasProdFab/reporteSalidaCreadosProd';
import { ReporteSalidaCreadosProd } from '../Fabrica/ProdFab/MenuFabProd/ProduccionFabProd/SalidasProdFab/reportesSalidasCreadosProd';


export const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <FabVsDistribucion />}/>
        <Route exact path="/fabrica-registro" render={() => <FabricaSelection />}/>
        <Route exact path="/go-fad-sign-admin-in" render={() => <AdminSignIn />}/>
        <Route exact path="/go-prod-sign-admin-in" render={() => <ProdSignIn />}/>
        <Route exact path="/go-prod-sign-dir-in" render={() => <DirSignIn />}/>
        <Route exact path="/go-main-menu-fab-admin" render={() => <MenuFabAdmin />}/>
        <Route exact path="/go-main-menu-fab-prod" render={() => <MenuFabProd />}/>
        <Route exact path="/go-main-menu-fab-dir" render={() => <MenuFabDir />}/>
        <Route exact path="/go-main-menu-prod-admin" render={() => <ProduccionFabAdmin/>}/>
        <Route exact path="/go-main-menu-prod-prod" render={() => <ProduccionFabProd/>}/>
        <Route exact path="/go-main-menu-prod-dir" render={() => <ProduccionFabDir/>}/>
        <Route exact path="/go-menu-entradas-prod-admin" render={() => <MenuInProdFab />}/>
        <Route exact path="/go-menu-entradas-prod-prod" render={() => <MenuInProdFabProd />}/>
        <Route exact path="/go-menu-entradas-prod-dir" render={() => <MenuInProdFabDir />}/>
        <Route exact path="/go-menu-salidas-prod-admin" render={() => <MenuOutProdFab />}/>
        <Route exact path="/go-menu-salidas-prod-prod" render={() => <MenuOutProdFabProd />}/>
        <Route exact path="/go-menu-salidas-prod-dir" render={() => <MenuOutProdFabDir />}/>
        <Route exact path="/go-menu-entradas-busqueda-prod-admin" render={() => <BuscarReporteProdAdmin />}/>
        <Route exact path="/go-menu-salidas-busqueda-prod-admin" render={() => <BuscarReporteOutProdAdmin />}/>
        <Route exact path="/go-menu-entradas-busqueda-prod-dir" render={() => <BuscarReporteProdDir />}/>
        <Route exact path="/go-menu-salidas-busqueda-prod-prod" render={() => <BuscarReporteOutProdProd />}/>
        <Route exact path="/go-menu-entradas-crear-reporte-prod-admin" render={() => <CrearReporteProdAdmin />}/>
        <Route exact path="/go-menu-entradas-crear-reporte-prod-prod" render={() => <CrearReporteProdProd />}/>
        <Route exact path="/go-menu-reportes-salidas-creados-prod-admin" render={() => <ReporteSalidaCreados />}/>
        <Route exact path="/go-menu-reportes-salidas-creados-prod-prod" render={() => <ReporteSalidaCreadosProd />}/>
        <Route exact path="/go-menu-entradas-crear-nota-prod-admin" render={() => <CrearNotaProdAdmin />}/>
        <Route exact path="/go-menu-entradas-crear-nota-prod-dir" render={() => <CrearNotaDir />}/>
        <Route exact path="/go-menu-salidas-crear-nota-prod-admin" render={() => <CrearNotaProdOutAdmin />}/>
      </Switch>
    </div>
  );
};
