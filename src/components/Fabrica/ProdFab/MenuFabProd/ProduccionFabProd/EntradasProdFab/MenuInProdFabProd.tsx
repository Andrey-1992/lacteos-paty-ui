import React from 'react';
import './MenuInProdFabProd.css';
import { NavLink } from 'react-router-dom';

export const MenuInProdFabProd: React.FC = () => {
  return (
    <div className="menuInProdFab">
      <NavLink to="/go-menu-entradas-crear-reporte-prod-prod">
        <p className='go-menu-entradas-crear-reporte-prod-admin'>Crear Reporte</p>
      </NavLink>
      <NavLink to="/go-main-menu-prod-prod">
        <p className='go-main-menu-prod-admin-btn'>Menu Produccion</p>
      </NavLink>
    </div>
  );
};