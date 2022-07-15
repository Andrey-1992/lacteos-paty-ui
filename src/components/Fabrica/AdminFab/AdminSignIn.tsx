import React from 'react';
import './AdminSignIn.css';
import { NavLink } from 'react-router-dom';

export const AdminSignIn: React.FC = () => {
  return (
    <div className="adminSignIn">
      <div className="login-form-container">
        <div className="login-form">
          <p className="login-header">Registro</p>
          <div className="group">
            <input type="text" className="login-input"></input><span className="bar"></span>
            <label className="login-label"><i className="far fa-user"></i>Usuario</label>
          </div>
          <div className="group">
            <input type="password" className="login-input"></input><span className="bar"></span>
            <label className="login-label"><i className="fas fa-key"></i>Contraseña</label>
          </div>
          <NavLink to="/go-main-menu-fab-admin">
            <p className="login-button">Inciar Sesión</p>
          </NavLink> 
          <p className="warnings"></p>
        </div>
      </div>
    </div>
  );
};