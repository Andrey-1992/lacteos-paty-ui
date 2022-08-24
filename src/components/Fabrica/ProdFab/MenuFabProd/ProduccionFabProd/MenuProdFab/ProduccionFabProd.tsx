import './ProduccionFabProd.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchAllProdRecords } from '../FetchProductionRecords';

export const ProduccionFabProd: React.FC = () => {
  const [ baralosoStorage, setBaralosoStorage ] = useState<number>(0);
  const [ comitecoStorage, setComitecoStorage ] = useState<number>(0);
  const [ comitecoAaStorage, setComitecoAaStorage ] = useState<number>(0);
  const [ comitecoBaStorage, setComitecoBaStorage ] = useState<number>(0);
  const [ florAaStorage, setFlorAaStorage ] = useState<number>(0);
  const [ florBaStorage, setFlorBaStorage ] = useState<number>(0);


  const filterDataByDate = (data:any): void => {
    let baraloso = 0;
    let comiteco = 0;
    let comitecoAa = 0;
    let comitecoBa = 0;
    let florAa = 0;
    let florBa = 0;

    const dataFiltered = data.map((dataRecords: any) => {
      if (dataRecords.quesoname === 'Baraloso' && dataRecords.approvepord === 'Verdadero') {
        baraloso += dataRecords.nopieces
      }
      if (dataRecords.quesoname === 'Comiteco' && dataRecords.approvepord === 'Verdadero') {
        comiteco += dataRecords.nopieces
      }
      if (dataRecords.quesoname === 'Comiteco AA' && dataRecords.approvepord === 'Verdadero') {
        comitecoAa += dataRecords.nopieces
      }
      if (dataRecords.quesoname === 'Comiteco BA' && dataRecords.approvepord === 'Verdadero') {
        comitecoBa += dataRecords.nopieces
      }
      if (dataRecords.quesoname === 'Flor AA' && dataRecords.approvepord === 'Verdadero') {
        florAa += dataRecords.nopieces
      }
      if (dataRecords.quesoname === 'Flor BA' && dataRecords.approvepord === 'Verdadero') {
        florBa += dataRecords.nopieces
      }
    })
    setBaralosoStorage(baraloso);
    setComitecoStorage(comiteco);
    setComitecoAaStorage(comitecoAa);
    setComitecoBaStorage(comitecoBa);
    setFlorAaStorage(florAa);
    setFlorBaStorage(florBa);
  }

  const makeFetch = (): void => {
    fetchAllProdRecords()
    .then(data => filterDataByDate(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    makeFetch()
  }, [])

  const dateObj = new Date();
  const dateArray = dateObj.toString().split(' ');
  const todaysDate = dateArray.splice(1, 3).join(' / ')

  return (
    <div className="ProduccionFabAdmin">
      <div className='cheese-invetory-container-header'>
        <h2 className="inventario-fab-text">
          Inventario Fabrica
        </h2>
        <br></br>
        <h2 className="inventario-fab-text">
        {todaysDate}
        </h2>
      </div>
      <div className='cheese-invetory-container'>
        <div className="cheese-invenroty-card">
          <img className="cheese-piece-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU'} alt={'Imagen de Pieza de Queso'} width="100" height="100"></img>
          <p className="cheese-invenroty-card-name">Baraloso</p>
          <p className="cheese-invenroty-card-nopieces-text">No Piezas:</p>
          <p className="cheese-invenroty-card-nopieces-num">{baralosoStorage}</p>
        </div>
        <div className="cheese-invenroty-card">
          <img className="cheese-piece-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU'} alt={'Imagen de Pieza de Queso'} width="100" height="100"></img>
          <p className="cheese-invenroty-card-name">Comiteco</p>
          <p className="cheese-invenroty-card-nopieces-text">No Piezas:</p>
          <p className="cheese-invenroty-card-nopieces-num">{comitecoStorage}</p>
        </div>
        <div className="cheese-invenroty-card">
          <img className="cheese-piece-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU'} alt={'Imagen de Pieza de Queso'} width="100" height="100"></img>
          <p className="cheese-invenroty-card-name">Comiteco AA</p>
          <p className="cheese-invenroty-card-nopieces-text">No Piezas:</p>
          <p className="cheese-invenroty-card-nopieces-num">{comitecoAaStorage}</p>
        </div>
        <div className="cheese-invenroty-card">
          <img className="cheese-piece-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU'} alt={'Imagen de Pieza de Queso'} width="100" height="100"></img>
          <p className="cheese-invenroty-card-name">Comiteco BA</p>
          <p className="cheese-invenroty-card-nopieces-text">No Piezas:</p>
          <p className="cheese-invenroty-card-nopieces-num">{comitecoBaStorage}</p>
        </div>
      </div>
      <div className = 'menu-text-styling'>
        <NavLink to="/go-menu-salidas-prod-prod">
          <p className='go-menu-salidas-prod-admin'>Salida De Queso</p>
        </NavLink>
        <NavLink to="/go-main-menu-fab-prod">
          <p className='go-back-fad-singin-menu'>Menu Administracion</p>
        </NavLink>
        <NavLink to="/go-menu-entradas-prod-prod">
          <p className='go-menu-entradas-prod-admin'>Entrada De Queso</p>
        </NavLink>
      </div>
    </div>
  );
};