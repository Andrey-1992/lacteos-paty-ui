import React from 'react';
import './buscarReporteProdAdmin.css';
import { NavLink } from 'react-router-dom';

export const BuscarReporteProdAdmin: React.FC = () => {
  return (
    <div className="fabrica">
      <p>buscar Reporte Prod Admin</p>
      <NavLink className='go-menu-entradas-prod-admin' to="/go-menu-entradas-prod-admin">
        <p>Menu Entradas</p>
      </NavLink>
    </div>
  );
};
