import React from 'react';
import './MenuInProdFab.css';
import { NavLink } from 'react-router-dom';

export const MenuInProdFab: React.FC = () => {
  return (
    <div className="menuInProdFab">
      <NavLink to="/go-menu-entradas-busqueda-prod-admin">
        <p className='go-menu-entradas-busqueda-prod-admin'>Buscar Reporte</p>
      </NavLink>
      <NavLink to="/go-menu-entradas-crear-reporte-prod-admin">
        <p className='go-menu-entradas-crear-reporte-prod-admin'>Crear Reporte</p>
      </NavLink>
      <NavLink to="/go-menu-entradas-crear-nota-prod-admin">
        <p className='go-menu-entradas-crear-nota-prod-admin'>Crear Nota</p>
      </NavLink>
      <NavLink to="/go-main-menu-prod-admin">
        <p className='go-main-menu-prod-admin-btn'>Menu Produccion</p>
      </NavLink>
    </div>
  );
};