import React from 'react';
import './fabVsProd.css';
import { NavLink } from 'react-router-dom';

export const FabVsDistribucion: React.FC = () => {
  return (
    <div className="fabVsProd">
      <NavLink className='go-distribucion-register' to="/">
        <p>Distribucion</p>  
      </NavLink>
      <NavLink className='go-fabrica-register' to="/fabrica-registro">
        <p>Fabrica</p>
      </NavLink>
    </div>
  );
};