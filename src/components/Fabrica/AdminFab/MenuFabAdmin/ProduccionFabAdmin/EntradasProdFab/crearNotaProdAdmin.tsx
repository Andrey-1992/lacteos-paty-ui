import React from 'react';
import './crearNotaProdAdmin.css';
import { NavLink } from 'react-router-dom';

export const CrearNotaProdAdmin: React.FC = () => {
  return (
    <div className="crearNotaProdAdmin">
      <p>crear Nota Prod Admin</p>
      <NavLink className='go-menu-entradas-prod-admin' to="/go-menu-entradas-prod-admin">
        <p>Menu Entradas</p>
      </NavLink>
    </div>
  );
};