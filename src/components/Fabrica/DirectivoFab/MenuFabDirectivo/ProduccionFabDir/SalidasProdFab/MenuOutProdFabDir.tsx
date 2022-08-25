import React from 'react';
import './MenuOutProdFabDir.css';
import { NavLink } from 'react-router-dom';

export const MenuOutProdFabDir: React.FC = () => {
  return (
    <div className="menuInProdFab">
      <NavLink to="/go-menu-salidas-busqueda-prod-admin">
        <p className='go-menu-salidas-busqueda-prod-admin'>Buscar Reportes</p>
      </NavLink>
      <NavLink to="/go-menu-reportes-salidas-creados-prod-admin">
        <p className='go-menu-salidas-crear-reporte-prod-admin'>Reportes Creados</p>
      </NavLink>
      <NavLink to="/go-menu-salidas-crear-nota-prod-admin">
        <p className='go-menu-salidas-crear-nota-prod-admin'>Crear Nota</p>
      </NavLink>
      <NavLink to="/go-main-menu-prod-admin">
        <p className='go-main-menu-prod-admin-btn'>Menu Produccion</p>
      </NavLink>
    </div>
  );
};