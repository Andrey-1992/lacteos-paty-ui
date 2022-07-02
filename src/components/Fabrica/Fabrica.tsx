import React from 'react';
import { MenuSelectionI } from '../Fabrica/FabReusableComps/MenuSelectionI/MenuSelectionI';
import './Fabrica.css';

export const Fabrica: React.FC = () => {
  return (
    <div className="fabrica">
      <h2 className={'menu-text'}>Administracion Fabrica</h2>
      <h2 className={'menu-text'}>Produccion Fabrica</h2>
      {/* <MenuSelectionI firstSection={'Administracion Fabrica'} secondSection={'Produccion Fabrica'} /> */}
    </div>
  );
};
