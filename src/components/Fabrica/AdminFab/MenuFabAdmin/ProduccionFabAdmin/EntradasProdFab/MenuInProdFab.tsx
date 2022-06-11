import React from 'react';
import './MenuInProdFab.css';
import { NavLink } from 'react-router-dom';

export const MenuInProdFab: React.FC = () => {
  return (
    <div className="menuInProdFab">
      <NavLink className='go-menu-entradas-busqueda-prod-admin' to="/go-menu-entradas-busqueda-prod-admin">
        <p>Buscar Reporte</p>
      </NavLink>
      <NavLink className='go-menu-entradas-crear-reporte-prod-admin' to="/go-menu-entradas-crear-reporte-prod-admin">
        <p>Crear Reporte</p>
      </NavLink>
      <NavLink className='go-menu-entradas-crear-nota-prod-admin' to="/go-menu-entradas-crear-nota-prod-admin">
        <p>Crear Nota</p>
      </NavLink>
      <NavLink className='go-main-menu-prod-admin' to="/go-main-menu-prod-admin">
        <p>Menu Produccion</p>
      </NavLink>
    </div>
  );
};