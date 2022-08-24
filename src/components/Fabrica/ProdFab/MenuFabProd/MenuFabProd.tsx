import React from 'react';
import './MenuFabProd.css';
import { NavLink } from 'react-router-dom';

export const MenuFabProd: React.FC = () => {
  return (
    <div className="menu-fab-admin">
      <NavLink to="/go-main-menu-prod-prod">
        <p className='go-main-menu-prod-admin'>Produccion</p>
      </NavLink>
      <p className='go-main-menu-inv-admin'>Inventario</p>
      <NavLink to="/fabrica-registro">
        <p className='go-back-fad-singin-menu-1'>Menu Roles</p>
      </NavLink>
    </div>
  );
};