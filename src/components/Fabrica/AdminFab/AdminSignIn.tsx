import React from 'react';
import './AdminSignIn.css';
import { NavLink } from 'react-router-dom';

export const AdminSignIn: React.FC = () => {
  return (
    <div className="adminSignIn">
      <p>Admin Sign In</p>
      <NavLink to="/go-main-menu-fab-admin">
        <p className='go-fad-menu-main'>Sign In</p>
      </NavLink>
    </div>
  );
};