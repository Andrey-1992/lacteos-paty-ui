import React from 'react';
import './crearReporteProdAdmin.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { createProdRecord  } from '../Fabrica/AdminFab/MenuFabAdmin/ProduccionFabAdmin/EntradasProdFab/CrearReporteProdAdmin';
import { createProdRecorduction  } from '../FetchProductionRecords';

export const CrearReporteProdAdmin: React.FC = () => {
    const cheeseCategory = [
    {Name:'Seleccione Categoria', Value:''}, {Name:'Baraloso', Value:'baraloso'}, 
    {Name:'Comiteco', Value:'comiteco'}, {Name:'Comiteco BA', Value:'comitecoBA'}, 
    {Name:'Comiteco AA', Value:'comitecoAA'}, {Name:'Flor BA', Value:'florBA'}, 
    {Name:'Flor AA', Value:'floorAA'}
  ];

  const [ selectedCategory, setSelectedCategory ] = useState<string>('');
  const [ selectedDate, setSelectedDate ] = useState<string>();
  const [ selectedPieces, setSelectedPieces ] = useState<any>();
  const [ selectedOlladas, setSelectedOlladas ] = useState<any>();
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const createProdRecord = (event: { preventDefault: () => void; }): void => {
    event.preventDefault();
    createProdRecorduction({
      'quesoname': selectedCategory,
      'quesostatus': 'entrada',
      'quesoavailability': true,
      'nopieces': parseInt(selectedPieces),
      'nopiecessalida': 0,
      'weigth': 0,
      'weigthcurrent': 0,
      'holladas': parseInt(selectedOlladas),
      'datein': selectedDate,
      'dateout': selectedDate,
      'price': 0,
      'approvepord': 'False'
    })
    setIsDisable(true)
  }

  return (
    <div className="crearReporteProdAdmin">
      <form className="cheese-categories-form">
        <div className="crear-reporte-queso-marco">
          <img className="cheese-piece-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU'} alt={'Imagen de Pieza de Queso'} width="200" height="200"></img>
          <h2 className="crear-reporte-queso-texto">Tipo de Queso:</h2>
          <select className="cheese-categorie-" onChange={(event) => setSelectedCategory(event.target.value)}>
          {cheeseCategory.map(list => (
            <option className="option-choice-style" value={list.Value}>
              {list.Name}
            </option>
          ))}
        </select>
          <h2 className="crear-reporte-queso-texto">No piezas:</h2>
          <input type="number" className="crear-reporte-queso-num" onChange={(event) => setSelectedPieces(event.target.value)}></input>
          <h2 className="crear-reporte-queso-texto">No de Olladas:</h2>
          <input type="number" className="crear-reporte-queso-num" onChange={(event) => setSelectedOlladas(event.target.value)}></input>
          <h2 className="crear-reporte-queso-texto">Fecha</h2>
          <input type="date" className="crear-reporte-queso-date" onChange={(event) => setSelectedDate(event.target.value)}></input>
          <br></br>
          <button className='crear-reporte-queso-enviar-btn' disabled={isDisable} onClick={createProdRecord}>Enviar Reporte</button>
        </div>
      </form>
      <NavLink to="/go-menu-entradas-prod-admin">
        <p className='go-menu-entradas-prod-admin-ii'>Menu Produccion</p>
      </NavLink>
    </div>
  );
};