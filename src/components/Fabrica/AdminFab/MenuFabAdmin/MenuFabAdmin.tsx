import React from 'react';
import './MenuFabAdmin.css';
import { NavLink } from 'react-router-dom';

export const MenuFabAdmin: React.FC = () => {
  return (
    <div className="MenuFabAdmin">
      <NavLink className='go-main-menu-prod-admin' to="/go-main-menu-prod-admin">
        <p>Produccion</p>
      </NavLink>
      <p>Inventario</p>
      <NavLink className='go-fad-dis-menu' to="/fabrica-registro">
        <p>Menu Roles</p>
      </NavLink>
    </div>
  );
};
