import React from 'react';
import './MenuFabAdmin.css';
import { NavLink } from 'react-router-dom';

export const MenuFabAdmin: React.FC = () => {
  return (
    <div className="MenuFabAdmin">
      <NavLink to="/go-main-menu-prod-admin">
        <p className='go-main-menu-prod-admin'>Produccion</p>
      </NavLink>
      <p className='go-main-menu-inv-admin'>Inventario</p>
      <NavLink to="/fabrica-registro">
        <p className='go-fad-dis-menu'>Menu Roles</p>
      </NavLink>
    </div>
  );
};
