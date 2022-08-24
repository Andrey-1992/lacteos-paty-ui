import React from 'react';
import './MenuOutProdFabProd.css';
import { NavLink } from 'react-router-dom';

export const MenuOutProdFabProd: React.FC = () => {
  return (
    <div className="menuInProdFabProd">
      <NavLink to="/go-menu-salidas-busqueda-prod-prod">
        <p className='go-menu-salidas-busqueda-prod-admin'>Buscar Reportes</p>
      </NavLink>
      <NavLink to="/go-menu-reportes-salidas-creados-prod-prod">
        <p className='go-menu-salidas-crear-reporte-prod-admin'>Reportes Creados</p>
      </NavLink>
      <NavLink to="/go-main-menu-prod-prod">
        <p className='go-main-menu-prod-admin-btn'>Menu Produccion</p>
      </NavLink>
    </div>
  );
};