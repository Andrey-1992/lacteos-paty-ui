import React from 'react';
import './FabricaSelection.css';
import { NavLink } from 'react-router-dom';

export const FabricaSelection: React.FC = () => {
  return (
    <div className="fabrica">
      <NavLink to="/go-fad-sign-admin-in">
        <p className='go-fad-admin-sign-in'>Administacion</p>  
      </NavLink> 
      <p className='go-fad-prod-sign-in'>Produccion</p>
      <NavLink to="/">
        <p className='go-fad-dis-menu'>Menu Inicial</p>
      </NavLink>
    </div>
  );
};
