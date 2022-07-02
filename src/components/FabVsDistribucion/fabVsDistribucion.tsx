import React from 'react';
import './fabVsProd.css';
import { NavLink } from 'react-router-dom';

export const FabVsDistribucion: React.FC = () => {
  return (
    <div className="fabVsProd">
      <NavLink to="/">
        <p className='go-distribucion-register'>Distribucion</p>  
      </NavLink>
      <NavLink to="/fabrica-registro">
        <p className='go-fabrica-register'>Fabrica</p>
      </NavLink>
    </div>
  );
};