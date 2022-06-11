import React from 'react';
import './ProduccionFabAdmin.css';
import { NavLink } from 'react-router-dom';

export const ProduccionFabAdmin: React.FC = () => {
  return (
    <div className="ProduccionFabAdmin">
      <NavLink className='go-menu-entradas-prod-admin' to="/go-menu-entradas-prod-admin">
        <p>Entrada De Queso</p>
      </NavLink>
      <p>Salida De Queso</p>
      <NavLink className='go-main-menu-fab-admin' to="/go-main-menu-fab-admin">
        <p>Menu General</p>
      </NavLink>
    </div>
  );
};