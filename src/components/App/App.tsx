import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MenuSelectionI } from '../Fabrica/FabReusableComps/MenuSelectionI/MenuSelectionI';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route 
          path='/'
          element={
            <div className={'main-menu-selection'}>
              <h2 className={'menu-text'}>Distribucion</h2>
              <h2 className={'menu-text'}>Fabrica</h2>
            </div>
          }
          />
        </Routes>
      {/* <MenuSelectionI firstSection={'Distribucion'} secondSection={'Fabrica'} /> */}
    </div>
  );
};
