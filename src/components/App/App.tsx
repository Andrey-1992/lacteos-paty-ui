import React from 'react';
import './App.css';
import { MenuSelectionI } from '../Fabrica/FabReusableComps/MenuSelectionI/MenuSelectionI';

export const App: React.FC = () => {
  return (
    <div className="App">
      {/* <h1>Lacteos Paty (App Component)</h1> */}
      <h2 className={'menu-text'}>Distribucion</h2>
      <h2 className={'menu-text'}>Fabrica</h2>
      {/* <MenuSelectionI firstSection={'Distribucion'} secondSection={'Fabrica'} /> */}
    </div>
  );
};
