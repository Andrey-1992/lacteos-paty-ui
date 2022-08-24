import React from 'react';
import './FabricaSelection.css';
import { NavLink } from 'react-router-dom';

export const FabricaSelection: React.FC = () => {
  return (
    <div className="fabrica">
      <NavLink to="/go-fad-sign-admin-in">
        <p className='go-fad-admin-sign-in'>Usuario: Administacion</p>  
      </NavLink> 
      <NavLink to="/go-prod-sign-admin-in">
        <p className='go-fad-prod-sign-in'>Usuario: Produccion</p>
      </NavLink>
      <NavLink to="/go-prod-sign-dir-in">
        <p className='go-fad-prod-sign-in'>Usuario: Directivo</p>
      </NavLink>
      <NavLink to="/">
        <p className='go-back-fad-dis-menu'>Menu Inicial</p>
      </NavLink>
    </div>
  );
};
