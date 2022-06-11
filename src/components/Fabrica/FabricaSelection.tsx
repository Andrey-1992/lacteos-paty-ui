import React from 'react';
import './FabricaSelection.css';
import { NavLink } from 'react-router-dom';

export const FabricaSelection: React.FC = () => {
  return (
    <div className="fabrica">
      <NavLink className='go-fad-sign-in' to="/go-fad-sign-in">
        <p>Administacion</p>  
      </NavLink> 
      <p>Produccion</p>
      <NavLink className='go-fad-dis-menu' to="/">
        <p>Menu Inicial</p>
      </NavLink>
    </div>
  );
};
