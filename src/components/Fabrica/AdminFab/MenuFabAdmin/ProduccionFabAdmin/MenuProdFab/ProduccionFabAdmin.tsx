import React from 'react';
import './ProduccionFabAdmin.css';
import { NavLink } from 'react-router-dom';

export const ProduccionFabAdmin: React.FC = () => {
  return (
    <div className="ProduccionFabAdmin">
      <NavLink to="/go-menu-entradas-prod-admin">
        <p className='go-menu-entradas-prod-admin'>Entrada De Queso</p>
      </NavLink>
      <p className='go-menu-salidas-prod-admin'>Salida De Queso</p>
      <NavLink to="/go-main-menu-fab-admin">
        <p className='go-back-fad-singin-menu'>Menu Administracion</p>
      </NavLink>
    </div>
  );
};