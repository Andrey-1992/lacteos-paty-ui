import React from 'react';
import './MenuFabDir.css';
import { NavLink } from 'react-router-dom';

export const MenuFabDir: React.FC = () => {
  return (
    <div className="menu-fab-admin">
      <NavLink to="/go-main-menu-prod-admin">
        <p className='go-main-menu-prod-admin'>Produccion</p>
      </NavLink>
      <p className='go-main-menu-inv-admin'>Inventario</p>
      <NavLink to="/fabrica-registro">
        <p className='go-back-fad-singin-menu-1'>Menu Roles</p>
      </NavLink>
    </div>
  );
};