import React from 'react';
import './buscarReporteProdAdmin.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const BuscarReporteProdAdmin: React.FC = () => {
  const [ selectedMonth, setSelectedMonth ] = useState<any>();
  const [ selectedYear, setSelectedYear ] = useState<any>();

  const monthSelection = [
    {Name:'Seleccione Mes', Value:''}, {Name:'Enero', Value: '01'}, {Name:'Febrero', Value: '02'},{Name:'Marzo', Value: '03'},
    {Name:'Abril', Value: '04'}, {Name:'Mayo', Value: '05'}, {Name:'Junio', Value: '06'}, {Name:'Julio', Value: '07'},
    {Name:'Agosto', Value: '08'}, {Name:'Septiembre', Value: '09'}, {Name:'Octubre', Value: '10'}, {Name:'Noviembre', Value: '11'},
    {Name:'Diciembre', Value: '12'}
  ];

  const yearSelection = [
    {Name:'Seleccione Año', Value:''}, {Name:'2020', Value: '2020'}, {Name:'2021', Value: '2021'},{Name:'2022', Value: '2022'},
    {Name:'2023', Value: '2023'}, {Name:'2024', Value: '2024'}, {Name:'2025', Value: '2025'}, {Name:'2026', Value: '2026'},
    {Name:'2027', Value: '2027'}, {Name:'2028', Value: '2028'}, {Name:'2029', Value: '2029'}, {Name: '2030', Value: '2030'}
  ];

  return (
    <div className="fabrica">
      <form className="top-filter-search-prods">
        <div className="crear-reporte-queso-marco">
          <select className="select-month-search" onChange={(event) => setSelectedMonth(event.target.value)}>
          {monthSelection.map(list => (
            <option className="option-date-style" value={list.Value}>
              {list.Name}
            </option>
          ))}
          </select>
          <select className="select-year-search" onChange={(event) => setSelectedYear(event.target.value)}>
          {yearSelection.map(list => (
            <option className="option-date-style" value={list.Value}>
              {list.Name}
            </option>
          ))}
          </select>
          <br></br>
          <button className='crear-reporte-queso-enviar-btn'>Buscar Reportes</button>
        </div>
      </form>
      <NavLink className='go-menu-entradas-prod-admin' to="/go-menu-entradas-prod-admin">
        <p>Menu Entradas</p>
      </NavLink>
    </div>
  );
};
