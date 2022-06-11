import React from 'react';
import './crearReporteProdAdmin.css';
import { NavLink } from 'react-router-dom';

export const CrearReporteProdAdmin: React.FC = () => {
  return (
    <div className="crearReporteProdAdmin">
      <p>crear Reporte Prod Admin</p>
      <NavLink className='go-menu-entradas-prod-admin' to="/go-menu-entradas-prod-admin">
        <p>Menu Entradas</p>
      </NavLink>
    </div>
  );
};