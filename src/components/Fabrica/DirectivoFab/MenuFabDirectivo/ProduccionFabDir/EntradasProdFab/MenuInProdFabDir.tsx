import React from 'react';
import './MenuInProdFabDir.css';
import { NavLink } from 'react-router-dom';

export const MenuInProdFabDir: React.FC = () => {
  return (
    <div className="menuInProdFab">
      <NavLink to="/go-menu-entradas-busqueda-prod-dir">
        <p className='go-menu-entradas-busqueda-prod-admin'>Buscar Reporte</p>
      </NavLink>
      <NavLink to="/go-menu-entradas-crear-reporte-prod-dir">
        <p className='go-menu-entradas-crear-reporte-prod-admin'>Crear Reporte</p>
      </NavLink>
      <NavLink to="/go-menu-entradas-crear-nota-prod-dir">
        <p className='go-menu-entradas-crear-nota-prod-admin'>Crear Nota</p>
      </NavLink>
      <NavLink to="/go-main-menu-prod-dir">
        <p className='go-main-menu-prod-admin-btn'>Menu Produccion</p>
      </NavLink>
    </div>
  );
};